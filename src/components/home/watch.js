import { useState } from 'react';

import Catalog from '../global/catalog';

import WatchData from '../../assets/json/watch.json';

export default function Watch() {
  const [watchData, setWatchData] = useState(WatchData);

  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <div className="font-22">Watchs</div>
        <button className="btn btn-main font-13 wei-500 px-0 border-0">VIEW WATCH CATALOG</button>
      </div>
      <div className="row">
        {watchData.map((data, ind) => (
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={ind}>
            <Catalog propsData={{ ...data, parent: 'watch' }} />
          </div>
        ))}
      </div>
    </>
  );
}
