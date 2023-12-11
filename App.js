import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell your name</Text>
      <Text style={styles.textSize}>Qual seu nome?</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    marginBottom: 5
  },
  textSize: {
    fontSize: 16
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 273,
    textAlign: 'center'
  }
});
