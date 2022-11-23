import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader';

export const EpisodeList = () => {
    const [episodes, setEpisodes] = useState([]);

    const getEpisodes = async () => {
        try {
            const { data } = await axios.get('https://www.breakingbadapi.com/api/episodes');
            setEpisodes(data);
        } catch (error) {
            alert('Se produjo un error intentelo luego')
        }
    };

    useEffect(() => {
        getEpisodes()
    }, []);

    return (
        <>
            {episodes.length ? (
                <>
                    <p>Se encontraron {episodes.length} resultados.</p>
                    <div className="episodes-list">
                        {episodes.map(episode => (

                            <Link
                                to={`/episodes/${episode?.episode_id}`}
                                className='card-episode'
                                key={episode.episode_id}
                            >
                                <div className="container-img">
                                    <img src='https://www.lavanguardia.com/peliculas-series/images/movie/poster/2017/2/w1280/6Gk9bOTWaCGL8aElcEUHJ7pI6Yt.jpg'
                                        alt={episode.title}
                                    />
                                </div>
                                <div className="text-episode">
                                    <span>{episode.episode_id}</span>
                                    <h1>{episode.title}</h1>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            ) : (
                <div className='container-loading'>
                    <Loader />
                </div>
            )}
        </>
    );
};
