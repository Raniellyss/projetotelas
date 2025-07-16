import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

export default function TelaRestauranteEmpire() {
  return (
    <View style={styles.container}>
     
      <View style={styles.fotoTopo}>
        <Text style={styles.imgTexto}>imagem</Text>
      </View>

     
      <View style={styles.cardInfo}>
        <View style={styles.logoEmpire}>
          <Text style={styles.logoText}>E</Text>
        </View>
        <Text style={styles.nomeRestaurante}>Empire</Text>
        <Text style={styles.email}>empire@email.com</Text>

        <Text style={styles.chatIcon}>💬</Text>

        <View style={styles.infoLinha}>
          <Text style={styles.localizacao}>📍 Messias</Text>
          <Text style={styles.nota}>⭐ 4,5</Text>
        </View>

        <Text style={styles.horario}>
          Aberto das <Text style={styles.hora}>18:00pm</Text> às <Text style={styles.hora}>01:00am</Text>
        </Text>
      </View>


      <ScrollView>
        <View style={styles.grid}>
          {Array.from({ length: 6 }).map((_, index) => (
            <View key={index} style={styles.gridItem}>
              <Text style={styles.imgTexto}>imagem</Text>
            </View>
          ))}
        </View>
      </ScrollView>

 
      <View style={styles.bottomMenu}>
        <Image source={require('../img/pet-house.png')} style={styles.menuIcon} />

        <Link href="/telaeditarperfilrestaurante" asChild>
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
  fotoTopo: {
    height: 150,
    backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgTexto: {
    color: '#fff',
  },
  cardInfo: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    marginTop: -30,
    elevation: 4,
    alignItems: 'center',
  },
  logoEmpire: {
    backgroundColor: '#800000',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  nomeRestaurante: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    color: '#333',
    marginBottom: 4,
  },
  chatIcon: {
    position: 'absolute',
    top: 10,
    right: 15,
    fontSize: 18,
  },
  infoLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 8,
  },
  localizacao: {
    fontSize: 14,
  },
  nota: {
    fontSize: 14,
    color: '#DAA520',
  },
  horario: {
    marginTop: 5,
    fontSize: 13,
  },
  hora: {
    color: 'red',
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
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFE699',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  menuIcon: {
    width: 28,
    height: 28,
  },
});
