import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons from Expo vector icons library

const Scoreboard = ({navigation}) => {
  // Dummy scores
  const scores = [
    {player: 'Player 1', score: 100},
    {player: 'Player 2', score: 90},
    {player: 'Player 3', score: 80},
    {player: 'Player 4', score: 70},
    {player: 'Player 5', score: 60},
  ];

  // Function to handle back button press
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title}>Score History</Text>
      {/* Scores */}
      <View style={styles.scoresContainer}>
        {scores.map((item, index) => (
          <View key={index} style={styles.scoreItem}>
            <Text style={styles.playerName}>{item.player}</Text>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Set background color to white
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black', // Set text color to black
    textAlign: 'center',
  },
  scoresContainer: {
    flex: 1,
  },
  scoreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0', // Set background color for score item
    borderRadius: 5,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Set text color to black
    marginLeft: 20,
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Set text color to black
    marginRight: 20,
  },
});

export default Scoreboard;
