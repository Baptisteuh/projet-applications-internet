import * as React from 'react';
import './amalgame.css'

import { Grid, Button } from '@mui/material'
import amalgameIcon from '../../assets/images/amalgame.png';
import fuseButtonActivate from '../../assets/images/fuseButtonActivate.png';
import AmalgameCase from '../components/amalgameCase/amalgameCase';
import AmalgameFilter from '../components/amalgameFilter/amalgameFilter';
import AmalgameItemCase from '../components/amalgameItemCase/amalgameItemCase';

export default function Amalgame() {
    const [selectedItemId, setSelectedItemId] = React.useState('');
    const [selectedItemId2, setSelectedItemId2] = React.useState('');
    const [fusedItem, setFusedItem] = React.useState('');

    const handleOptionChange = (id) => {
        setFusedItem(undefined);
        setSelectedItemId(id);
    };

    const handleOptionChange2 = (id) => {
        setFusedItem(undefined);
        setSelectedItemId2(id);
    };

    const fuse = () => {
        setFusedItem("fuse");
    }

    return (<div id="contentPage">
        <Grid container 
            spacing={0}
        >
            <Grid item xs={4}>
                <AmalgameCase position="1" itemId={selectedItemId}/>
                <AmalgameFilter position="1" onOptionChange={handleOptionChange}/>
            </Grid>
            <Grid item xs={4}>
                <Button text="Fabriquer"/>
                <div id="containerAmalgameIcon">
                    <img src={amalgameIcon} id="amalgameIcon"/>
                    <img src={fuseButtonActivate} id="fuseButtonIcon" className='fuseButton' onClick={fuse}/>
                </div>
            </Grid>
            <Grid item xs={4}>
                <AmalgameCase position="2" itemId={selectedItemId2}/>
                <AmalgameFilter position="2" onOptionChange2={handleOptionChange2}/>
            </Grid>
        </Grid>
        {fusedItem ? <AmalgameItemCase idItem={selectedItemId} idItem2={selectedItemId2}/> : <></>}
    </div>)
}