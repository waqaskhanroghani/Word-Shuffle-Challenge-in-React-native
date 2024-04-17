import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Scoreboard = ({navigation}) => {
  // State to store the fetched quote
  const [quote, setQuote] = useState('');
  // State to store the highest score (dummy data for now)
  const [highestScore, setHighestScore] = useState(500);

  // Function to fetch random quote
  const fetchRandomQuote = async () => {
    try {
      // Fetch random quote from API
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      // Update the quote state
      setQuote(data.content);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  // Fetch random quote on component mount
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  // Function to handle back button press
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../Assets/images/bg3.png')}>
      <View style={styles.container}>
        {/* Back button */}
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        {/* Trophy icon for highest score */}
        <Ionicons
          name="trophy"
          size={80}
          color="gold"
          style={styles.trophyIcon}
        />
        {/* Highest score */}
        <Text style={styles.scoreText}>Highest Score: {highestScore}</Text>
        {/* Quote */}
        <Text style={styles.quote}>{quote}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 20,
    zIndex: 1,
  },
  trophyIcon: {
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  quote: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'black',
  },
});

export default Scoreboard;
