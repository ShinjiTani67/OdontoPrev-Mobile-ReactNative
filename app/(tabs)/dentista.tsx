import { View, Text } from 'react-native'
import React from 'react'

const dentista = () => {
  const {user} = useContext(authContext);

  return (
    <View>
      <Text>Dentista</Text>
    </View>
    <View>
    <Links><Text>Nota Fiscal</Text></Links>
    <Links><Text>Sinistro</Text></Links>
    <Links><Text>Falso Sinistro</Text></Links>
    <Links><Text>Dentistas Parceiros</Text></Links>
    </View>
  );
};

export default dentista