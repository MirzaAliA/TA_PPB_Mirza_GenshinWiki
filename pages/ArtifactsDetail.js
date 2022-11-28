import { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";

function ArtifactsDetail({ route }) {
    const [artifactsDetailData, setArtifactsDetailData] = useState([]);

    useEffect(() => {
        getArtifactsDetailData();
    })

    function getArtifactsDetailData() {
        fetch('http://192.168.1.7:3000/artifacts?id=' + route.params.msg)
            .then((response) => response.json())
            .then((json) => {
                setArtifactsDetailData(json)
            })
            .catch(err => console.error(err));
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={artifactsDetailData}
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
                        <Image source={{ uri: item.gambar }} style={{ marginTop: 10, border: '5px solid #FFA000', borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto', width: 150, height: 150, marginBottom: 10 }} />
                        <Text style={{ color: 'white', textAlign: "center", marginHorizontal: 10, fontSize: 20 }}>{item.name}</Text>
                        <Text style={{ color: '#FFCC00', textAlign: "center", marginBottom: 0, fontSize: 15, marginTop: 50 }}>{"Max Rarity"}</Text>
                        <Text style={{ color: 'white', textAlign: "center", marginBottom: 10, fontSize: 15, marginTop: 0 }}>{"\n" + item.max_rarity}</Text>
                        <Text style={{ color: '#FFCC00', textAlign: "center", marginBottom: 0, fontSize: 15, marginTop: 50 }}>{"Two Piece Bonus"}</Text>
                        <Text style={{ color: 'white', textAlign: "center", marginBottom: 10, fontSize: 15, marginTop: 0 }}>{"\n" + item.two_piece}</Text>
                        <Text style={{ color: '#FFCC00', textAlign: "center", marginBottom: 0, fontSize: 15, marginTop: 50 }}>{"Four Piece Bonus"}</Text>
                        <Text style={{ color: 'white', textAlign: "center", marginBottom: 10, fontSize: 15, marginTop: 0 }}>{"\n" + item.four_piece}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default ArtifactsDetail;