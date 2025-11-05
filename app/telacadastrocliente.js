import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config'; 

export default function CadastroCliente() {
  const router = useRouter();

  const [form, setForm] = useState({
    nome: '',
    dataNasc: '',
    telefone: '',
    email: '',
    cidade: '',
    uf: '',
    rua: '',
    numero: '',
    complemento: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleConcluir = async () => {
    if (form.senha !== form.confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    try {
     
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.senha);
      const user = userCredential.user;

      Alert.alert("Sucesso", "Cadastro concluído com sucesso!");
      console.log("Usuário criado:", user.uid);

      router.replace('/telaprincipal');

    } catch (error) {
      console.error("Erro no cadastro:", error);
      Alert.alert("Erro no cadastro", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro de Cliente</Text>
        <Image source={require('../img/user.png')} style={styles.headerIcon} />
      </View>

      <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#fff" value={form.nome} onChangeText={v => handleChange('nome', v)} />
      <TextInput style={styles.input} placeholder="Data de Nasc." placeholderTextColor="#fff" value={form.dataNasc} onChangeText={v => handleChange('dataNasc', v)} />
      <TextInput style={styles.input} placeholder="Nº de telefone" placeholderTextColor="#fff" keyboardType="phone-pad" value={form.telefone} onChangeText={v => handleChange('telefone', v)} />
      <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#fff" keyboardType="email-address" value={form.email} onChangeText={v => handleChange('email', v)} />

      <View style={styles.row}>
        <TextInput style={[styles.input, styles.smallInput]} placeholder="Cidade" placeholderTextColor="#fff" value={form.cidade} onChangeText={v => handleChange('cidade', v)} />
        <TextInput style={[styles.input, styles.smallInput]} placeholder="UF" placeholderTextColor="#fff" value={form.uf} onChangeText={v => handleChange('uf', v)} />
        <TextInput style={[styles.input, styles.smallInput]} placeholder="Rua" placeholderTextColor="#fff" value={form.rua} onChangeText={v => handleChange('rua', v)} />
      </View>

      <View style={styles.row}>
        <TextInput style={[styles.input, styles.smallInput]} placeholder="Num" placeholderTextColor="#fff" keyboardType="numeric" value={form.numero} onChangeText={v => handleChange('numero', v)} />
        <TextInput style={[styles.input, styles.smallInput]} placeholder="Complemento" placeholderTextColor="#fff" value={form.complemento} onChangeText={v => handleChange('complemento', v)} />
      </View>

      <TextInput style={styles.input} placeholder="Criar Senha Forte" placeholderTextColor="#fff" secureTextEntry value={form.senha} onChangeText={v => handleChange('senha', v)} />
      <TextInput style={styles.input} placeholder="Confirmar Senha" placeholderTextColor="#fff" secureTextEntry value={form.confirmarSenha} onChangeText={v => handleChange('confirmarSenha', v)} />

      <TouchableOpacity style={styles.loginButton} onPress={handleConcluir}>
        <Text style={styles.loginButtonText}>Concluir</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFD75F',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    width: '100%',
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerIcon: {
    width: 35,
    height: 35,
    tintColor: 'yellow',
  },
  input: {
    backgroundColor: '#8C0000',
    color: '#fff',
    width: '100%',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  smallInput: {
    flex: 1,
    marginRight: 5,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
removeEventListene