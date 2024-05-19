import { Text,StyleSheet } from "react-native"
import { colors } from "../../constants/Color";

export function InstructionText({children, style}){
return(
    <Text style={[styles.instructionText, style]}>{children}</Text>
    // cais style sau ghi de cai truoc
)

}
const styles = StyleSheet.create({
    instructionText:{
       fontFamily:"1",
        color:colors.accent500,
        fontSize:24
      }
  });
  