import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScoreContext = createContext();

export const useScoreContext = () => useContext(ScoreContext);

export const ScoreProvider = ({children}) => {
  const [score, setScore] = useState(0);
  const [scoreHistory, setScoreHistory] = useState([]);

  useEffect(() => {
    // Load score data from AsyncStorage on component mount
    const loadScoreData = async () => {
      try {
        const savedScore = await AsyncStorage.getItem('score');
        const savedScoreHistory = await AsyncStorage.getItem('scoreHistory');
        if (savedScore) setScore(parseInt(savedScore));
        if (savedScoreHistory) setScoreHistory(JSON.parse(savedScoreHistory));
      } catch (error) {
        console.error('Error loading score data:', error);
      }
    };

    loadScoreData();
  }, []);

  useEffect(() => {
    // Save score data to AsyncStorage when score changes
    const saveScoreData = async () => {
      try {
        await AsyncStorage.setItem('score', score.toString());
      } catch (error) {
        console.error('Error saving score:', error);
      }
    };

    saveScoreData();
  }, [score]);

  const updateScore = newScore => {
    setScore(newScore);
    // Add new score to score history
    setScoreHistory(prevHistory => [...prevHistory, newScore]);
  };

  return (
    <ScoreContext.Provider value={{score, updateScore, scoreHistory}}>
      {children}
    </ScoreContext.Provider>
  );
};
