import React from 'react';
import {StyleSheet, View} from "react-native";
import Home from "./app/components/Home";

export default function App() {
    return <View style={styles.container}>
        <Home/>
        {/*<Game gameId={"1e28303d-6221-47f9-8dd0-5015454ba181"}/>*/}
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
