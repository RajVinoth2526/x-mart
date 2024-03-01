import { View, Text, Button, StyleSheet } from "react-native";

const CardScreen = () => {

    return (

        <View style={styles.container}>
            <Text >card</Text>
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
    }
});

export default CardScreen;