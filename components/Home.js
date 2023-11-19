import {Text, SafeAreaView, StyleSheet} from 'react-native';

export default function Home(){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
      Marcos
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor:'#ecf0f1',
    padding:8
  },
  paragraph:{
    margin: 24,
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center'
  }
})