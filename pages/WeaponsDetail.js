import { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";

function ArtifactsDetail({ route }) {
    const [weaponsDetailData, setWeaponsDetailData] = useState([]);
    const id = route.params.msg;

    useEffect(() => {
        getWeaponsDetailData();
    })

    function getWeaponsDetailData() {
        fetch('http://192.168.1.7:3000/weapons?id=' + id)
            .then((response) => response.json())
            .then((json) => {
                setWeaponsDetailData(json)
            })
            .catch(err => console.error(err));
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={weaponsDetailData}
                renderItem={({ item }) => (
                    <View style={{
                        backgroundColor: "#313131",
                        borderRadius: 24,
                        marginRight: 600,
                        marginLeft: 600,
                        padding: 40,
                        marginBottom: 10,
                        marginTop: 10,
                    }}>
                        <Image source={{ uri: item.iconUrl }} style={{ backgroundColor: '#313131', marginTop: 10, border: '5px solid #FFA000', borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto', width: 150, height: 150, marginBottom: 10 }} />
                        <Text style={{ color: 'white', textAlign: "center", marginBottom: 10, fontSize: 20 }}>{item.name}</Text>
                        <Text style={{ color: '#FFCC00', textAlign: "center", marginBottom: 0, fontSize: 15, marginTop: 50 }}>{"Base ATK"}</Text>
                        <Text style={{ color: 'white', textAlign: "center", marginBottom: 10, fontSize: 15, marginTop: 0 }}>{"\n" + item.baseAtk}</Text>
                        <Text style={{ color: '#FFCC00', textAlign: "center", marginBottom: 0, fontSize: 15, marginTop: 50 }}>{"Rarity"}</Text>
                        <Text style={{ color: 'white', textAlign: "center", marginBottom: 10, fontSize: 15, marginTop: 0 }}>{"\n" + item.rarity + " Star"}</Text>
                        <Text style={{ color: '#FFCC00', textAlign: "center", marginBottom: 0, fontSize: 15, marginTop: 50 }}>{"Weapon Type"}</Text>
                        <Text style={{ color: 'white', textAlign: "center", marginBottom: 10, fontSize: 15, marginTop: 0 }}>{"\n" + item.weaponType}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default ArtifactsDetail;