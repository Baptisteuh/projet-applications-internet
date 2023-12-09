import { Box, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import './wiki.css';
import axios from 'axios';
import React from 'react';
import itemBackground from "../../assets/images/fuseItemBackground.png";

export default function Wiki() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
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

    return <Grid container>
                <Grid item xs={2}>
                    <List>
                        <ListItem>
                        <ListItemButton className='category-button'>
                            <ListItemText primary={'Swords'} />
                        </ListItemButton>
                        </ListItem>
                        <ListItem>
                        <ListItemButton className='category-button'>
                            <ListItemText primary={'Bows'} />
                        </ListItemButton>
                        </ListItem>
                        <ListItem>
                        <ListItemButton className='category-button'>
                            <ListItemText primary={'Shields'} />
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
                            {item.name}
                        </Box>
                    ))}
                </Grid>
            </Grid>
}