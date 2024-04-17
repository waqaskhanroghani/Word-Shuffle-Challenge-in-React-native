import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Button} from 'react-native-paper';
import Routes from '../../navigation/Routes';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  const [quote, setQuote] = useState('');

  // Function to fetch a random quote
  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  // Fetch a new quote when the screen loads
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  // Fetch a new quote when the screen becomes active again
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchRandomQuote();
    });
    return unsubscribe;
  }, [navigation]);

  const handleGuessWordPress = () => {
    // Navigate to Guess the Word screen
    navigation.navigate(Routes.GUESS);
  };

  const handleScoreboardPress = () => {
    // Navigate to Scoreboard screen
    navigation.navigate(Routes.SCOREBOARD);
  };

  const handleAboutUsPress = () => {
    // Navigate to About Us screen
    navigation.navigate(Routes.ABOUTUS);
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../Assets/images/bg3.png')}>
      <View style={styles.content}>
        <Ionicons
          name="library"
          size={80}
          color="gold"
          style={styles.trophyIcon}
        />
        <Text style={styles.title}>Word Shuffle Challenge</Text>
        <Text style={styles.quote}>{quote}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleGuessWordPress}
          labelStyle={styles.buttonText}>
          Guess the Word
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleScoreboardPress}
          labelStyle={styles.buttonText}>
          Scoreboard
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleAboutUsPress}
          labelStyle={styles.buttonText}>
          About Us
        </Button>
      </View>
    </ImageBackground>
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
  quote: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    fontStyle: 'italic',
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
    backgroundColor: 'black', // Set button background color
  },
  buttonText: {
    color: 'white', // Set text color to white
    fontSize: 18,
    fontWeight: 'bold',
  },
  trophyIcon: {
    marginBottom: 20,
  },
});

export default Home;
