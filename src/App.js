import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
// import PopulationContainer from './Components/PopulationContainer';
import Home from './Pages/Home';
// import Details from './Pages/Details';

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/details" element={<Details />} /> */}
      </Routes>
      {/* <PopulationContainer /> */}
    </main>
  );
}

export default App;
