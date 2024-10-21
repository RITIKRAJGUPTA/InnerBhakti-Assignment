import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProgramList = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/programs')
            .then(response => {
                setPrograms(response.data);
            })
            .catch(error => {
                console.error('Error fetching programs', error);
            });
    }, []);

    return (
        <div>
            <h1>Programs</h1>
            <ul>
                {programs.map(program => (
                    <li key={program._id}>
                        <img src={program.image} alt={program.name} />
                        <h2>{program.name}</h2>
                        <Link to={`/program/${program._id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProgramList;
