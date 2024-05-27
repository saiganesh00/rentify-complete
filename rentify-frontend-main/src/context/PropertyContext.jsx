import React, { createContext, useReducer } from 'react';
import axios from 'axios';

// Initial state
const initialState = {
  properties: [],
  current: null,
  error: null,
  loading: true
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    // Define cases for various actions
    default:
      return state;
  }
};

// Create context
const PropertyContext = createContext();

// Provider component
const PropertyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define functions for interacting with properties

  return (
    <PropertyContext.Provider
      value={{
        properties: state.properties,
        current: state.current,
        error: state.error,
        loading: state.loading
        // Define functions to be provided
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export { PropertyContext, PropertyProvider };
