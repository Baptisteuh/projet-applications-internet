import { Box, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import './wiki.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import itemBackground from "../../assets/images/fuseItemBackground.png";

export default function Wiki() {
    const [items, setItems] = useState([]);
    const [imageSrcs, setImageSrcs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api');
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
      const loadImages = async () => {
        const imageObject = {};
        await Promise.all(
          items.map(async (item) => {
            if (item && item.img) {
              const imageModule = await import(`../../assets/images/items/${item.img}`);
              imageObject[item.id] = imageModule.default;
            }
          })
        );
        setImageSrcs(imageObject);
      };
      loadImages();
    }, [items]);

    return <Grid container>
                <Grid item xs={2}>
                    <List>
                        <ListItem>
                        <ListItemButton className='category-button'>
                            <ListItemText primary={'One-handed swords'} />
                        </ListItemButton>
                        </ListItem>
                        <ListItem>
                        <ListItemButton className='category-button'>
                            <ListItemText primary={'Two-handed swords'} />
                        </ListItemButton>
                        </ListItem>
                        <ListItem>
                        <ListItemButton className='category-button'>
                            <ListItemText primary={'Bows'} />
                        </ListItemButton>
                        </ListItem>
                        <ListItem>
                        <ListItemButton className='category-button'>
                            <ListItemText primary={'Items'} />
                        </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
                <Grid
                    item xs={10}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                >
                    {items.map((item) => (
                        <Box
                            sx={{
                                width: 200,
                                height: 200,
                                backgroundImage: `url(${itemBackground})`,
                                backgroundSize: "cover",
                                margin: '1%',
                                userSelect: 'none',
                                cursor: 'pointer',
                                textAlign: 'center'
                            }}
                            justifyContent="center"
                            alignItems="center"
                            display="flex"
                            color={'white'}
                            onClick={() => window.location.href += '/' + item.id}
                        >
                            <img src={imageSrcs[item.id]} alt={item.name} className='item-img'/>
                            {item.name}
                        </Box>
                    ))}
                </Grid>
            </Grid>
}