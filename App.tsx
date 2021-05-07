import React from 'react';
import GameComponent from "./components/GameComponent";
import {StyleSheet, View} from "react-native";

export default function App() {
    return <View style={styles.container}>
        <GameComponent/>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
