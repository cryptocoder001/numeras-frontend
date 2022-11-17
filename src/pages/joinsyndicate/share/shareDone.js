import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import catalogs from '../../../assets/json/catalogs.json';
import './share.css';

function ShareDone() {
  const { name, id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const data = catalogs.filter((val) => {
      return val.name.toLowerCase() === name;
    });
    if (data.length > 0 && data[0].items.length > 0) {
      setItem(data[0].items[id])
    }
  }, [id, name]);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className='col-sm-12 col-md-12 mt-2'>
          <p className='font-20 wei-700 ls-1'>Congratulations! You have booked a 10% share of <span className='font-20 wei-700 ls-1 italic'>{item?.name}</span></p>
          <Link to = "/">GO TO YOUR PORTFOLIO</Link><br/><br/>
          <Link to = "/">GO TO YOUR PROFILE</Link>
        </div>
      </div>
    </div>
  )
}

export default ShareDone;