import * as React from 'react';
import { Grid } from '@mui/material';
import CardShop from '../components/shop/cardShop';

export default function Shop() {
    return <div>
        <Grid
            item xs={3}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                backgroundImage: `url(${"../../assets/images/background1.png"})`
            }}>
            <CardShop name="Default" price="0" number="1" />
            <CardShop name="Tears of The Kingdom" price="50" number="2" />
            <CardShop name="Minish Cap" price="50" number="3" />
            <CardShop name="Ocarina of Time" price="50" number="4" />
            <CardShop name="Twilight Princess" price="50" number="5" />
            <CardShop name="Phantom Hourglass" price="50" number="6" />
            <CardShop name="Spirit Tracks" price="50" number="7" />
            <CardShop name="Majora's Mask" price="50" number="8" />
            <CardShop name="Breath of the Wild" price="50" number="9" />
            <CardShop name="Skyward Sword" price="50" number="10" />
            <CardShop name="Link's Awakening" price="50" number="11" />
        </Grid>
    </div>
}