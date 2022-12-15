import {Link} from 'react-router-dom';
import arrow from '../../assets/icons/arrow.png';

export default function Describe() {
  return (
    <div className="row p-main1 py-5">
      <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 x-pr-80 x-bd-2">
        <p className="x-font7 wei-500 ls-1">What&nbsp;is&nbsp;numeras?</p>
        <div className="font-16">
          Don't use an auction house or middleman charging high fees and trapped in vaulting your items in one location. And stop waiting for never ending drops! Yes drops are fun, anticipation is fine, but it's comparable to impulse shopping!
          We are a peer-to-peer platform enabling ownership of virtually any item or service, managed in your Numeras portfolio of diverse holdings from within and outside of Numeras.
          Every item you own within Numeras is managed as a digital ledger on blockchain. Authenticated and certificate based. Blockchain is employed to maintain authenticity throughout chain of custody.
          And let's throw NFTs into the mix too, which connects physical items to the Metaverse. The token economy that puts the power back into the hands of the individual.
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
