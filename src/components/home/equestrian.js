import { useState } from 'react';

import Catalog from '../global/catalog';

import EquestrianData from '../../assets/json/equestrian.json';


export default function Equestrian() {
  const [equestianData, setEquestrianData] = useState(EquestrianData);

  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <div className="font-22">Equestrian</div>
        <button className="btn btn-main font-13 wei-500 px-0 border-0">VIEW EQUESTRIAN CATALOG</button>
      </div>
      <div className="row">
        {equestianData.map((data, ind) => (
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={ind}>
            <Catalog propsData={{ ...data, parent: 'equestrian' }} />
          </div>
        ))}
      </div>
    </>
  );
}
