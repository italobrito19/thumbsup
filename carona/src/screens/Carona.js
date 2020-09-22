import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Separator from "./../components/Separator";
import styles from "./../styles/carona";
import Icon from "react-native-vector-icons/Ionicons";

Icon.loadFont();

export function Carona({ navigation }) {

  const reservas = {
    'id': '0001',
    'destino': 'São Paulo',
    'endereco': 'Rua Alameda de Souza',
    'bairro': 'Butantã',
    'cidade': 'SP',
    'valor': '70',
    'data': '11/10/2020',
    'horario': '20:00',
  };


  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.itens}>
          <Icon
            name="home"
            size={35}
            color="#4b5c6b"
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={styles.headerText}>Caronas cadastradas</Text>
          <Icon name="chatbox-sharp" size={35} color="#4b5c6b" />
        </View>
        <Separator />
      </View>
      <View style={{ alignSelf: 'flex-start' }} >
        <Text style={styles.titleText}>Caronas ativas:</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textContent}>#{reservas.id}</Text>
        <Text style={styles.textContent}>Destino: {reservas.destino}</Text>
        <Text style={styles.textContent}>Endereço do destino: {reservas.endereco} </Text>
        <Text style={styles.textContent}>Bairro: {reservas.bairro} </Text>
        <Text style={styles.textContent}>Cidade/UF: {reservas.cidade}</Text>
        <Text style={styles.textContent}>R$ {reservas.valor} por passageiro</Text>
        <Text style={styles.textContent}>Saída: {reservas.data} - {reservas.horario}h</Text>
      </View>
      <TouchableOpacity
        style={styles.button} /* onPress={() => navigation.navigate('Home')} */
      >
        <Text style={styles.textButton}> + Nova Carona</Text>
      </TouchableOpacity>
    </View>
  );
}
