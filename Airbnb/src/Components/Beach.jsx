import React, { useState, useEffect } from 'react';
import DisplayCard from './DisplayCard';

function Beach() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/Beach')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <DisplayCard data={data}/>
    </div>
  );
}

export default Beach;
