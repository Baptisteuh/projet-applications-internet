import * as React from 'react';
import './amalgame.css'

import { Grid, Item, Button } from '@mui/material'
import amalgameIcon from '../../assets/images/amalgame.png';
import fuseButtonActivate from '../../assets/images/fuseButtonActivate.png';
import AmalgameCase from '../components/amalgameCase/amalgameCase';
import AmalgameFilter from '../components/amalgameFilter/amalgameFilter';

class Amalgame extends React.Component {

    render() {
        return <div id="contentPage">
            <Grid container 
            spacing={0}
            >
                <Grid item xs={4}>
                    <AmalgameCase idItem="2" />
                    <AmalgameFilter />
                </Grid>
                <Grid item xs={4}>
                    <Button text="Fabriquer"/>
                    <div id="containerAmalgameIcon">
                        <img src={amalgameIcon} id="amalgameIcon" />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <AmalgameCase idItem="1" />
                    <AmalgameFilter />
                </Grid>
            </Grid>
        </div>
    }
}

export default Amalgame