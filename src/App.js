import React, { useEffect, useState } from 'react';
import './App.css';
import StrainList from './components/StrainList';

function App() {
  const uri = 'https://treetoke-api.herokuapp.com/strains/';
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    fetch(uri)
    .then(res => res.json())
    .then(data => setStrains(data))
  }, [uri])

  console.log(strains)

  return (
    <div className="App">
      <StrainList strainList={strains} />
    </div>
  );
}

export default App;
