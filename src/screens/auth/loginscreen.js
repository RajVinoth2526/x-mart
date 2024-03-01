// LoginScreen.js

import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, ActivityIndicator, TouchableOpacity, SafeAreaView } from 'react-native';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import CommonStyles from '../../../css/style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import fireConfig from '../../service/firebase/firbaseConfig';
import { primaryColor } from '../../../css/style';
import LoadingScreen from '../loading/loadingscreen';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in.
                navigation.navigate('Home');
            }
        });

        // Cleanup function to unsubscribe from the listener when component unmounts
        return () => unsubscribe();
    }, []);

    const auth = getAuth(fireConfig);
    const handleLogin = () => {
        setIsLoading(true);
        if (email == '') {
            setIsLoading(false);
            Alert.alert('Please fill email field');
        } else if (password == '') {
            setIsLoading(false);
            Alert.alert('Please fill password field');

        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {

                    // Signed in
                    //const user = userCredential.user;
                    //onChangeLoggedInUser(user.email);
                    setIsLoading(false);
                    navigation.navigate('Home');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorMessage) {
                        Alert.alert('email or password incorrect');
                    }
                    setIsLoading(false);

                });
        }

    };

    const handleNavigateToRegisterScreen = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            {/* Content based on isLoading */}
            {isLoading ? (
                <LoadingScreen /> // Display loading screen while loading
            ) : (
                <>
                    {/* Content to display when not loading */}
                    <View style={styles.companyNameContainer}>
                        <Text style={styles.companyNameX} >X</Text>
                        <View style={styles.row}>
                            <MaterialCommunityIcons name="shopping" size={40} color="black" />
                            <Text style={[styles.titleText, CommonStyles.fontColor]}>mart</Text>
                        </View>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity style={[CommonStyles.button, styles.loginButton]} onPress={handleLogin} >
                        <Text style={[CommonStyles.buttonText, styles.loginButtonText]}>Login</Text>
                    </TouchableOpacity>

                    <View style={[styles.raw, { marginTop: 30 }]}>
                        <Text >
                            <Text style={styles.registerNavigationtext}>do not have an account? </Text>
                            <Text onPress={handleNavigateToRegisterScreen} style={styles.spanText}>  Register</Text>
                        </Text>
                    </View>
                    {/* ... other elements */}
                </>
            )}
        </View>

    );


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        paddingHorizontal: 20,
    },
    input: {
        width: '80%',
        marginBottom: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: primaryColor,
        borderRadius: 10,


    },
    companyNameContainer: {
        alignSelf: 'auto',
        marginBottom: 70,
        alignItems: 'center'
    },
    companyNameX: {
        fontSize: 70,
        fontWeight: 'bold'
    },
    loginButton: {
        marginTop: 60,
        height: 50,
        width: 150,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 4,
    },
    loginButtonText: {
        fontSize: 20,
    },
    row: {
        flexDirection: 'row', // Arrange items horizontally
        alignItems: 'center', // Align items vertically
    },
    titleText: {
        marginLeft: 10,
        fontSize: 40,
        fontWeight: "bold"
    },
    spanText: {
        color: 'blue',
        fontWeight: 'bold'
    },
    registerNavigationtext: {
        fontWeight: 'bold'
    }
});

export default LoginScreen;
