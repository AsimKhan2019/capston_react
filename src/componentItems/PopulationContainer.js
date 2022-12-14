import { useSelector } from 'react-redux';
import PopulationItem from './PopulationItem';

const PopulationContainer = () => {
  const { Provinces } = useSelector((store) => store.population);

  const populationList = Provinces.slice(1).map((p) => (
    <PopulationItem
      key={p.Id}
      Id={p.Id}
      State={p.State}
      Population={p.Population}
    />
  ));

  return (
    <div className="popItemContainer">
      {populationList}
    </div>
  );
};

export default PopulationContainer;
