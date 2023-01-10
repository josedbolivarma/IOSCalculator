import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { CalculadoraScreen } from './src/screens';
import { styles } from './src/theme';

export default function App() {
  return (
    <SafeAreaView style={ styles.fondo }>
      <StatusBar
        backgroundColor="black"
      />
      <CalculadoraScreen />
    </SafeAreaView>
  );
}