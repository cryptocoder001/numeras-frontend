import { useState } from 'react';

import Catalog from './catalog';

import WatchData from '../../assets/json/watch.json';

export default function SyndicateCatalog() {
  const [watchData, setWatchData] = useState(WatchData);

  return (
    <>
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
