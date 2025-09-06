import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Stepper from '../components/stepper';
import LanguageDropdown from '../components/languageDropDown';
import { useState } from 'react';
import { useRouter } from 'expo-router';
//TODO
// - implement how to play button on click functionality
// - implement language functionality
const Home = () => {
  const router = useRouter();
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleStartNewGame = async () => {
    try {
      const response = await fetch('https://5b18f8286439.ngrok-free.app/game/initialize-game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playersCount: numberOfPlayers,
        }),
      });
      const gameData = await response.json();
      const gameId = gameData.gameId;
      const playerNames = gameData.playerNames;
      router.push({
      pathname: '/game',
      params: {
        gameId,
        playerNames: JSON.stringify(playerNames), // Must be string for array/object
      },
    });
    } catch (error) {
      console.error('Error starting new game:', error);
    }
  };

  return (
    <View>
      <View style={styles.ContainerLogoButtonStyle}>
        <Image source={require('../utils/HomePageImage.jpg')} style={styles.HomePageImageStyle} />
        <TouchableOpacity
          style={styles.StartGameButtonStyle}
          onPress={handleStartNewGame}
        >
          <Text style={styles.ButtonTextStyle}>Start New Game</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ContainerSettingsStyle}>
        <Text style={styles.TextStyleSettings}>Game Settings</Text>
        <View style={styles.SubContainerNumberOfPlayersStyle}>
          <View>
            <Text style={styles.TextStyleSettings}>Number of</Text>
            <Text style={styles.TextStyleSettings}>Players</Text>
          </View>
          <Stepper
            min={1}
            max={4}
            initial={2}
            onChange={value => setNumberOfPlayers(value)}
          />
        </View>
        <View style={styles.SubContainerLanguageStyle}>
          <Text style={styles.TextLanguageStyle}>Language</Text>
          <LanguageDropdown
            selected={selectedLanguage}
            onChange={setSelectedLanguage}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.HowToPlayButtonStyle} onPress={() => { /* handle press */ }}>
        <Text style={{color:'rgba(0, 0, 0, 1)',fontSize:18}}>How to Play?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  ContainerLogoButtonStyle:{
      justifyContent : 'center',
      alignItems: 'center',
      backgroundColor: '#d2d7ddff',
      paddingBottom: 20,
      margin: 20,
      borderRadius: 40
  },
  HomePageImageStyle: {
      width: 300,
      height: 200,
      borderRadius: 50,
      marginTop: 50,
      marginBottom: 20
  },
  StartGameButtonStyle:{
     paddingVertical: 20,
     paddingHorizontal: 40,
     backgroundColor:'#259dffff',
     borderRadius: 40,
     borderWidth: 1,
     borderColor: '#fff',
     alignItems: 'center'
  },
  ButtonTextStyle: {
    color:'#fff',
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  ContainerSettingsStyle:{
    justifyContent : "flex-start",
    alignItems: 'flex-start',
    backgroundColor: '#ffffffff',
    margin: 20,
    marginTop:0,
    borderRadius: 40,
    padding: 30,
    gap: 20
  },
  SubContainerNumberOfPlayersStyle:{
    flexDirection: 'row',
    gap: 70
  },
  TextStyleSettings:{
    fontSize: 17,
    fontWeight: 500
  },
  SubContainerLanguageStyle:{
    flexDirection: 'row',
    gap: 45
  },
  TextLanguageStyle:{
    fontSize: 17,
    paddingTop:14,
    fontWeight: 500
  },
  HowToPlayButtonStyle:{
     paddingVertical: 10,
     paddingHorizontal: 20,
     backgroundColor:'#ffffffff',
     borderRadius: 40,
     borderWidth: 1,
     borderColor: '#000000ff',
     alignItems: 'center',
     marginRight:40,
     marginLeft:40,
  }
})