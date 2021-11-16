import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


const ListScreen = () => {
    const friends = [
        { name : 'Name 1'},
        { name : 'Name 2'},
        { name : 'Name 3'},
        { name : 'Name 4'},
        { name : 'Name 5'},
        { name : 'Name 6'},
        { name : 'Name 7'},
        { name : 'Name 8'},
        { name : 'Name 9'},
        { name : 'Name 10'},
    ];
    return (
        <FlatList 
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={( {item} ) => {
                return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle : {
        marginVertical : 50
    }
});

export default ListScreen;