
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import {elevation} from '../common/styles'


export default function CategoryItem(
    {
        name,
        imageUrl,
        index,
        active,
        handlePress
    }
) {
    
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[
                styles.container,
                styles.elevation,
                index === 0 ? { marginLeft: 20 } : { marginLeft: 10 },
                active ? { backgroundColor: "rgb(241,186,87)" } : { backgroundColor: "white" },
                
            ]}>
                <View style={styles.imageContainer}>
                    <Image source={imageUrl} style={styles.image}  />
                </View>
                <Text style={styles.header}>{name }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        marginVertical: 15,
        backgroundColor: "white",
        borderRadius: 45,
        alignItems: "center",
        justifyContent: "center"
    },
    elevation,
    image: {
        width: 35,
        height: 35,
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 49,
        marginBottom: 5,
    },
    header: {
        fontWeight: "bold"
    }
})