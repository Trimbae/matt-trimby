import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import { Container } from '@mui/material';
import { orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<div>about</div>}></Route>
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
