import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';


const ComponentsScreen = () => {
    //return <Text style={styles.textStyle}>This is the components screen</Text>;
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>This is a flying tiger</Text>
            <Image
                style={styles.logo}
                source={{
                uri: 'https://img.etimg.com/thumb/msid-75621838,width-1070,height-580,overlay-economictimes/photo.jpg',
                }}
            />
        </View>
      );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    container: {
        paddingTop: 50,
    },
    logo: {
        width: 300,
        height: 300,
    }
});

export default ComponentsScreen;