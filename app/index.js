import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter, Link } from 'expo-router';

const App = () => {
  const router = useRouter();

  return (
    <View style={[styles.container, styles.fundo]}>
      <Image source={require('../img/Group12.png')} style={styles.logo} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputButtonText}>Email</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputButtonText}>Senha</Text>
        </TouchableOpacity>
      </View>

  
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/telaprincipal')}>
        <Text style={styles.loginText}>LOGIN</Text>
        <Image source={require('../img/user.png')} style={styles.icon} />
      </TouchableOpacity>

  
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/telainicialchefs')}>
        <Text style={styles.loginText}>LOGIN</Text>
        <Image source={require('../img/chef-hat.png')} style={styles.icon} />
      </TouchableOpacity>

   
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/telainicialrestaurante')}>
        <Text style={styles.loginText}>LOGIN</Text>
        <Image source={require('../img/restaurant-cutlery-symbol-of-a-cross.png')} style={styles.icon} />
      </TouchableOpacity>

      <Text style={{ marginTop: 10 }}>Ainda não tem conta?</Text>
      <Link style={styles.cadastreseText} href="/telacadastro">Cadastre-se!</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fundo: {
    backgroundColor: '#FFD75F',
  },
  logo: {
    width: '50%',
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 15,
  },
  inputButton: {
    backgroundColor: '#8C0000',
    padding: 10,
    borderRadius: 5,
  },
  inputButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  cadastreseText: {
    color: '#8C0000',
    fontSize: 18,
    marginTop: 5,
  },
});

export default App;
