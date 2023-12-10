import * as React from 'react';
import './amalgame.css'

import { Grid, Button } from '@mui/material'
import amalgameIcon from '../../assets/images/amalgame.png';
import fuseButtonActivate from '../../assets/images/fuseButtonActivate.png';
import fuseButtonDeactivate from '../../assets/images/fuseButtonDeactivate.png';
import AmalgameCase from '../components/amalgameCase/amalgameCase';
import AmalgameFilter from '../components/amalgameFilter/amalgameFilter';
import AmalgameItemCase from '../components/amalgameItemCase/amalgameItemCase';
import { useState } from 'react';

export default function Amalgame() {
    const [selectedItemId, setSelectedItemId] = React.useState('');
    const [selectedItemId2, setSelectedItemId2] = React.useState('');
    const [fusedItem, setFusedItem] = React.useState('');
    const [fuseButton, setFuseButton] = React.useState(true);

    const handleOptionChange = (id) => {
        setFusedItem(undefined);
        setSelectedItemId(id);
    };

    const handleOptionChange2 = (id) => {
        setFusedItem(undefined);
        setSelectedItemId2(id);
    };

    const handleFilterChange = (list) => {
        if (list.length !== 0) {
            if (selectedItemId2 !== 0) {
                setFuseButton(true);
            }
            const containsItem = list.some(item => item.id === parseInt(selectedItemId));
            if (!containsItem) {
                setFusedItem(undefined);
                if (list[0].id !== 108) {
                    setSelectedItemId(list[0].id)
                }
            }
        }
        if (list.length == 183) {
            setFuseButton(false);
            setSelectedItemId(0);
        }
    };

    const handleFilterChange2 = (list) => {
        if (list.length !== 0) {
            if (selectedItemId !== 0) {
                setFuseButton(true);
            }
            const containsItem = list.some(item => item.id === parseInt(selectedItemId2));
            if (!containsItem) {
                setFusedItem(undefined);
                setSelectedItemId2(list[0].id)
            }
        } else {
            setFuseButton(false);
            setSelectedItemId2(0);
        }
    };

    const fuse = () => {
        if (selectedItemId === "") {
            setSelectedItemId(1);
        }
        if (selectedItemId2 === "") {
            setSelectedItemId2(1);
        }
        localStorage.setItem('rupeeBalance', parseInt(localStorage.getItem('rupeeBalance')) + 30);
        setFusedItem("fuse");
    }

    return (<div id="contentPage">
        <Grid container
            spacing={0}
        >
            <Grid item xs={4}>
                <AmalgameCase position="1" itemId={selectedItemId} />
                <AmalgameFilter position="1" onFilterChange={handleFilterChange} onOptionChange={handleOptionChange} />
            </Grid>
            <Grid item xs={4}>
                <Button text="Fabriquer" />
                <div id="containerAmalgameIcon">
                    <img src={amalgameIcon} id="amalgameIcon" />
                    {fuseButton ?
                        <img src={fuseButtonActivate} id="fuseButtonIcon" className="fuseButton" onClick={fuse} />
                        :
                        <img src={fuseButtonDeactivate} id="fuseButtonIcon" />
                    }
                </div>
            </Grid>
            <Grid item xs={4}>
                <AmalgameCase position="2" itemId={selectedItemId2} />
                <AmalgameFilter position="2" isSecondItem="true" onFilterChange2={handleFilterChange2} onOptionChange2={handleOptionChange2} />
            </Grid>
        </Grid>
        {fusedItem ? <AmalgameItemCase idItem={selectedItemId} idItem2={selectedItemId2} /> : <></>}
    </div>)
}