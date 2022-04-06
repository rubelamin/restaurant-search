import { Text, View, Image, FlatList, Dimensions } from 'react-native';
import { useEffect } from 'react';
import useRestaurant from '../hooks/useRestaurant';

export default function RestaurantScreen({ navigation }) {
    const [{data, loading, error}, searchRestaurant] = useRestaurant()
    const id = navigation.getParam("id");

    const dimensions = Dimensions.get("window")
    const imageWidth = dimensions.width
    const imageHeight = Math.round((dimensions.width * 9)/16)

    useEffect(() => {
        searchRestaurant(id)
    }, []);

    console.log({ data, loading, error });

    if (loading) return <Text>loading..</Text>
    
    if (error) return <Text>{error}</Text>
    
    


    return (
        <View>
            {/* <Text>{id}</Text>
            <Text>{data.name}</Text>
            <Text>{data.id}</Text>
            <Text>{data.phone}</Text>
            <Image source={{uri: data.image_url}} style={{height: 60, width: 60}} /> */}
            {data && (
                <FlatList
                data={data.photos}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item }}
                        style={{ height: imageHeight, width: imageWidth }} />
                )}
            />
            )}
        </View>
    )
}