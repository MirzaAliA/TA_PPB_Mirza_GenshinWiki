import { useEffect, useState } from "react";
import { Image, View, FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";



const Nations = ({ navigation }) => {
  const [data, setDataNations] = useState([]);

  useEffect(() => {
    getDataNations();
  }, []);

  function getDataNations() {
    fetch('http://192.168.1.7:3000/nations')
      .then(response => response.json())
      .then(json => {
        setDataNations(json)
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail Nations', { msg: item.id })}>
            <View>
              <View style={{
                alignItems: "flex-start",
                backgroundColor: "#313131",
                borderRadius: 24,
                marginHorizontal: 15,
                padding: 20,
                marginBottom: 10,
                marginTop: 10,
              }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={{ uri: item.gambar }} style={{ height: 75, width: 75 }}></Image>
                  <Text style={{ padding: 30, fontSize: 20, textAlign: 'center', color: 'white' }}>{item.name}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
};

export default Nations;