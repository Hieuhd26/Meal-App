import { Text, StyleSheet,Platform } from "react-native";
import { colors } from "../../constants/Color";
export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "1",
    fontSize: 24,
    //fontWeight: "bold",
    color: "white",
    textAlign: "center",
   // borderWidth: Platform.OS==='android' ? 2:0, // viwt dac biet cho mot nene tang nao do
   borderWidth: Platform.select({ios:0, android:2}) , // mot cach viet khac
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
