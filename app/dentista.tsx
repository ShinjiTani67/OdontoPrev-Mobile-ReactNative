import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import Card2 from '../components/Card2';

const Dentista = () => {
  return (
    <View style={styles.container}>
      <Card2 title='dentista'/>
      

      <View style={styles.containerLinks}>
        <TouchableOpacity style={styles.linkButtonRed}>
          <Link href="/app/notafiscal.tsx" style={styles.linkText}>
            Nota Fiscal
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButtonYellow}>
          <Link href="/app/sinistro.tsx" style={styles.linkText}>
            Sinistro
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButtonBlue}>
          <Link href="/app/falsosinistro" style={styles.linkText}>
            Falso Sinistro
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButtonGreen}>
          <Link href="/app/dentistaparceiros.tsx" style={styles.linkText}>
            Dentistas Parceiros
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dentista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Jost',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  containerLinks: {
    width: '100%',
    alignItems: 'center',
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
