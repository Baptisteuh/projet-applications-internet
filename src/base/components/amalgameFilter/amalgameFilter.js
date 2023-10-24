import * as React from 'react';
import './amalgameFilter.css'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

class AmalgameFilter extends React.Component {
    render() {
        return <div id="amalgameFilter">
            <select id="selectionElement">
                <option>Pas d'arme</option>
                <option>Epée zora</option>
                <option>Lance zora</option>
            </select>
            <fieldset>
                <legend>Filtres armes:</legend>

                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Epee à 1 main" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Epee à 2 main" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Lance" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Arc" />
                </FormGroup>
            </fieldset>
        </div>
    }
}

export default AmalgameFilter