import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Loader } from '../Loader';

export const Deaths = () => {

  const [deaths, setDeaths] = useState([]);

  const getDeaths = async () => {
    try {
      const { data } = await axios.get('https://www.breakingbadapi.com/api/deaths');
      setDeaths(data);
    } catch (error) {
      alert('Se produjo un error intentelo luego')
    }
  };

  useEffect(() => {
    getDeaths()
  }, []);


  return (
    <>
      {deaths.length ? (
        <div className="deaths-list">
          <div className='card-death card-header'>
            <p>Muerte</p>
            <p>Causa de muerte</p>
            <p>Responsable de muerte</p>
            <p>Ultimas palabras</p>
            <p>Temporada</p>
            <p>Episodio</p>
          </div>
          {deaths?.map(deaths => (
            <div key={deaths.death_id} className="card-death">
              <div className="death-name">
                <p>{deaths.death}</p>
              </div>
              <div className="death-cause">
                <p>{deaths.cause}</p>
              </div>
              <div className="death-responsible">
                <p>{deaths.responsible}</p>
              </div>
              <div className="death-last-words">
                <p>{deaths.last_words}</p>
              </div>
              <div className="death-season">
                <p>{deaths.season}</p>
              </div>
              <div className="death-episode">
                <p>{deaths.episode}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='container-loading'>
          <Loader />
        </div>
      )}
    </>
  );
};
