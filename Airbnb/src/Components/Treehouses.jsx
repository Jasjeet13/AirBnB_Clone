import React, { useState, useEffect } from 'react';
import DisplayCard from './DisplayCard';

function Treehouses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/Treehouses')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <DisplayCard data={data} category="Treehouses"/>
    </div>
  );
}

export default Treehouses;
