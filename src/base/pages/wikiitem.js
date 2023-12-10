import { useParams } from 'react-router-dom';
import { Box, Grid, Button } from '@mui/material';
import './wikiitem.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import itemBackground from "../../assets/images/backgroundInformations.png";

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
        <div id="backButton"><Button color="error" variant="contained" onClick={() => window.location.href = '/wiki'}>Retour au Wiki</Button></div>
        <Grid container spacing={5} padding={6}>
            <Grid item xs={4}>
                <Box
                    sx={{
                        width: '100%',
                        height: 'auto',
                        backgroundImage: `url(${itemBackground})`,
                        backgroundSize: "cover"
                    }}
                >
                    {imageSrc && (
                        <>
                            <img src={imageSrc} alt={item.name} id="weapon" />

                        </>
                    )}
                </Box>
            </Grid>

            <Grid item xs={8}>
                <Box
                    sx={{
                        backgroundImage: `url(${itemBackground})`,
                        backgroundSize: 'cover',
                    }}
                    justifyContent="center"
                    alignItems="center"
                    color={'white'}
                >
                {imageSrc && (
                    <>
                    <div id="informations">
                        <h2>Item's name : {item.name}</h2>
                        {item.archetype && (<h2>Archetype : {item.archetype}</h2>)}
                        {item.category && (<h2>Category : {item.category}</h2>)}
                        {item.durability && (<h2>Durability : {item.durability}</h2>)}
                        {item.statistics && (<h2>Statistics : {item.statistics}</h2>)}
                        {item.specialCapacity && (<h2>Special capacity : {item.specialCapacity}</h2>)}
                        {item.description && (<h2>Description : {item.description}</h2>)}
                    </div>
                    </>
                )}
                </Box>
            </Grid>
        </Grid>
    </div>;
}