import React, { useEffect, useState } from 'react';
import './amalgameFilter.css';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import axios from 'axios';

function AmalgameFilter(props) {
  const [items, setItems] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [showOneHandItem, setShowOneHandItem] = useState(true);
  const [showTwoHandItem, setShowTwoHandItem] = useState(true);
  const [showSpearItem, setShowSpearItem] = useState(true);
  const [showItem, setShowItem] = useState(true);

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

  const handleFilterSelectionItem = (event) => {
    switch (event.target.attributes[1].nodeValue) {
      case "oneHand":
        setShowOneHandItem((prev) => !prev);
        break;
      case "twoHand":
        setShowTwoHandItem((prev) => !prev);
        break;
      case "spear":
        setShowSpearItem((prev) => !prev);
        break;
      case "item":
        setShowItem((prev) => !prev);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let list = [];
    items.forEach(item => {
      const enableOneHand = item.category === "One-handed weapon" && showOneHandItem;
      const enableTwoHand = item.category === "Two-handed weapon" && showTwoHandItem;
      const enableSpear = item.category === "Spear" && showSpearItem;
      const enableItem = item.category === "item" && showItem;

      if (enableOneHand || enableTwoHand || enableSpear || enableItem) {
        list.push(item);
      }
    });

    setCurrentList(list);
    if (props.position === '1') {
      props.onFilterChange(list);
    } else {
      props.onFilterChange2(list);
    }
  }, [showOneHandItem, showTwoHandItem, showSpearItem, showItem, items]);

  return (
    <div id="amalgameFilter">
      {props.position === '1' ? (
        <select id="selectionElement" onChange={handleOptionChange}>
          {currentList.filter((item) => item.isBaseWeapon === "true").map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
      ) : (
        <select id="selectionElement" onChange={handleOptionChange2}>
          {currentList.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
      )}
      <fieldset>
        <legend>Item fused filter :</legend>

        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked name="oneHand" onChange={handleFilterSelectionItem} />} label="One-handed swords" />
          <FormControlLabel control={<Checkbox defaultChecked name="twoHand" onChange={handleFilterSelectionItem} />} label="Two-handed swords" />
          <FormControlLabel control={<Checkbox defaultChecked name="spear" onChange={handleFilterSelectionItem} />} label="Spears" />
          {props.isSecondItem === "true" ?
            <FormControlLabel control={<Checkbox defaultChecked name="item" onChange={handleFilterSelectionItem} />} label="Items" /> : <></>
          }

        </FormGroup>
      </fieldset>
    </div>
  );
}

export default AmalgameFilter;