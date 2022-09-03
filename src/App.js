import { Routes, Route } from 'react-router-dom';
import NavBar from './componentItems/NavBar';
import Home from './page/Home';
import Details from './page/Details';

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
