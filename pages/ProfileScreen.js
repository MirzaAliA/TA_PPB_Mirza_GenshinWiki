import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Alert,
} from "react-native";
import axios from "axios";


function ProfileScreen() {
    const [data, setDataGithub] = useState("");


    useEffect(() => {
        async function fetchDataGithub() {
            const request = await axios
                .get("https://api.github.com/users/MirzaAliA", {
                    headers: { "Authorization": "Bearer " + token }
                })
                .then((res) => setDataGithub(res.data))
                .catch((e) => Alert.alert("Gagal!", e));
            return request;
        }

        const token = ['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'];
        fetchDataGithub();
    });

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={{ uri: data.avatar_url }} style={styles.headerImage} />
                <Text style={styles.headerText}>{data.name}</Text>
                <Text style={styles.headerTextDesc}>{'Username : ' + data.login}</Text>
                <Text style={styles.headerTextDesc}>{'ID : ' + data.id}</Text>
                <Text style={styles.headerTextDesc}>{'Email : ' + data.email}</Text>
                <Text style={styles.headerTextDesc}>{'Public Repository : ' + data.public_repos + ' & Public Gist ' + data.public_gists}</Text>
                <Text style={styles.headerTextDesc}>{'Followers : ' + data.followers + ' & Following : ' + data.following}</Text>
                <Text style={styles.headerTextDesc}>{data.bio}</Text>
                <Text style={styles.headerTextDesc2}>{"Perkenalkan Nama Saya Mirza Ali Abhipraya. Saya adalah mahasiswa Teknik Komputer Universitas Diponegoro Angkatan 2020. Disini Saya membuat App bertajuk Genshin Impact Wiki untuk menyelesaikan TA PPB 2022"}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: "#313131",
        alignItems: "center",
        paddingBottom: 50,
    },
    headerImage: {
        height: 120,
        width: 120,
        borderRadius: 60,
        marginVertical: 10,
        marginTop: 20
    },
    headerText: {
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20
    },
    headerTextDesc: {
        color: "#fff"
    },
    headerTextDesc2: {
        marginVertical: 40,
        color: "#fff",
        alignItems: 'center'
    },
    bodyText: {
        color: "#efd",
        fontSize: 20
    }
});

export default ProfileScreen;

