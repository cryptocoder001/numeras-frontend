import { useState } from 'react';

import Catalog from '../global/catalog';

import AutoMobileData from '../../assets/json/autoMobile.json';

export default function AutoMobile() {
  const [autoMobile, setAutoMobileData] = useState(AutoMobileData);

  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <div className="font-22">Automobiles</div>
        <button className="btn btn-main font-13 wei-500 px-0 border-0">VIEW AUTOMOBILES CATALOG</button>
      </div>
      <div className="row">
        {autoMobile.map((data, ind) => (
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={ind}>
            <Catalog propsData={{ ...data, parent: 'automobile' }} />
          </div>
        ))}
      </div>
    </>
  );
}
