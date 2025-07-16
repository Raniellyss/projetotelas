import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function CadastroRestaurante() {
  return (
    <View style={styles.container}>
      <View style={styles.textWithIcon}>
        <Image source={require('../img/restaurant-cutlery-symbol-of-a-cross.png')} style={styles.icon} />
        <Text style={styles.text}>Cadastro Restaurante</Text>
      </View>

     
      <Link href="/telainicialrestaurante" asChild>
        <Button title="Cadastrar Restaurante" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
