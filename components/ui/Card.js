import { StyleSheet, View, Dimensions } from "react-native"
import { colors } from "../../constants/Color";
export function Card({children}){
    return(
        <View style={styles.card}>{children}</View>
    )
}
const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
   
    card: {
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      marginTop: deviceWidth < 380 ? 18:36,
      backgroundColor: colors.primary800,
      marginHorizontal: 24,
      borderRadius: 8,
      // them bong do
      elevation: 4, // chi danh cho android
  
      // cho IOS
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 1.25,
    }
  });
  