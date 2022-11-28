import React from "react";
import { useEffect, useState } from "react";
import { Image, View, FlatList, Text, Animated } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

const Artefak = ({ navigation }) => {
  const [data, setDataArtefak] = useState([]);

  useEffect(() => {
    getDataArtefak();
  }, []);

  function getDataArtefak() {
    fetch('http://192.168.1.7:3000/artifacts')
      .then(response => response.json())
      .then(json => {
        setDataArtefak(json)
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={{ flex: 1 }}
              onPress={() => navigation.navigate('Detail Artifacts', { msg: item.id })}>
              <View style={{
                alignItems: "flex-start",
                backgroundColor: "#313131",
                borderRadius: 24,
                marginHorizontal: 15,
                padding: 15,
                marginBottom: 10,
                marginTop: 10,
              }
              } >
                <View style={{ flexDirection: 'row' }}>
                  <Image source={{ uri: item.gambar }} style={{ height: 75, width: 75 }}></Image>
                  <Text style={{ padding: 30, fontSize: 15, textAlign: 'left', color: 'white' }}>{item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View >
        )
        }
      />
    </View >
  )
};

export default Artefak;
