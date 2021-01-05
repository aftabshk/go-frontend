import React from 'react';
import {StyleSheet, View} from "react-native";
import Table from "./components/Table";
import Board from "./components/Board";

export default function App() {
    return (
        <View style={styles.container}>
            <Table/>
            <Board/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        position: "relative"
    }
});