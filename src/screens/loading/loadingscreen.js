import { View, Text, Button, StyleSheet, ActivityIndicator } from "react-native";
import { primaryColor } from "../../../css/style";
import CommonStyles from "../../../css/style";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoadingScreen = () => {

    return (
        <View>
            <View style={styles.companyNameContainer}>
                <Text style={styles.companyNameX} >X</Text>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="shopping" size={40} color="black" />
                    <Text style={[styles.titleText, CommonStyles.fontColor]}>mart</Text>
                </View>
            </View>
            <ActivityIndicator size="large" color={primaryColor} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        paddingHorizontal: 20,
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
    row: {
        flexDirection: 'row', // Arrange items horizontally
        alignItems: 'center', // Align items vertically
    },
    titleText: {
        marginLeft: 10,
        fontSize: 40,
        fontWeight: "bold"
    }
});

export default LoadingScreen;