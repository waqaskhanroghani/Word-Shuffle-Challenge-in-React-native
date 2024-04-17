import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import Tts from 'react-native-tts';
import shuffle from 'lodash.shuffle';

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

const WordifyGame = () => {
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
          Alert.alert(
            'Congratulations!',
            'You guessed the word correctly!',
            [{text: 'OK', onPress: () => setScore(score + 1)}],
            {cancelable: false},
          );
        } else {
          Alert.alert(
            'Sorry!',
            'You guessed wrong. Keep going, you will make it!',
            [{text: 'OK'}],
            {cancelable: false},
          );
        }
        const newWord = shuffle(words.filter(word => word !== selectedWord))[0];
        setSelectedWord(newWord);
        setShuffledLetters(shuffle(newWord.split('')));
      }
    }
  };

  return (
    <View style={styles.container}>
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
  },
  score: {
    fontSize: 20,
    marginBottom: 20,
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
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  wordToGuess: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default WordifyGame;
