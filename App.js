
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import ButtonApp from './component/ButtonApp';
import React, { useState } from 'react';
export default function App() {
  const [btn,setBtn] = useState('0')
  const [them,setThem] = useState(false)
  const mode = them===false ? styles.DaskMode:styles.LightMode
  const TextColor =them===false ? styles.TextLight:styles.TextDask
  const Display = (value) =>{
    if(btn==='0'){
      if(value!=='C'&&value!=='DEL'&&value!=='='&&value!=='%'&&value!==
      '/'&&value!=='X'&&value!=='-'&&value!=='+'&&value!=='.'){
        setBtn(value)
      }             
    }else{
      switch (value) {
        case 'X':
          setBtn(btn +'*')
          return
        case '=':
          let result = eval(btn).toString();
          setBtn(result)
          return
        case 'C':
          setBtn('0')
          return
          case 'DEL':
            setBtn(btn.substring(0, (btn.length - 1)))
            if(btn.length===1){
              setBtn('0')
            }
            return
        default:
          setBtn(btn+value)
          return
      }
    }
    
  }
  return (
    <View style={[styles.container,mode]}>
      <TouchableOpacity style={styles.image}
        onPress={() =>{
          them ? setThem(false):setThem(true)
        }}
        >
          {
            them===true ?
               <Image style={{width:50,height:50,borderRadius:44}} source={require('./image/daskMode.jpg')} />
               :
               <Image style={{width:50,height:50,borderRadius:44}} source={require('./image/Sun.png')} />
          }
        </TouchableOpacity>
    <View style={styles.display}>
    
      <Text style={[styles.results,TextColor]}>{btn}</Text>
    </View>
    <View style={styles.keyboard}>
      <View style={styles.btnRow}>
        <ButtonApp onPress={()=>{Display("C")}} title="C"  />
        <ButtonApp onPress={()=>{Display("DEL")}}  title="DEL"  />
        <ButtonApp onPress={()=>{Display("%")}} title="%" />
        <ButtonApp onPress={()=>{Display("/")}} title="/" />
      </View>
      <View style={styles.btnRow}>
      <ButtonApp  onPress={()=>{Display("7")}}  title="7"  />
        <ButtonApp onPress={()=>{Display("8")}}    title="8"  />
        <ButtonApp onPress={()=>{Display("9")}}   title="9" />
        <ButtonApp onPress={()=>{Display("X")}}  title="X" />
      </View>
      <View style={styles.btnRow}>
      <ButtonApp onPress={()=>{Display("4")}} title="4"  />
        <ButtonApp onPress={()=>{Display("5")}}  title="5"  />
        <ButtonApp onPress={()=>{Display("6")}} title="6" />
        <ButtonApp onPress={()=>{Display("-")}} title="-" />
      </View>
      <View style={styles.btnRow}>
      <ButtonApp onPress={()=>{Display("1")}} title="1"  />
        <ButtonApp onPress={()=>{Display("2")}}  title="2"  />
        <ButtonApp onPress={()=>{Display("3")}} title="3" />
        <ButtonApp onPress={()=>{Display("+")}} title="+" />
      </View>
      <View style={styles.btnRow}>
      <ButtonApp onPress={()=>{Display("0")}} title="0"  />
        <ButtonApp onPress={()=>{Display("00")}}  title="00"  />
        <ButtonApp onPress={()=>{Display(".")}} title="." />
        <ButtonApp onPress={()=>{Display("=")}} title="=" />
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingHorizontal:20,
  },
  DaskMode:{
    backgroundColor:  '#050505',
  },
  LightMode:{
    backgroundColor:  '#e0d3d3',
  },
  display:{
    flex: 3,
    flexDirection:'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  results:{
    fontWeight:'bold',
    fontSize:40,
   
  },
  TextDask:{
    color:'black',
  },
  TextLight:{
    color: '#fff',
  },
  keyboard:{
    flex: 7,
  },
  btnRow:{
    flexDirection:'row', 
    justifyContent:'space-between',
    paddingTop:20,
  },
  image:{
    flex: 1,
    paddingTop:25,
  }

});
