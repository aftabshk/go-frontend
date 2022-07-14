import React, {Component} from "react";
import {StyleSheet, TextInput} from "react-native";

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextInput
                style={styles.input}
                placeholder={this.props.placeholder}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 450,
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 40
    }
});

export default Input;