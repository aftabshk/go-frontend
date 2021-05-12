import React from 'react';
import Game from "./app/components/Game";
import {StyleSheet, View} from "react-native";

export default function App() {
    return <View style={styles.container}>
        <Game gameId={"bd13002c-bf17-41b2-9fd3-15b81395e74b"}/>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
