import { useEffect, useState } from "react";
import { Image, View, FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";



const Weapons = ({ navigation }) => {
    const [dataWeapons, setDataWeapons] = useState([]);

    useEffect(() => {
        getDataWeapons();
    }, []);

    function getDataWeapons() {
        fetch('http://192.168.1.7:3000/weapons')
            .then(response => response.json())
            .then(json => {
                setDataWeapons(json)
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={dataWeapons}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Detail Weapons', { msg: item.id })}>
                        <View>
                            <View style={{
                                alignItems: "flex-start",
                                backgroundColor: "#313131",
                                borderRadius: 24,
                                marginHorizontal: 15,
                                padding: 15,
                                marginBottom: 10,
                                marginTop: 10,
                            }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={{ uri: item.iconUrl }} style={{ border: '3px solid #FFA000', borderRadius: 50, height: 70, width: 70 }}></Image>
                                    <Text style={{ padding: 30, fontSize: 15, textAlign: 'left', color: 'white' }}>{item.name}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
};

export default Weapons;