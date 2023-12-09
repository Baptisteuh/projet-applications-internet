import React, { useEffect, useState } from 'react';
import './amalgameFilter.css';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import axios from 'axios';

function AmalgameFilter(props) {
  const [items, setItems] = useState([]);

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

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    props.onOptionChange(selectedValue);
  };

  const handleOptionChange2 = (event) => {
    const selectedValue = event.target.value;
    props.onOptionChange2(selectedValue);
  };

  return (
    <div id="amalgameFilter">
        {props.position === '1' ? (
          <select id="selectionElement" onChange={handleOptionChange}>
            {items.filter((item) => item.isBaseWeapon === "true").map((item) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>
        ) : (
          <select id="selectionElement" onChange={handleOptionChange2}>
            {items.map((item) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>
        )}
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
  );
}

export default AmalgameFilter;