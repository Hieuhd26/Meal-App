import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Pressable,
  SafeAreaView,
} from "react-native";
import { StartGameScreen } from "./screens/StartGameScreen";
import { GameScreen } from "./screens/GameScreen";
import { colors } from "./constants/Color";
import { GameOverScreen } from "./screens/GameOverScreen";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';

//SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver]=useState(true)
  const[guessRound, setGuessRound] = useState(0)

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
          '1': require('./assets/fonts/PoetsenOne-Regular.ttf')
        });
        // Other async tasks...
        setAppIsReady(true); // Set app readiness state
        SplashScreen.hideAsync(); // Hide splash screen
      } catch (error) {
        console.error('Error while preparing app:', error);
      }
    }
    prepare();
  }, []); // Empty dependency array means this effect runs only once on component mount
 
  function pickNumberHandler(pickNumber) {
    setUserNumber(pickNumber);
    setGameIsOver(false)
  }
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true)
    setGuessRound(numberOfRounds)
  }
  function startNewGame(){
    setUserNumber(null)
    setGuessRound(0)

  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }
  if(gameIsOver && userNumber ){
    screen = <GameOverScreen roundsNum={guessRound} userNumber={userNumber} onStartNewGame={startNewGame} />;
  }

  return (
    <>
    <StatusBar style="light"/>
    {/* // Cần cài gói linaer */}
    <LinearGradient colors={[colors.primary700, colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {/* <SafeAreaView style={styles.rootScreen}> {screen}</SafeAreaView> */}
        {/* tim hieu safeArea la gi */}
        <SafeAreaView style={styles.rootScreen}>
         {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  // View chi style so vơi nọi dung cua no dang chua chu khong style het mac du boc no o ngoai
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
