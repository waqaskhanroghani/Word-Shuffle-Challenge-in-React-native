import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Routes from '../../navigation/Routes';

const Home = ({navigation}) => {
  const handleGuessWordPress = () => {
    // Navigate to Guess the Word screen
    navigation.navigate(Routes.GUESS);
  };

  const handleScoreboardPress = () => {
    // Navigate to Scoreboard screen
    navigation.navigate('Scoreboard');
  };

  const handleAboutUsPress = () => {
    // Navigate to About Us screen
    navigation.navigate('AboutUs');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Word Shuffle Challenge</Text>
        {/* Add any additional content here */}
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          mode="contained"
          buttonColor="black"
          style={styles.button}
          onPress={handleGuessWordPress}
          labelStyle={styles.buttonText}>
          Guess the Word
        </Button>
        <Button
          mode="contained"
          buttonColor="black"
          style={styles.button}
          onPress={handleScoreboardPress}
          labelStyle={styles.buttonText}>
          Scoreboard
        </Button>
        <Button
          mode="contained"
          buttonColor="black"
          style={styles.button}
          onPress={handleAboutUsPress}
          labelStyle={styles.buttonText}>
          About Us
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Set background color to white
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black', // Set text color to black
  },
  buttonsContainer: {
    width: '80%', // Adjust width as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%', // Make button full width
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white', // Set text color to white
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
