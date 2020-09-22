import React from "react";
import {View, Text, Image} from "react-native";
import styles from './../styles/home';

export function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require("./../assets/avatar.png")} style={styles.image} />
      <Text style={styles.text} onPress={() => navigation.navigate("Carona")}>
        Oferecer Carona
      </Text>
      <Text style={styles.text} onPress={() => navigation.navigate("Reservas")}>
        Pegar Carona
      </Text>
      <Text style={styles.text}>Minha Pontuação</Text>
      <Text style={styles.text}>Meus Dados</Text>
      <Text style={styles.text}>Histórico de Caronas</Text>
      <Text style={styles.text}>Meus Veículos</Text>
      <Text style={styles.text} onPress={() => navigation.navigate("Login")}>Sair</Text>
    </View>
  );
}
