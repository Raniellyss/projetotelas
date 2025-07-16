import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

export default function TelaChefes() {
  return (
    <View style={styles.container}>
    
      <View style={styles.topo}>
        <View style={styles.fotoPerfil}>
          <Text style={styles.imgTexto}>imagem</Text>
        </View>
        <View style={styles.infoPerfil}>
          <Text style={styles.nomeUsuario}>Maria22</Text>
          <Text style={styles.posts}>80 Post</Text>
          <Text style={styles.nota}>⭐ 4,0</Text>
        </View>
      </View>


      <View style={styles.cardInfo}>
        <Text style={styles.cardNome}>Maria Albuquerque</Text>
        <Text>(82) 9836456</Text>
        <Text>mari@email.com</Text>
        <TouchableOpacity style={styles.botaoPost}>
          <Text style={styles.botaoTexto}>+</Text>
          <Text style={styles.textoPost}>Post</Text>
        </TouchableOpacity>
      </View>


      <ScrollView>
        <View style={styles.grid}>
          {Array.from({ length: 9 }).map((_, index) => (
            <View key={index} style={styles.gridItem}>
              <Text style={styles.imgTexto}>imagem</Text>
            </View>
          ))}
        </View>
      </ScrollView>


      <View style={styles.bottomMenu}>
        <Image source={require('../img/pet-house.png')} style={styles.menuIcon} />
        <Image source={require('../img/chat.png')} style={styles.menuIcon} />
        <Link href="/telaeditarperfilchefs" asChild>
          <TouchableOpacity>
            <Image source={require('../img/people.png')} style={styles.menuIcon} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD966',
  },
  topo: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  fotoPerfil: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  infoPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  nomeUsuario: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
  posts: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 10,
  },
  nota: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardInfo: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  cardNome: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  botaoPost: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    alignSelf: 'flex-end',
    backgroundColor: '#ddd',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  botaoTexto: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5,
  },
  textoPost: {
    fontSize: 14,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    justifyContent: 'space-around',
  },
  gridItem: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  imgTexto: {
    color: '#999',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFE699',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  menuIcon: {
    width: 28,
    height: 28,
  },
});
