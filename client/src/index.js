// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Ensure the Provider is imported for Redux store
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import {thunk} from 'redux-thunk'; // Import thunk middleware
import CssBaseline from '@mui/material/CssBaseline';
import reducers from './reducers'; // Import your reducers

import App from './App';

// Create Redux store with middleware using Redux Toolkit's configureStore
const store = configureStore({
  reducer: reducers, // Use reducers as a single or combined reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add thunk middleware
});

// Get the root element
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the app
root.render(
  <Provider store={store}> {/* Provide Redux store */}
    <CssBaseline /> {/* Apply baseline styling */}
    <App />
  </Provider>
);
