import { View, Text, Image, StyleSheet, Dimensions,ScrollView, useWindowDimensions } from "react-native";
import { Title } from "../components/ui/Title";
import { colors } from "../constants/Color";
import { PrimaryButton } from "../components/ui/PrimaryButon";

export function GameOverScreen({roundsNum, userNumber, onStartNewGame}) {

  const {width, height}= useWindowDimensions()
  let imageSize = 300
  if(width<380){
    imageSize = 150;
  }
  if(height<400){
    imageSize = 80;
  }

  const imageStyle={
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/2
  }
  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={[styles.imageContainer , imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone need <Text style={styles.highlight}>{roundsNum}</Text> rounds to guess number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
    </View>
    </ScrollView>
  );
}
//const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  imageContainer: {
    // borderRadius: deviceWidth<380 ? 75 :150,
    // width: deviceWidth<380 ? 150 :300,
    // height: deviceWidth<380 ? 150 :300,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    // can giua
  },
  summaryText:{
    fontFamily:"1",
    fontSize:24,
    textAlign:'center',
    marginBottom:24
  },
  highlight:{
    color:colors.primary500
  }
});
