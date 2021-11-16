import React, { useState }  from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';


const TextScreen = () => {

    const [text, setText] = useState('')

    return (
        <View>
            <Text>Enter password</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type here your password"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <Text>{text}</Text>
            {text.length < 5 ? <Text>Minimum 5 characters</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({});

export default TextScreen;