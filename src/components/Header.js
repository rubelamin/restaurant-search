import { Text, View, StyleSheet } from 'react-native';


export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.lightHeader}>grab your</Text>
            <Text style={styles.boldHeader}>delicious meal!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginHorizontal: 20,
    },
    lightHeader: {
        fontSize: 35,
    },
    boldHeader: {
        fontSize: 40,
        fontWeight: "bold",
    }
})