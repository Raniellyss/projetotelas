import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Cadastro() {
const router = useRouter();

return (
<View style={styles.container}>
<Text style={styles.title}>Cadastro</Text>


<Pressable style={styles.button} onPress={() => router.push('/telacadastrocliente')}>
<Text style={styles.buttonText}>Clientes</Text>
<Image source={require('../img/user.png')} style={styles.icon} />
</Pressable>

<Pressable style={styles.button} onPress={() => router.push('/telacadastrochefs')}>
<Text style={styles.buttonText}>Chefs</Text>
<Image source={require('../img/chef-hat.png')} style={styles.icon} />
</Pressable>


<Pressable style={styles.button} onPress={() => router.push('/telacadastrorestaurante')}>
<Text style={styles.buttonText}>Restaurantes</Text>
<Image source={require('../img/restaurant-cutlery-symbol-of-a-cross.png')} style={styles.icon} />
</Pressable>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFD700', // Amarelo
justifyContent: 'center',
alignItem: 'center',
padding: 20,
},
title:{
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#8B0000',
},

button:{
    backgroundColor:'#B22222',
    width:'80%',
    padding:15,
    borderRadius:10,
    marginBottom:20,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
},

buttonText:{
    color:'#fff',
    fontSize:18,
},

icon:{
    width: 24,
    height: 24,
},

});




	
