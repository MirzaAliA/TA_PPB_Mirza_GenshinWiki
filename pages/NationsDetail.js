import { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";

function ArtifactsDetail({ route }) {
    const [nationsDetailData, setNationsDetailData] = useState([]);
    const id = route.params.msg;

    useEffect(() => {
        getNationsDetailData();
    })

    function getNationsDetailData() {
        fetch('http://192.168.1.7:3000/nations?id=' + id)
            .then((response) => response.json())
            .then((json) => {
                setNationsDetailData(json)
            })
            .catch(err => console.error(err));
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={nationsDetailData}
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
                        <Image source={{ uri: item.gambar }} style={{ backgroundColor: '#313131', marginTop: 10, border: '5px solid #FFA000', borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto', width: 150, height: 150, marginBottom: 10 }} />
                        <Text style={{ color: 'white', textAlign: "center", marginBottom: 10, fontSize: 20 }}>{item.name}</Text>
                        <Text style={{ color: '#FFCC00', textAlign: "center", marginBottom: 0, fontSize: 15, marginTop: 50 }}>{"Element"}</Text>
                        <Text style={{ color: 'white', textAlign: "center", marginBottom: 10, fontSize: 15, marginTop: 0 }}>{"\n" + item.element}</Text>
                        <Text style={{ color: '#FFCC00', textAlign: "center", marginBottom: 0, fontSize: 15, marginTop: 50 }}>{"Archon"}</Text>
                        <Text style={{ color: 'white', textAlign: "center", marginBottom: 10, fontSize: 15, marginTop: 0 }}>{"\n" + item.archon}</Text>
                        <Text style={{ color: '#FFCC00', textAlign: "center", marginBottom: 0, fontSize: 15, marginTop: 50 }}>{"Entity Controller"}</Text>
                        <Text style={{ color: 'white', textAlign: "center", marginBottom: 10, fontSize: 15, marginTop: 0 }}>{"\n" + item.controllingEntity}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default ArtifactsDetail;