import { View, Text, TextInput, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function TelaPrincipal() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput placeholder="Buscar no LAR" style={styles.searchInput} />
      </View>

      <Text style={styles.sectionTitle}>Principais buscas:</Text>
      <View style={styles.buscasRow}>
        <Text style={styles.buscaCircle}>E</Text>
        <Text style={styles.buscaCircle}>W</Text>
        <Text style={styles.buscaCircle}>M</Text>
      </View>

      <ScrollView style={styles.itemList}>
        <View style={styles.itemBox}>
          <View style={styles.itemText}>
            <Text style={styles.foodTitle}>E Coxinha</Text>
            <Text style={styles.foodPrice}>R$ 20,00</Text>
            <Link href="/produto1"><Text style={styles.moreInfo}>Mais Informações...</Text></Link>
          </View>
        </View>

        <View style={styles.itemBox}>
          <View style={styles.itemText}>
            <Text style={styles.foodTitle}>W Pastel</Text>
            <Text style={styles.foodPrice}>R$ 15,00</Text>
            <Link href="/produto2"><Text style={styles.moreInfo}>Mais Informações...</Text></Link>
          </View>
        </View>

        <View style={styles.itemBox}>
          <View style={styles.itemText}>
            <Text style={styles.foodTitle}>M Strogonoff</Text>
            <Text style={styles.foodPrice}>R$ 25,00</Text>
            <Link href="/produto3"><Text style={styles.moreInfo}>Mais Informações...</Text></Link>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomMenu}>
        <Link href="/home">
          <Image source={require('../img/pet-house.png')} style={styles.menuIcon} />
        </Link>
        <Link href="/chat">
          <Image source={require('../img/chat.png')} style={styles.menuIcon} />
        </Link>
        <Link href="/entregas">
          <Image source={require('../img/moto.png')} style={styles.menuIcon} />
        </Link>
        <Link href="/telaeditarperfilcliente">
          <Image source={require('../img/people.png')} style={styles.menuIcon} />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD966',
    paddingTop: 40,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  },
  iconSmall: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  buscasRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  buscaCircle: {
    backgroundColor: '#990000',
    color: '#fff',
    padding: 10,
    borderRadius: 30,
    fontWeight: 'bold',
    width: 40,
    textAlign: 'center',
  },
  itemList: {
    flex: 1,
    marginHorizontal: 10,
  },
  itemBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  itemText: {
    padding: 10,
    flex: 1,
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodPrice: {
    color: '#000',
    fontSize: 15,
    marginVertical: 4,
  },
  moreInfo: {
    color: 'brown',
    fontSize: 13,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFE699',
    paddingVertical: 10,
  },
  menuIcon: {
    width: 28,
    height: 28,
  },
});
