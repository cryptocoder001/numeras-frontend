import {Link} from 'react-router-dom';
import arrow from '../../assets/icons/arrow.png';

export default function Describe() {
  return (
    <div className="row p-main1 py-5">
      <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 x-pr-80 x-bd-2">
        <p className="x-font7 wei-500 ls-1">What&nbsp;is&nbsp;numeras?</p>
        <div className="font-16">
          Suspendisse rutrum efficitur velit et convallis. Curabitur a tellus congue, consectetur odio facilisis
          ultrices velit. Duis a nisl est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a nisl est.
          Suspendisse rutrum efficitur velit et convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla tristique quam in purus eleifend maximus.
        </div>
        <button className="x-button5 mt-3 mb-3">Submit</button>
      </div>
      <div className="mobile-line"></div>
      <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 x-pl-70">
        <p className="x-font7 wei-500 ls-1">Syndicate&nbsp;Catalog</p>
        <div className="font-16 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a nisl est. Suspendisse rutrum efficitur velit
          et convallis.
        </div>
        <Link to = "/" className = "x-linkColor">VIEW THE CATALOG</Link>
        <img src = {arrow} alt = "arrow icon" width = "22px" className='ml-2' />
      </div>
    </div>
  );
}
