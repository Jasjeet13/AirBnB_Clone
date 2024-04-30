import React, { useState, useEffect } from 'react';
import DisplayCard from './DisplayCard';

function Castles() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/Castles')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <DisplayCard data={data} category="Castles"/>
    </div>
  );
}

export default Castles;
