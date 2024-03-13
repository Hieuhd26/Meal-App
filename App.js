import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Type here ..." />
        <Button title="Add" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of task: </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer :{
    flexDirection:"row",
    justifyContent : "space-between",
    alignItems: "center",
    paddingBottom:24,
    borderBottomWidth:1,
    borderBottomEndRadius: "black"
  },
  textInput :{
     borderWidth:1,
     borderColor: "gray",
     width : '80%',
     marginRight : 8,
     padding:8
  },
  goalsContainer :{
    flex:4
  }
});
