import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons from Expo vector icons library

const AboutUs = ({navigation}) => {
  // Function to handle back button press
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Function to handle social icon press
  const handleSocialIconPress = url => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title}>About Us</Text>
      {/* Description */}
      <Text style={styles.description}>
        Welcome to Word Shuffle Challenge, a fun and addictive game designed to
        test your word knowledge and puzzle-solving skills! In this game, you'll
        be presented with a scrambled word, and your task is to rearrange the
        letters to guess the correct word. With each correct guess, you earn
        points and climb up the scoreboard. Challenge yourself and see how many
        words you can guess correctly!
      </Text>
      {/* Additional Content */}
      <Text style={styles.additionalContent}>
        - Features:
        {'\n'}- Intuitive user interface
        {'\n'}- Hundreds of challenging words
        {'\n'}- Scoreboard to track your progress
        {'\n'}- Enjoyable for all ages
      </Text>
      {/* Social Icons */}
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity
          onPress={() => handleSocialIconPress('https://www.facebook.com')}>
          <Ionicons
            name="logo-facebook"
            size={30}
            color="black"
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSocialIconPress('mailto:contact@example.com')}>
          <Ionicons
            name="mail-outline"
            size={30}
            color="black"
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        {/* Add more social icons and links as needed */}
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
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: 'black', // Set text color to black
    textAlign: 'center',
  },
  additionalContent: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: 'black', // Set text color to black
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    marginHorizontal: 10,
  },
});

export default AboutUs;
