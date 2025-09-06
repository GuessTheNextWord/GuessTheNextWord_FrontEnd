import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
//TODO
// - make the game tab inaccessible when the start game button was not pressed
const _layout = () => {
  return (
    <View style={{flex: 1}}>
      <Tabs>
          <Tabs.Screen name='index' options={{
            title : "Home",
            tabBarIcon: ({color,size}) => (
              <Feather name="home" size={size} color={color} />
            )
          }}/>
          <Tabs.Screen name='game' options={{
            title : "Game",
            tabBarIcon: ({color,size}) => (
              <Ionicons name="game-controller-outline" size={size} color = {color} />
            )
          }}/>
      </Tabs>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({})