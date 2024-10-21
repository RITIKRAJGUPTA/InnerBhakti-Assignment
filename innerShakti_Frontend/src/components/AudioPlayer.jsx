import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const AudioPlayer = () => {
    const { id, trackId } = useParams();
    const [track, setTrack] = useState(null);
    const audioRef = useRef(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/programs/${id}`)
            .then(response => {
                setTrack(response.data.tracks[trackId]);
            })
            .catch(error => {
                console.error('Error fetching track', error);
            });
    }, [id, trackId]);

    return (
        <div>
            {track && (
                <>
                    <h1>Playing: {track.name}</h1>
                    <audio ref={audioRef} controls>
                        <source src={track.audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio tag.
                    </audio>
                </>
            )}
        </div>
    );
};

export default AudioPlayer;
