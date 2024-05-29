import { View, Text,StyleSheet } from "react-native";
export function SubTitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    subTitle:{
      color:"#e2b497",
      fontWeight:"bold",
      fontSize:18,
      textAlign:"center",
    },
    subTitleContainer:{
      padding:6,
      marginHorizontal:12,
      marginVertical:4,
      borderBottomColor:"#e2b497",
      borderBottomWidth:2
    }
  });
  
