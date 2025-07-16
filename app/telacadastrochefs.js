import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CadastroChefs() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.textWithIcon}>
        <Image source={require('../img/chapeu-de-chef.png')} style={styles.icon} />
        <Text style={styles.text}>Cadastro Chefs</Text>
      </View>

      <Button
        title="Cadastrar Chefs"
        onPress={() => router.push('/telainicialchefs')}
      />
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
