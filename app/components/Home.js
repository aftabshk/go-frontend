import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Button from "./Button";
import Input from "./Input";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                value: 'Banana',
            }, {
                value: 'Mango',
            }, {
                value: 'Pear',
            }]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Input placeholder={"Name"}/>
                <View style={styles.buttonsContainer}>
                    <Button label={"Create"}/>
                    <Button label={"Join"}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 500,
        height: 170
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 450
    }
});

export default Home