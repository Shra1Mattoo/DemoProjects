import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { set } from "react-native-reanimated";
import Icon from "react-native-vector-icons/AntDesign";

const LoginApp = ({ navigation }) => {

    const [TextEmail, setTextEmail] = useState('');
    const [TextPass, setTextPass] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        validate();
    });

    const validate = () => {

        const ValidEmail = RegExp(
            '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
        )

        if (TextEmail == "" && TextPass == "") {
            setError('');
            return false;
        } else if ((TextEmail.length == 0) && TextPass.length > 0) {
            setError('Enter Email');
            return false;
        }
        else if (!ValidEmail.test(TextEmail)) {
            setError('enter valid email address! ')
            return false;
        }
        else if ((TextEmail.length > 0) && (TextPass.length == 0)) {
            setError("");
            return false;
        }

        else if (TextPass.length < 6) {
            setError("Password must be 6 charracter's")
            return false;
        }
        else {
            setError('');
            return true;
        }
    };


    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.Viewmain}>
                <Text style={styles.Textmain}>Login Page</Text>
            </View>

            <View style={styles.iconEmail}>

                <Icon style={styles.Mail} name='mail' size={20} />
                <TextInput onChangeText={value => setTextEmail(value)} style={styles.TextEmail} placeholder="Enter Email " placeholderTextColor={'grey'} />
            </View>

            <View style={styles.iconPassword}>
                <Icon style={styles.Key} name='key' size={20} />
                <TextInput onChangeText={value => setTextPass(value)} style={styles.TextPass} secureTextEntry={true} placeholder="Enter Password " placeholderTextColor={'grey'} />
            </View>

            <View style={styles.errorMsg}>
                {error.length > 0 && <Text style={styles.errorMsg}>{error}</Text>}</View>

            <View>
                <TouchableOpacity onPress={() => { navigation.push("Drawer") }} style={styles.Lbtn}>
                    <Text style={styles.Ltext}>Login</Text>

                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => { navigation.push("Signup") }} style={styles.Sbtn}>
                    <Text style={styles.Stext}>Signup</Text>

                </TouchableOpacity>
            </View>

        </SafeAreaView >

    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#e5e5e5',

    },
    TextEmail: {
        fontSize: 15,
        paddingLeft: 25,
        marginHorizontal: 20,
        height: 30,
        marginBottom: 18,
        color: '#3a86ff',
    },
    TextPass: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 15,
        paddingLeft: 25,
        marginHorizontal: 20,
        height: 30,
        color: '#3a86ff',
        marginBottom: 18,


    },
    iconEmail: {
        flex: 0.1,
        width: '81%',
        backgroundColor: 'white',
        borderRadius: 30,
        height: 60,
        marginBottom: 20,
        justifyContent: 'center',
        borderColor: "#3a86ff",
        borderWidth: true,
    },
    iconPassword: {
        flex: 0.1,
        width: '81%',
        backgroundColor: 'white',
        borderRadius: 30,
        height: 60,
        marginBottom: 20,
        justifyContent: 'center',
        borderColor: "#3a86ff",
        borderWidth: true,
    },
    Lbtn: {
        backgroundColor: '#023e8a',
        width: 150,
        padding: 11,
        alignItems: 'center',
        height: 40,
        borderRadius: 40,
        margin: 4
    },
    Sbtn: {
        backgroundColor: '#023e8a',
        width: 150,
        padding: 11,
        alignItems: 'center',
        height: 40,
        borderRadius: 40,
        margin: 4
    },
    Mail: {

        top: 24,
        left: 20,
        color: '#023e8a',
    },
    Key: {

        top: 24,
        left: 20,
        color: '#023e8a'
    },
    Ltext: {
        color: 'white',
    },
    Stext: {
        color: 'white',
    },
    errorMsg: {
        color: "red",
        marginBottom: 10,
        paddingBottom: 10,
    },
    Viewmain: {
        flex: 0.3,
    },
    Textmain: {
        color: "#023e8a",
        fontWeight: 'bold',
        fontSize: 38,
        textAlign: 'center',
    }
});



export default LoginApp;