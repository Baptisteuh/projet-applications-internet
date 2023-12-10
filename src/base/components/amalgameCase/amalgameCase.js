import React, { useEffect, useState } from 'react';
import background from "../../../assets/images/fuseItemBackground.png";
import './amalgameCase.css';

export default function AmalgameCase({ position, itemId }) {
  const [imageSrcs, setImageSrcs] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://zeldam.smash-house.fr:3000/api');
        const data = await response.json();
        setItems(data);
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
            const imageModule = await import(`../../../assets/images/items/${item.img}`);
            imageObject[item.id] = imageModule.default;
          }
        })
      );
      setImageSrcs(imageObject);
    };

    loadImages();
  }, [items]);

  return (
    <div className="image-container" id="container">
      <img src={background} alt="Case"/>
      {imageSrcs[itemId] ? 
        <img className="itemCase" src={imageSrcs[itemId]} alt="Item"/>
       : <img className="itemCase" src={imageSrcs[1]} alt="Item"/>}
    </div>
  );
}
