import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButon";
import { useState } from "react";
import { colors } from "../constants/Color";
import { Title } from "../components/ui/Title";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";

export function StartGameScreen({ onPickNumber }) {
  // mac du nhan vao la mot con so nhuwng thuwc ra luong la String
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();
  // khi chieu dai rong cap nhat thi no se cap nhat lai cho minh
  function inputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }
  const marginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView style={styles.sceen}> 
    {/* boc nhu nay de hien thi ban phim cho ios */}
    <KeyboardAvoidingView style={styles.sceen} behavior="position">
      <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
        <Title>Guess My Number</Title>
        <Card>
          <InstructionText>Enter number</InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none" // neu lam vowi input chu nen tat di
            autoCorrect={false}
            value={enteredNumber} // lien ket gia tri nhap vao voi o input
            onChangeText={inputHandler}
          />
          {/* gioi han chi nhap dc hai ki tu vao vung input */}
          {/* nen xem tai lieu loai ban phim nao dc hox tro */}
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

//const deviceHeigh = Dimensions.get('window').height

const styles = StyleSheet.create({
  sceen:{
flex:1
  },
  rootContainer: {
    flex: 1,
    //   marginTop:deviceHeigh<380 ? 30:100,
    alignItems: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
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
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
