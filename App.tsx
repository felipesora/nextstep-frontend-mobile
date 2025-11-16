import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import theme from './src/styles/theme';
import { AppNavigator } from './src/navigation/AppNavigator';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

function App() {

  const [fontsLoaded] = useFonts({
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });

    if (!fontsLoaded) {
      return null; // tela branca temporária enquanto carrega
    }

  return (
    <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor={theme.colors.primary} 
        />
        <AppNavigator />
    </ThemeProvider>
  );
}

export default App;
