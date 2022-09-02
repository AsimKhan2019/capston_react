import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
      </Routes>
    </main>
  );
}

export default App;
