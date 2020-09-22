/* eslint-disable prettier/prettier */
import React  from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import styles from './../styles/login';


export function Login({ navigation }) {
    const [login, onChangeLogin] = React.useState('');
    const [password, onChangePass] = React.useState('');

    function entrar(){
        if(login == "maria" && password == "fiap"){
            navigation.navigate('Home');
            onChangeLogin('');
            onChangePass('');
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('./../assets/image.png')}
                style={styles.image} />
            <TextInput
                style={styles.input}
                placeholder = "Login"
                onChangeText={text => onChangeLogin(text)}
                value={login}  />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder = "Password" 
                onChangeText={text => onChangePass(text)}
                value={password}  />
            <TouchableOpacity style={styles.button}  onPress={() => entrar()}>
                <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}


