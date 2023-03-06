import { View, Text, StyleSheet } from "react-native";
import React, {useContext} from "react";
import themeContext from '../config/themeContext'

const ListItem = ({ item }) => {
  const theme = useContext(themeContext);
  const {
    NOMBRES,
    CASA,
    P_ALIC,
    PREDIO,
    CEDULA,
    TELEFONOS,
    EMAIL,
    HABITADO_POR,
    OBSERVACIONES,
  } = item;

  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <Text style={styles.text}>{NOMBRES}</Text>      
      <Text style={[styles.ctaPedregal, {color: theme.color}]}>Estimado copropietario recuerde que sus depósitos los puede realizar en la Cta.Cte. 
        Banco de Guayaquil No. 40404910 a nombre de Conjunto Pedregal RUC: 1792484022001</Text>

      <Text style={styles.propiedad}>Propiedad No.</Text>
      <Text style={styles.propiedad_no}>{CASA}</Text>

      <View style={styles.flex}>
        <Text style={{paddingRight: 78, color: 'grey', fontWeight: 'bold'}}>P_Alic:</Text>
        <Text style={[styles.text2, {color: theme.color}]}>{P_ALIC}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={{paddingRight: 74, color: 'grey', fontWeight: 'bold'}}>Predio:</Text>
        <Text style={[styles.text2, {color: theme.color}]}>{PREDIO}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={{paddingRight: 72, color: 'grey', fontWeight: 'bold'}}>Cédula:</Text>
        <Text style={[styles.text2, {color: theme.color}]}>{CEDULA}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={{paddingRight: 54, color: 'grey', fontWeight: 'bold'}}>Teléfono:</Text>
        <Text style={[styles.text2, {color: theme.color}]}>{TELEFONOS}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={{paddingRight: 85, color: 'grey', fontWeight: 'bold'}}>Email:</Text>
        <Text style={[styles.text2, {color: theme.color}]}>{EMAIL}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={{paddingRight: 16, color: 'grey', fontWeight: 'bold'}}>Habitado por:</Text>
        <Text style={[styles.text2, {color: theme.color}]}>{HABITADO_POR}</Text>
      </View> 
      <Text style={{paddingRight: 20, color: 'grey', fontWeight: 'bold'}}>Observaciones:</Text>
      <Text style={[styles.text2, {color: theme.color}]}>{OBSERVACIONES}</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  ctaPedregal: {
    textAlign: "center",
    color: "indigo",
    fontSize: 10,
    marginBottom: 10,
  },
  flex:{
    flexDirection: 'row'
  },
  propiedad:{
    textAlign: "center",
    marginBottom: 10,
    color: "grey",
    fontWeight: "bold",
  },
  propiedad_no:{
    textAlign: "center",
    color: "grey",
    marginBottom: 10,
    fontSize: 18,
  },
  text: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    color: "grey",
  },
  text2: {
    fontSize: 12,
  },
});

export default ListItem;