import { Box, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import './wiki.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import itemBackground from "../../assets/images/fuseItemBackground.png";
import oneHand from "../../assets/images/oneHand.png";
import twoHand from "../../assets/images/twoHand.png";
import spear from "../../assets/images/spear.png";
import item from "../../assets/images/item.png";

export default function Wiki() {
    const [items, setItems] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    const [imageSrcs, setImageSrcs] = useState([]);
    const [oneHandedButton, setOneHandedButton] = useState(true);
    const [twoHandedButton, setTwoHandedButton] = useState(true);
    const [spearButton, setSpearButton] = useState(true);
    const [itemButton, setItemButton] = useState(true);

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

    useEffect(() => {
        let list = [];
        items.forEach(item => {
          const enableOneHand = item.category === "One-handed weapon" && oneHandedButton;
          const enableTwoHand = item.category === "Two-handed weapon" && twoHandedButton;
          const enableSpear = item.category === "Spear" && spearButton;
          const enableItem = item.category === "item" && itemButton;
    
          if (enableOneHand || enableTwoHand || enableSpear || enableItem) {
            list.push(item);
          }
        });
        setCurrentList(list);
    }, [oneHandedButton, twoHandedButton, spearButton, itemButton, items]);

    return <Grid container>
                <Grid item xs={2}>
                    <List>
                        <ListItem>
                        <ListItemButton onClick={() => (setOneHandedButton(!oneHandedButton))} className={oneHandedButton ? 'category-button': 'category-button-disable'}>
                            <ListItemText primary={'One-handed swords'} />
                            <img src={oneHand} className='typeWeaponIcon' />
                        </ListItemButton>
                        </ListItem>
                        <ListItem>
                        <ListItemButton onClick={() => (setTwoHandedButton(!twoHandedButton))} className={twoHandedButton ? 'category-button': 'category-button-disable'}>
                            <ListItemText primary={'Two-handed swords'} />
                            <img src={twoHand} className='typeWeaponIcon' />
                        </ListItemButton>
                        </ListItem>
                        <ListItem>
                        <ListItemButton onClick={() => (setSpearButton(!spearButton))} className={spearButton ? 'category-button': 'category-button-disable'}>
                            <ListItemText primary={'Spear'} />
                            <img src={spear} className='typeWeaponIcon' />
                        </ListItemButton>
                        </ListItem>
                        <ListItem>
                        <ListItemButton onClick={() => (setItemButton(!itemButton))} className={itemButton ? 'category-button': 'category-button-disable'}>
                            <ListItemText primary={'Items'} />
                            <img src={item} className='typeWeaponIcon' />
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
                    {currentList.map((item) => (
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