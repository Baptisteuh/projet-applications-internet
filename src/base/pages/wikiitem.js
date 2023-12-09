import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function WikiItem() {
    const { id } = useParams();
    const [item, setItem] = React.useState([]);


    useEffect(() => {
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

    // Utiliser un état local pour stocker le chemin de l'image
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        // Si item est défini et possède une propriété img
        if (item && item.img) {
        // Utiliser la promesse require pour charger l'image
        const loadImage = async () => {
            const imageModule = await import(`../../assets/images/items/${item.img}`);
            setImageSrc(imageModule.default);
        };

        loadImage();
        }
    }, [item]);

    return <div>
      {imageSrc && (
        <>
          <img src={imageSrc} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{item.description}</p>
          <p>{item.statistics}</p>
        </>
      )}
    </div>;
}