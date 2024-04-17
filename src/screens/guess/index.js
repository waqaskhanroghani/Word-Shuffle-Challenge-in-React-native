import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons from Expo vector icons library
import Tts from 'react-native-tts';
import shuffle from 'lodash.shuffle';
import Routes from '../../navigation/Routes';

const words = [
  'APPLE',
  'APRICOT',
  'AVOCADO',
  'ALMOND',
  'ARTICHOKE',
  'ASPARAGUS',
  'AMARANTH',
  'ARUGULA',
  'ACAI',
  'ANCHOVY',
  'BANANA',
  'BLACKBERRY',
  'BLUEBERRY',
  'BOYSENBERRY',
  'BING CHERRY',
  'BROCCOLI',
  'BRUSSELS SPROUTS',
  'BUTTERNUT SQUASH',
  'BEETROOT',
  'BOK CHOY',
  'ORANGE',
  'OLIVE',
  'OYSTER',
  'OKRA',
  'ONION',
  'OCTOPUS',
  'OYSTER MUSHROOM',
  'ORZO',
  'OCTOPUS',
  'ORANGE BELL PEPPER',
  'STRAWBERRY',
  'SPINACH',
  'SWISS CHARD',
  'SWEET POTATO',
  'SUGAR SNAP PEAS',
  'SALMON',
  'SHRIMP',
  'SCALLOP',
  'SOYBEAN',
  'SQUASH',
  'BLUEBERRY',
  'BLACKBERRY',
  'BOYSENBERRY',
  'BING CHERRY',
  'BUTTERNUT SQUASH',
  'BROCCOLI',
  'BRUSSELS SPROUTS',
  'BOK CHOY',
  'BEETROOT',
  'BANANA',
];

const initialWord = shuffle(words)[0];
const initialLetters = shuffle(initialWord.split(''));

const Guess = ({navigation}) => {
  const [selectedWord, setSelectedWord] = useState(initialWord);
  const [shuffledLetters, setShuffledLetters] = useState(initialLetters);
  const [score, setScore] = useState(0);

  useEffect(() => {
    Tts.speak(selectedWord);
  }, [selectedWord]);

  const handleLetterPress = letter => {
    const index = shuffledLetters.indexOf(letter);
    if (index !== -1) {
      const newLetters = [...shuffledLetters];
      newLetters.splice(index, 1);
      setShuffledLetters(newLetters);
      if (newLetters.length === 0) {
        const guessedWord = selectedWord
          .split('')
          .filter(char => !newLetters.includes(char))
          .join('');
        if (guessedWord.toUpperCase() === selectedWord.toUpperCase()) {
          // Increment score only when word is guessed correctly
          setScore(score + 1);
        }
        const newWord = shuffle(words.filter(word => word !== selectedWord))[0];
        setSelectedWord(newWord);
        setShuffledLetters(shuffle(newWord.split('')));
      }
    }
  };

  // Function to handle back button press
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.score}>Score: {score}</Text>
      <View style={styles.wordContainer}>
        {shuffledLetters &&
          shuffledLetters.map((letter, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleLetterPress(letter)}>
              <Text style={styles.letter}>{letter}</Text>
            </TouchableOpacity>
          ))}
      </View>
      <Text style={styles.wordToGuess}>{selectedWord}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set background color to white
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  score: {
    fontSize: 20,
    marginBottom: 20,
    color: 'black', // Set text color to black
  },
  wordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  letter: {
    fontSize: 30,
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'black', // Set background color to black
    color: 'white', // Set text color to white
    borderRadius: 5,
  },
  wordToGuess: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black', // Set text color to black
  },
});

export default Guess;
