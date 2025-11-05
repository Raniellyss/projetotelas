import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.config"; 

const EsqueciSenha = () => {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const router = useRouter();

  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMensagem("Email de redefinição enviado! Verifique sua caixa de entrada.");
    } catch (error) {
      console.log(error.code, error.message);
      if (error.code === "auth/user-not-found") {
        setMensagem(" Nenhum usuário encontrado com esse email.");
      } else if (error.code === "auth/invalid-email") {
        setMensagem("Email inválido.");
      } else {
        setMensagem("Erro ao enviar email, tente novamente.");
      }
    }
  };

  return (
    <View style={[styles.container, styles.fundo]}>
      <Image source={require("../img/Group12.png")} style={styles.logo} />

      <Text style={styles.title}>Recuperar Senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Enviar Email</Text>
      </TouchableOpacity>

      {mensagem !== "" && <Text style={styles.message}>{mensagem}</Text>}

      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.voltar}>Voltar ao login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  fundo: {
    backgroundColor: "#FFD75F",
  },
  logo: {
    width: "40%",
    aspectRatio: 1,
    resizeMode: "contain",
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#8C0000",
  },
  input: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    marginTop: 15,
    fontSize: 14,
    color: "green",
    textAlign: "center",
  },
  voltar: {
    marginTop: 20,
    fontSize: 16,
    color: "#000",
  },
});

export default EsqueciSenha;
