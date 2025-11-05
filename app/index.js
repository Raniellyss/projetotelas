import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { TextInput } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebase.config'; 
import { Button } from 'react-native-paper'

const App = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false); 

  const router = useRouter();

  const handleLogin = () => {
    setLoading(true);
    console.log('email:' + email);
    console.log('senha:' + senha);
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
    
        
        setLoading(false);

        const user = userCredential.user;
        console.log("deu certo");
     
        router.push('/telaprincipal');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error(errorCode, errorMessage);
      });
  };

  
  return (
    <View style={[styles.container, styles.fundo]}>handleLogin
      <Image source={require('../img/Group12.png')} style={styles.logo} />

      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={a => setEmail(a)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={a => setSenha(a)}
        />
      </View>

       <Button mode='contained' onPress={handleLogin} loading={loading}>LOGIN</Button>

      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/telainicialchefs')}>
        <Text style={styles.loginText}>LOGIN</Text>
        <Image source={require('../img/chef-hat.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/telainicialrestaurante')}>
        <Text style={styles.loginText}>LOGIN</Text>
        <Image source={require('../img/restaurant-cutlery-symbol-of-a-cross.png')} style={styles.icon} />
      </TouchableOpacity>

      <Text style={{ marginTop: 10 }}>Ainda não tem conta?</Text>
      <TouchableOpacity onPress={() => router.push("/EsqueciSenha")}>
  <Text style={{ marginTop: 10, color: "#8C0000", fontWeight: "bold" }}>
    Esqueci a senha!
  </Text>
</TouchableOpacity>
      <Link style={styles.cadastreseText} href="/telacadastro">Cadastre-se!</Link>
    </View>
  );
};

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
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
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
  messageText: {
    color: 'green', // Para sucesso
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default App;
