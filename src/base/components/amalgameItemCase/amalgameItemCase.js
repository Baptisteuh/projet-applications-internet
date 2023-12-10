import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AmalgameItemCase(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api');
        const data = response.data.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {});
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="amalgameFilter">
      <fieldset>
        <legend>Amalgame:</legend>

        <h3>Item statitics :</h3>
        {Object.keys(items).length > 0 && (
          <div>
            <p>
              <strong>Damage :</strong>{' '}
              {Number(items[props.idItem].statistics) +
                Number(items[props.idItem2].statistics)}
            </p>
            <p>
              <strong>Durability :</strong>{' '}
              {Number(items[props.idItem].durability) +
                Number(items[props.idItem2].durability)}
            </p>
            <p>
              <strong>Type :</strong> {items[props.idItem].category}
            </p>
          </div>
        )}
      </fieldset>
    </div>
  );
}