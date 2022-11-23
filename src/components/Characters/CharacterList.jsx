import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader';

export const CharacterList = () => {

    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        try {
            const { data } = await axios.get('https://www.breakingbadapi.com/api/characters');
            setCharacters(data);
        } catch (error) {
            alert('Se produjo un error intentelo luego')
        }
    };

    useEffect(() => {
        getCharacters()
    }, []);


    return (
        <>
            {characters.length ? (
                <>
                    <p>Se encontraron {characters.length} resultados.</p>
                    <div className='characters-list'>
                        {characters.map(character => (
                            <Link
                                to={`/characters/${character.char_id}`}
                                key={character.char_id}
                                className='card-character'
                            >
                                <div className="container-img">
                                    <img src={character.img} alt={character.name} />
                                </div>
                                <h1>{character.name}</h1>
                            </Link>
                        ))}
                    </div>
                </>
            ) : (
                <div className='container-loading'>
                    <Loader />
                </div>
            )
            }
        </>
    );
};
