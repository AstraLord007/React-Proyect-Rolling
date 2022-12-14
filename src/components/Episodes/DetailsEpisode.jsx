import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader';

export const DetailsEpisode = () => {
    const [episode, setEpisode] = useState({});

    const { id } = useParams();

    const getEpisodeByID = async id => {
        try {
            const { data } = await axios.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
            setEpisode(data[0]);
        } catch (error) {
            console.log(error)
            alert('Se produjo un error intentelo luego')
        }
    };

    useEffect(() => {
        getEpisodeByID(id);
    }, []);

    return (
        <>
        {Object.entries(episode).length ? (
            <div className="details-episode">
                <div className="card-information-episode">
                    <p>Titulo de Episodio: <span>{episode.title}</span></p>
                    <p>Numero de Episodio: <span>{episode.episode}</span></p>
                    <p>Temporada: <span>{episode.season}</span></p>
                    <p>Fecha de Estreno: <span>{episode.air_date}</span></p>

                    <span id='characters'>
                        Personajes:
                        <ul>
                            {episode.characters?.map(character => (
                                <li key={character}>{character}</li>
                            ))}
                        </ul>
                    </span>
                </div>
            </div>
            ) : (
                <div className='container-loading'>
                    <Loader />
                </div>
            )}
        </>
    );
};
