import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import Stopwatch from '../components/stopwatch';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//TODO
// - make design for word history
// - make two buttons for game end and rules
// - implement functionality (when game start data load component text load)
const Game = () => {
  const { gameId, playerNames } = useLocalSearchParams();
  const names = JSON.parse(playerNames);
  return (
    <View>
      <View style={styles.firstComponent}>
        <Text style={{fontSize:20}}>PlayerName: </Text>
        <Stopwatch />
      </View>
      <View>
        <View style = {styles.LastWordComponent}>
          <Text style={{fontSize:20}}>Last Word:</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.microphoneButtonStyle}>
            <MaterialCommunityIcons name="microphone" size={76} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Game

const styles = StyleSheet.create({
  firstComponent : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor : 'rgba(255, 255, 255, 0.93)',
    borderColor: 'rgba(0, 0, 0, 0.93)',
    margin: 20,
    borderRadius: 40,
    padding: 30
  },
  microphoneButtonStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    width:130,
    height:130,
    borderRadius:100,
    backgroundColor: 'rgba(55, 69, 68, 1)',
    marginLeft: 130,
    marginTop: 50
  },
  LastWordComponent : {
    justifyContent: 'center',
    alignItems: 'center'
  }
})