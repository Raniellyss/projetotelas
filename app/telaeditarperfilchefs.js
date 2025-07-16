import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function EditarPerfilChefe() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Editar Perfil (Chef)</Text>
        <Pressable onPress={() => router.push('/cadastrochefs')}>
          <Image source={require('../img/user.png')} style={styles.iconTop} />
        </Pressable>
      </View>


   <Pressable style={styles.logoutButton} onPress={() => router.replace('/')}>
           <Text style={styles.logoutText}>Sair da conta</Text>
         </Pressable>
   
    
      <View style={styles.bottomMenu}>
        <Pressable onPress={() => router.push('/telainicialchefs')}>
          <Image source={require('../img/pet-house.png')} style={styles.menuIcon} />
        </Pressable>

        <Pressable onPress={() => router.push('/chatchefs')}>
          <Image source={require('../img/chat.png')} style={styles.menuIcon} />
        </Pressable>

        <Pressable onPress={() => router.push('/entregaschefs')}>
          <Image source={require('../img/moto.png')} style={styles.menuIcon} />
        </Pressable>

        <Pressable onPress={() => router.push('/editarperfilchefe')}>
          <Image source={require('../img/people.png')} style={styles.menuIcon} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE699',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  iconTop: {
    width: 30,
    height: 30,
  },
  logoutButton: {
    backgroundColor: '#B22222',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFD966',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  menuIcon: {
    width: 28,
    height: 28,
  },
});
