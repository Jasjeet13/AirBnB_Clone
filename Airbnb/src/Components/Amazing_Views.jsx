import React, { useState, useEffect } from 'react';
import DisplayCard from './DisplayCard';

function Amazing_Views() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/AmazingViews')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <DisplayCard data={data} category="AmazingViews"/>
    </div>
  );
}

export default Amazing_Views;
