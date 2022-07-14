import React, {Component} from "react";
import {StyleSheet, TouchableHighlight, View} from "react-native";

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight>
                <View style={styles.button}>{this.props.label}</View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 60,
        fontSize: 40,
        borderRadius: 200/20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#5885AF',
        color: 'white'
    }
});

export default Button;