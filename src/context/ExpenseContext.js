import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a context
const ExpenseContext = createContext();

// Create a provider component
export const ExpenseProvider = ({children}) => {
  // Initialize state for expenses
  const [expenses, setExpenses] = useState([]);

  // Load expenses from AsyncStorage on component mount
  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const storedExpenses = await AsyncStorage.getItem('expenses');
        if (storedExpenses) {
          setExpenses(JSON.parse(storedExpenses));
        }
      } catch (error) {
        console.error('Error loading expenses from AsyncStorage:', error);
      }
    };

    loadExpenses();
  }, []);

  // Function to add an expense
  const addExpense = expense => {
    // Check if expense is valid
    if (!expense || typeof expense !== 'object') {
      console.error('Invalid expense object');
      return;
    }
    // Add the expense to the expenses array
    setExpenses([...expenses, expense]);
  };

  // Function to remove an expense by id
  const removeExpense = id => {
    // Filter out the expense with the given id
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Save expenses to AsyncStorage whenever expenses change
  useEffect(() => {
    const saveExpenses = async () => {
      try {
        await AsyncStorage.setItem('expenses', JSON.stringify(expenses));
      } catch (error) {
        console.error('Error saving expenses to AsyncStorage:', error);
      }
    };

    saveExpenses();
  }, [expenses]);

  // Provide the expenses array, addExpense and removeExpense functions to the context
  return (
    <ExpenseContext.Provider value={{expenses, addExpense, removeExpense}}>
      {children}
    </ExpenseContext.Provider>
  );
};

// Export the ExpenseContext
export default ExpenseContext;
