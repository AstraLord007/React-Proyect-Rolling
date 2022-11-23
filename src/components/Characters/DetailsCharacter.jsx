import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const DetailsCharacter = () => {
    
    const [character, setCharacter] = useState({});

    const { id } = useParams();

    /*const getCharacterByID = async id => {
        const data = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
        const character = await data.json()
        setCharacter(character[0])*/

    const getCharacterByID = async id => {
      try {
          const { data } = await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`);
          setCharacter(data[0]);
      } catch (error) {
          alert('Se produjo un error intentelo luego')
      }
    };
    
    console.log(character)

    useEffect(() => {
      getCharacterByID(id);
    }, []);
    

  return (
      <>
        <div className="details-character">
          <div className="card-img">
            <img src={character.img} alt={character.name} />
          </div>
          <div className="card-information">
            <h1>{character.name}</h1>
            <h2>Informacion</h2>
            <p>
              Fecha de Nacimiento: <span>{character.birthday}</span>
            </p>
            <p>
              Apodo: <span>{character.nickname}</span>
            </p>
            <span id='occupation'>
              Ocupacion:
              <ul>
                {character.occupation?.map(occupation => (
                  <li key={occupation}>{occupation}</li>
                ))}
              </ul>
            </span>
            <p>
              Estado: <span>{character.status}</span>
            </p>
            <p>
              Actor: <span>{character.portrayed}</span>
            </p>
            <p>
              Categoria: <span>{character.category}</span>
            </p>
          </div>
        </div>
      </>
  )
}
