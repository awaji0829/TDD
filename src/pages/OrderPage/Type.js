import React, { useEffect, useState } from 'react';
import Product from './SummaryPage/Product';
import axios from 'axios';

export default function Type({ orderType }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    loadItems(orderType);
  }, []);

  const loadItems = (orderType) => {
    try {
      const response = axios.get(`http://loacalhost:5000/${orderType}`);
      setItems(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  const ItemComponent = orderType === 'products' ? Product : null;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <div>{optionItems}</div>;
}
