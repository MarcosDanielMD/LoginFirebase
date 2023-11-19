import {useState, useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Firebase from './Firebase';

export default function Acesso({ navigation}){
  const [email, setEmail] = useState ('');
  const [senha, setSenha] = useState ('');
  const [initialing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function dados(user) {
   setUser(user);
   if (initializing) setInitializing(false);
}
  function logar(){
    Firebase.auth()
    .signInWithEmailAndPassword(email,senha)
    .then(()=>{
      if(user){
        alert('Usuário não existe');
        return;
      }
      navigation.navigate('Home',{email});
    })
    .catch((error) => {
      alert(error);
      navigation.navigate('Acesso');
    });
  }
  useEffect(()=> {
    Firebase.auth().onAuthStateChanged(function (user) {
      const uid = user.id;
      const emai = user.email;
    });
  }, []);

  return(
    <SafeAreaView style={styles.container}>   
      <Text style={styles.titulo}> Aplicativos de fotos</Text>
      <Image
      source={require('../assets/photographer-407068_1280.jpg')}
      style={styles.img}
      />
      <TextInput
      style={styles.input}
      onChangeText={(email) => setEmail(email)}
      value={email}
      placeholder = "Digite o E-mail"
      />
      <TextInput
      style={styles.input}
      secureTextEntry={true}
      onChangeText={(senha) => setSenha(senha)}
      value={senha}
      placeholder = "Digite a senha"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
            logar();
        }}
      >
        <Text style={styles.botaoTexto}>Logar</Text>
      </TouchableOpacity>


      <TouchableOpacity>
      <Text
        style={styles.botaoCadastro}
        onPress={()=> navigation.navigate('Cadastro')}>
        Cadastro
        </Text>
      </TouchableOpacity>
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding:8
  },
  titulo:{
    margin:24,
    fontSize:38,
    fontWeight:'bold',
    textAlign:'center'
  },
  img:{
    width:250,
    height:200,
    borderRadius:10,
  },
  input:{
    backgroundColor:'#fff',
    fontSize:20,
    width:300,
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginVertical: 15
  },
  botao:{
    backgroundColor:'#fff',
    fontSize:20,
    width:200,
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  botaoCadastro: {
   backgroundColor: '#fff',
   fontSize: 15,
   width: 200,
   height: 50,
   borderRadius: 10,
   justifyContent: 'center',
   alignItems: 'center',
   alignSelf: 'center',
   marginTop: 10,
   textAlign: 'center'
}

})