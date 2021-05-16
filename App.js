import React from 'react';
import Game from "./app/components/Game";
import {StyleSheet, View} from "react-native";

export default function App() {
    return <View style={styles.container}>
        <Game gameId={"1e28303d-6221-47f9-8dd0-5015454ba181"}/>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
