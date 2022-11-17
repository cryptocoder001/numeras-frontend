import { useState } from 'react';

import Catalog from '../global/catalog';

import SyndicateData from '../../assets/json/syndicates.json';


export default function Syndicates() {
  const [syndData, setSyndData] = useState(SyndicateData);

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="x-font7">Syndicates Open Now</div>
        <button className="btn btn-main font-13 wei-500 px-0 border-0">VIEW ENTIRE CATALOG</button>
      </div>
      <div className="row">
        {syndData.map((data, ind) => (
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={ind}>
            <Catalog propsData={{ ...data, parent: 'syndicate' }} />
          </div>
        ))}
      </div>
    </>
  );
}
