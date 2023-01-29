import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import AuthenticationForm from './components/Register/Register';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<AuthenticationForm />} />
            <Route path="/home/*" element={<Home />} />
          </Routes>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
