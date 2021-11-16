import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <Text style={styles.text}>Hello, seal!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"  
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"  
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"  
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Demo"  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

