import { useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

export default function WikiItem() {
    const { id } = useParams();
    const [item, setItem] = React.useState([]);


    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/' + id);
                setItem(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return <div>
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p>{item.description}</p>
        <p>{item.statistics}</p>
    </div>;
}