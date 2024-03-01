
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, onChangeText } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CommonStyles from '../../../css/style';
import fireConfig from '../../service/firebase/firbaseConfig';
import { primaryColor } from '../../../css/style';
import LoadingScreen from '../loading/loadingscreen';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();


    const auth = getAuth(fireConfig);
    const db = getFirestore(fireConfig);

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleRegistration = () => {

        const validateEmail = isValidEmail(email);

        if (firstName == '') {
            Alert.alert('Firstname is required');
        } else if (lastName == '') {
            Alert.alert('Lastname is required');
        } else if (address == '') {
            Alert.alert('Address is required');
        } else if (phone == '') {
            Alert.alert('Phone number is required');
        } else if (email == '') {
            Alert.alert('Email  is required');
        } else if (password == '') {
            Alert.alert('Password  is required');
        } else if (retypePassword == '') {
            Alert.alert('Please retype your  password');
        } else if (password !== retypePassword) {
            Alert.alert('password not match');
        } else if (!validateEmail) {
            Alert.alert('Please enter valid email address');
        } else {

            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    const docRef = await addDoc(collection(db, "users"), {
                        email: email,
                        password: password,
                        firstName: firstName,
                        lastName: lastName,
                        address: address,
                        phone: phone,
                        userId: user.uid,
                    });

                    navigation.navigate('Home');

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorMessage) {
                        Alert.alert(errorMessage);
                    }
                });

        }

    };

    const handleNavigateToLoginScreen = () => {
        navigation.navigate('Login')
    }


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.companyNameContainer}>
                <Text style={styles.companyNameX}>X</Text>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="shopping" size={40} color="black" />
                    <Text style={[styles.titleText, CommonStyles.fontColor]}>mart</Text>
                </View>
            </View>
            <ScrollView style={styles.scrollView}>

                <View style={styles.card}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput
                        style={styles.input}
                        value={firstName}
                        onChangeText={setFirstName}
                        placeholder="first name"
                    />
                </View>
                <View style={styles.card}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                        style={styles.input}
                        value={lastName}
                        onChangeText={setLastName}
                        placeholder="last name"
                    />
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>Phone</Text>
                    <TextInput
                        style={styles.input}
                        value={phone}
                        onChangeText={setPhone}
                        placeholder="Phone"
                    />
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        style={styles.input}
                        value={address}
                        onChangeText={setAddress}
                        placeholder="Address"
                    />
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.card}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>Retype Password</Text>
                    <TextInput
                        placeholder="Retype Password"
                        style={styles.input}
                        value={retypePassword} // New state variable for retyped password
                        onChangeText={setRetypePassword} // New state setter for retyped password
                        secureTextEntry
                    />
                </View>



            </ScrollView>
            <TouchableOpacity style={[CommonStyles.button, styles.registerButton]} onPress={handleRegistration} >
                <Text style={[CommonStyles.buttonText, styles.registerButtonText]}>Register</Text>
            </TouchableOpacity>

            <View style={[styles.row, { marginTop: 20, marginBottom: 40 }]}>
                <Text >
                    <Text style={styles.registerNavigationtext}>Already have an account? </Text>
                    <Text onPress={handleNavigateToLoginScreen} style={styles.spanText}>Login</Text>
                </Text>
            </View>
        </SafeAreaView>

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
    scrollView: {
        width: '100%', // Set the  justifyContent:'center'
    }, card: {
        alignSelf: 'center',
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 2,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: primaryColor,
        borderRadius: 10,
        padding: 8,
        fontSize: 16,
    },
    companyNameContainer: {
        alignSelf: 'auto',
        marginBottom: 20,
        marginTop: 30,
        alignItems: 'center'
    },
    companyNameX: {
        fontSize: 70,
        fontWeight: 'bold'
    },
    registerButton: {
        marginTop: 30,
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
    registerButtonText: {
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

export default RegistrationScreen;
