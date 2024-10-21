import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ProgramDetails = () => {
    const { id } = useParams();
    const [program, setProgram] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/programs/${id}`)
            .then(response => {
                setProgram(response.data);
            })
            .catch(error => {
                console.error('Error fetching program details', error);
            });
    }, [id]);

    return (
        <div>
            {program && (
                <>
                    <h1>{program.name}</h1>
                    <ul>
                        {program.tracks.map((track, index) => (
                            <li key={index}>
                                <h3>{track.name}</h3>
                                <Link to={`/program/${program._id}/track/${index}`}>Play</Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default ProgramDetails;
