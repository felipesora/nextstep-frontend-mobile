import React, { useCallback, useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import Cabecalho from '../../components/Cabecalho';
import { 
  Container,
  Content,
  Titulo,
  Descricao,
  FormContainer,
  PerguntaContainer,
  PerguntaTitulo,
  OpcoesContainer,
  Opcao,
  OpcaoTexto,
  OpcaoSelecionada,
  InputHabilidades,
  ContadorCaracteres,
  BotoesContainer,
  EnviarButton,
  EnviarButtonText,
  CancelarButton,
  CancelarButtonText,
  ResultadoContainer,
  ResultadoTitulo,
  ResultadoDescricao,
  ResultadoAcoes,
  AcessarButton,
  AcessarButtonText,
  VoltarButton,
  VoltarButtonText,
  MultiSelectContainer,
  MultiSelectOpcao,
  MultiSelectTexto,
  MensagemContainer,
  Erro
} from './styles';
import { Trilha } from '../../types/types';
import { listarTrilhasAtivas } from '../../services/trilhaService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cadastrarRespostaFormulario } from './services/formularioService';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface RespostaFormulario {
  nivel: string;
  objetivo: string;
  areas: string[];
  horas: string;
  habilidades: string;
}

const FormularioRecomendacao = () => {
  const navigation = useNavigation<NavigationProp>();
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);
  const [respostas, setRespostas] = useState<RespostaFormulario>({
    nivel: '',
    objetivo: '',
    areas: [],
    horas: '',
    habilidades: ''
  });
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [trilhaRecomendada, setTrilhaRecomendada] = useState<any>(null);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string>('');

  useFocusEffect(
        useCallback(() => {
        const buscarTrilhas = async () => {
            try {
            const response = await listarTrilhasAtivas();
            const lista: Trilha[] = response.data;
            setTrilhas(lista);
            console.log("Trilhas ativas:", lista);
            } catch (error) {
            console.error("Erro ao buscar trilhas", error);
            }
        };

        buscarTrilhas();
        }, [])
  );
    
  // Opções das perguntas
  const opcoesNivel = [
    { id: 'NENHUMA', label: 'Nenhuma experiência' },
    { id: 'INICIANTE', label: 'Iniciante' },
    { id: 'INTERMEDIARIO', label: 'Intermediário' },
    { id: 'AVANCADO', label: 'Avançado' }
  ];

  const opcoesObjetivo = [
    { id: 'PRIMEIRO_EMPREGO', label: 'Conseguir o primeiro emprego na área' },
    { id: 'MUDAR_CARREIRA', label: 'Mudar de carreira' },
    { id: 'CRESCER_AREA', label: 'Crescer profissionalmente na área atual' },
    { id: 'APRENDER', label: 'Aprender novas tecnologias por interesse pessoal' }
  ];

  const opcoesAreas = [
    { id: 'FRONTEND', label: 'Frontend' },
    { id: 'BACKEND', label: 'Backend' },
    { id: 'MOBILE', label: 'Mobile' },
    { id: 'CLOUD', label: 'Cloud / DevOps' },
    { id: 'DADOS', label: 'Dados / IA' },
    { id: 'CIBER', label: 'Cibersegurança' },
    { id: 'DESIGN', label: 'UX/UI Design' }
  ];

  const opcoesHoras = [
    { id: 'ATE_5H', label: 'Até 5h' },
    { id: 'DE_6_A_10H', label: '6 a 10h' },
    { id: 'DE_11_A_15H', label: '11 a 15h' },
    { id: 'MAIS_DE_15H', label: 'Mais de 15h' }
  ];

  const handleSelecionarNivel = (nivel: string) => {
    setRespostas(prev => ({ ...prev, nivel }));
  };

  const handleSelecionarObjetivo = (objetivo: string) => {
    setRespostas(prev => ({ ...prev, objetivo }));
  };

  const handleSelecionarArea = (area: string) => {
    setRespostas(prev => {
      const areas = prev.areas.includes(area)
        ? prev.areas.filter(a => a !== area)
        : [...prev.areas, area];
      
      // Limitar a 3 seleções
      if (areas.length > 3) {
        return prev;
      }
      
      return { ...prev, areas };
    });
  };

  const handleSelecionarHoras = (horas: string) => {
    setRespostas(prev => ({ ...prev, horas }));
  };

  const handleEnviarFormulario = async () => {
    // Validação
    if (!respostas.nivel || !respostas.objetivo || respostas.areas.length === 0 || !respostas.horas) {
      setErro('Por favor, responda todas as perguntas obrigatórias.');
      return;
    }

    setEnviando(true);

    try {
      // Simulação da IA - Aqui você integraria com sua API real
      await new Promise(resolve => setTimeout(resolve, 2000));

      const idUsuarioStorage = await AsyncStorage.getItem("usuarioId");

      const resposta = {
        nivelExperiencia: respostas.nivel,
        objetivoCarreira: respostas.objetivo,
        areaTecnologia1: respostas.areas[0],
        areaTecnologia2: respostas.areas[1],
        areaTecnologia3: respostas.areas[2],
        horasEstudo: respostas.horas,
        habilidades: respostas.habilidades,
        idUsuario: Number(idUsuarioStorage)
      };

      await cadastrarRespostaFormulario(resposta);
      
      // Lógica simples de recomendação baseada nas respostas
      const trilhaSorteada = gerarRecomendacao();
      setTrilhaRecomendada(trilhas[trilhaSorteada]);
      setMostrarResultado(true);
      
    } catch (error) {
        setErro('Não foi possível processar sua solicitação. Tente novamente.');
    } finally {
      setEnviando(false);
    }
  };
//     // Lógica simples de recomendação - você pode aprimorar isso
//     const { nivel, areas } = respostas;
    
//     if (areas.includes('FRONTEND')) {
//       return {
//         id: 1,
//         nome: 'Desenvolvimento Frontend',
//         descricao: 'Aprenda a criar interfaces modernas e responsivas com React, Vue.js e as melhores práticas do mercado. Ideal para quem quer criar experiências incríveis para os usuários.',
//         nivel: nivel === 'NENHUMA' ? 'INICIANTE' : nivel
//       };
//     } else if (areas.includes('BACKEND')) {
//       return {
//         id: 2,
//         nome: 'Backend com Node.js',
//         descricao: 'Domine a criação de APIs robustas, bancos de dados e arquitetura de software. Perfeito para quem quer trabalhar na lógica por trás das aplicações.',
//         nivel: nivel === 'NENHUMA' ? 'INICIANTE' : nivel
//       };
//     } else if (areas.includes('MOBILE')) {
//       return {
//         id: 3,
//         nome: 'Mobile com React Native',
//         descricao: 'Crie aplicativos nativos para iOS e Android usando uma única base de código. Ideal para desenvolvedores que querem alcançar usuários mobile.',
//         nivel: nivel === 'NENHUMA' ? 'INICIANTE' : nivel
//       };
//     } else if (areas.includes('DADOS_IA')) {
//       return {
//         id: 4,
//         nome: 'Data Science & IA',
//         descricao: 'Explore o mundo dos dados com Python, Machine Learning e análise de dados. Para quem é curioso sobre inteligência artificial e tomada de decisão baseada em dados.',
//         nivel: nivel === 'NENHUMA' ? 'INICIANTE' : nivel
//       };
//     } else {
//       return {
//         id: 1,
//         nome: 'Desenvolvimento Web FullStack',
//         descricao: 'Uma jornada completa que cobre tanto frontend quanto backend, ideal para quem está começando e quer ter uma visão geral do desenvolvimento web.',
//         nivel: 'INICIANTE'
//       };
//     }
//   };

  const gerarRecomendacao = () => {
    const trilhaSorteada = Math.floor(Math.random() * trilhas.length);

    console.log(trilhaSorteada); 
    return trilhaSorteada;
  };

  const handleAcessarTrilha = () => {
    if (trilhaRecomendada) {
      navigation.navigate('DetalhesTrilha', { idTrilha: trilhaRecomendada.id });
    }
  };

  const handleVoltarFormulario = () => {
    setMostrarResultado(false);
    setTrilhaRecomendada(null);
  };

  const handleCancelar = () => {
    navigation.goBack();
  };

  if (mostrarResultado && trilhaRecomendada) {
    return (
      <Container>
        <Cabecalho />
        <ScrollView>
          <Content>
            <Titulo>Trilha Recomendada para Você!</Titulo>
            <Descricao>
              Com base nas suas respostas, encontramos a trilha perfeita para o seu momento de aprendizado.
            </Descricao>

            <ResultadoContainer>
              <ResultadoTitulo>{trilhaRecomendada.nome}</ResultadoTitulo>
              <ResultadoDescricao>{trilhaRecomendada.descricao}</ResultadoDescricao>
              
              <ResultadoAcoes>
                <AcessarButton onPress={handleAcessarTrilha}>
                  <AcessarButtonText>Acessar Trilha</AcessarButtonText>
                </AcessarButton>
                <VoltarButton onPress={handleVoltarFormulario}>
                  <VoltarButtonText>Voltar ao Formulário</VoltarButtonText>
                </VoltarButton>
              </ResultadoAcoes>
            </ResultadoContainer>
          </Content>
        </ScrollView>
      </Container>
    );
  }

  return (
    <Container>
      <Cabecalho />
      <ScrollView>
        <Content>
          <Titulo>Encontre sua Trilha Ideal</Titulo>
          <Descricao>
            Responda algumas perguntas e nossa IA irá recomendar a trilha de estudos perfeita para o seu momento profissional.
          </Descricao>

          <FormContainer>
            {/* Pergunta 1: Nível de experiência */}
            <PerguntaContainer>
              <PerguntaTitulo>1. Qual é o seu nível atual de experiência em tecnologia? *</PerguntaTitulo>
              <OpcoesContainer>
                {opcoesNivel.map(opcao => (
                  <Opcao 
                    key={opcao.id}
                    onPress={() => handleSelecionarNivel(opcao.id)}
                  >
                    {respostas.nivel === opcao.id ? (
                      <OpcaoSelecionada>●</OpcaoSelecionada>
                    ) : (
                      <OpcaoSelecionada style={{ opacity: 0.3 }}>○</OpcaoSelecionada>
                    )}
                    <OpcaoTexto selecionado={respostas.nivel === opcao.id}>
                      {opcao.label}
                    </OpcaoTexto>
                  </Opcao>
                ))}
              </OpcoesContainer>
            </PerguntaContainer>

            {/* Pergunta 2: Objetivo de carreira */}
            <PerguntaContainer>
              <PerguntaTitulo>2. Qual é o seu principal objetivo de carreira atualmente? *</PerguntaTitulo>
              <OpcoesContainer>
                {opcoesObjetivo.map(opcao => (
                  <Opcao 
                    key={opcao.id}
                    onPress={() => handleSelecionarObjetivo(opcao.id)}
                  >
                    {respostas.objetivo === opcao.id ? (
                      <OpcaoSelecionada>●</OpcaoSelecionada>
                    ) : (
                      <OpcaoSelecionada style={{ opacity: 0.3 }}>○</OpcaoSelecionada>
                    )}
                    <OpcaoTexto selecionado={respostas.objetivo === opcao.id}>
                      {opcao.label}
                    </OpcaoTexto>
                  </Opcao>
                ))}
              </OpcoesContainer>
            </PerguntaContainer>

            {/* Pergunta 3: Áreas de interesse */}
            <PerguntaContainer>
              <PerguntaTitulo>3. Quais áreas da tecnologia mais te interessam? *</PerguntaTitulo>
              <Descricao style={{ fontSize: 12, marginBottom: 12 }}>
                (Selecione até 3 áreas)
              </Descricao>
              <MultiSelectContainer>
                {opcoesAreas.map(opcao => (
                  <MultiSelectOpcao 
                    key={opcao.id}
                    onPress={() => handleSelecionarArea(opcao.id)}
                    selecionado={respostas.areas.includes(opcao.id)}
                  >
                    <MultiSelectTexto selecionado={respostas.areas.includes(opcao.id)}>
                      {opcao.label}
                    </MultiSelectTexto>
                  </MultiSelectOpcao>
                ))}
              </MultiSelectContainer>
              <Descricao style={{ fontSize: 12, marginTop: 8 }}>
                Selecionadas: {respostas.areas.length}/3
              </Descricao>
            </PerguntaContainer>

            {/* Pergunta 4: Horas de estudo */}
            <PerguntaContainer>
              <PerguntaTitulo>4. Quantas horas por semana você pode dedicar aos estudos? *</PerguntaTitulo>
              <OpcoesContainer>
                {opcoesHoras.map(opcao => (
                  <Opcao 
                    key={opcao.id}
                    onPress={() => handleSelecionarHoras(opcao.id)}
                  >
                    {respostas.horas === opcao.id ? (
                      <OpcaoSelecionada>●</OpcaoSelecionada>
                    ) : (
                      <OpcaoSelecionada style={{ opacity: 0.3 }}>○</OpcaoSelecionada>
                    )}
                    <OpcaoTexto selecionado={respostas.horas === opcao.id}>
                      {opcao.label}
                    </OpcaoTexto>
                  </Opcao>
                ))}
              </OpcoesContainer>
            </PerguntaContainer>

            {/* Pergunta 5: Habilidades técnicas (opcional) */}
            <PerguntaContainer>
              <PerguntaTitulo>5. Quais habilidades técnicas você já possui? (opcional)</PerguntaTitulo>
              <InputHabilidades
                placeholder="Ex: Java, HTML, Python, JavaScript, SQL..."
                placeholderTextColor="#8C8C9A"
                value={respostas.habilidades}
                onChangeText={(text:string) => setRespostas(prev => ({ ...prev, habilidades: text }))}
                multiline
                textAlignVertical="top"
                maxLength={400}
              />
              <ContadorCaracteres>
                {respostas.habilidades.length}/400 caracteres
              </ContadorCaracteres>
            </PerguntaContainer>

            <>
                {erro ? (
                    <MensagemContainer>
                    <Erro>{erro}</Erro>
                    </MensagemContainer>
                ) : null}
            </>

            {/* Botões */}
            <BotoesContainer>
              <EnviarButton onPress={handleEnviarFormulario} disabled={enviando}>
                <EnviarButtonText>
                  {enviando ? 'Analisando...' : 'Descobrir Minha Trilha'}
                </EnviarButtonText>
              </EnviarButton>

              <CancelarButton onPress={handleCancelar}>
                <CancelarButtonText>Cancelar</CancelarButtonText>
              </CancelarButton>
            </BotoesContainer>
          </FormContainer>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default FormularioRecomendacao;