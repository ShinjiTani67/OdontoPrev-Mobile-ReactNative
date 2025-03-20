import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import Card2 from '../components/Card2';

const Funcionario = () => {
  return (
    <View style={styles.container}>
      <Card2 title='funcionario'/>
      <View style={styles.container2}>
      <TouchableOpacity style={styles.linkButtonRed}>
        <Link href="/notafiscal" style={styles.linkText}>
          Nota Fiscal
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButtonYellow}>
        <Link href="/cliente" style={styles.linkText}>
          Cliente
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButtonBlue}>
        <Link href="/agenda" style={styles.linkText}>
          Agenda
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButtonGreen}>
        <Link href="/suporte" style={styles.linkText}>
          Suporte
        </Link>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Funcionario;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "flex-start", 
    paddingTop: 0,
    fontFamily: 'Jost',
  },

  container2: {
    flex: 1,
    width: "100%",
    alignItems: "center", 
    marginBottom: 70,
    justifyContent: "flex-end",
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  linkButtonRed: {
    backgroundColor: '#FF8585', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  linkButtonYellow: {
    backgroundColor: '#FBCD6B', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  linkButtonBlue: {
    backgroundColor: '#8DBFF9', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  linkButtonGreen: {
    backgroundColor: '#8CBD82',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  
  linkText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'none',
  },
});
