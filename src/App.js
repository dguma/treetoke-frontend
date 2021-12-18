import React, { Fragment, useEffect, useState } from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import './App.css';
import AgeCheck from './components/AgeCheck/AgeCheck';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import StrainDetails from './components/StrainDetails/StrainDetails';
import StrainList from './components/StrainList/StrainList';

function App() {
  const uri = 'https://treetoke-api.herokuapp.com/strains/';
  const [strains, setStrains] = useState([]);
  const [strainName, setStrainName] = useState('');
  const [ageVerif, setAgeVerif] = useState(false);

  useEffect(() => {
    fetch(uri)
    .then(res => res.json())
    .then(data => setStrains(data))
  }, [uri])

  // console.log(strains)

  function getStrainName(event) {
    setStrainName(event.target.textContent)
  }

  function checkAge(event) {
    event.preventDefault();
    
    const month = event.target.children[0].children[0].children[1].value;
    const day = event.target.children[0].children[1].children[1].value;
    const year = event.target.children[0].children[2].children[1].value;

    if(month === '' || day === '' || year === '') {
      return
    } else if ( year > 2000) {
      return
    } else {
      setAgeVerif(true)
    }

    console.log(month)
  }

  return (
      <Fragment>
        <Routes>
          <Route path='/strains' element={
            <>
              <Header/>
              <StrainList strainList={strains} getStrainName={getStrainName}/>
            </>
            } />
          <Route path='/strains/:id' element={
            <>
              <Header/>
              <StrainDetails strainName={strainName} strains={strains}/>
            </>
          } />
          <Route path='/' element={(ageVerif === true) ? <Home/> : <AgeCheck checkAge={checkAge}/>} />
        </Routes>
      </Fragment>
  );
}

export default App;
