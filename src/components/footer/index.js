import { Link } from 'react-router-dom';

import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import linkedin from '../../assets/icons/linkedin.png';
import instagram from '../../assets/icons/instagram.png';

export default function Footer() {
  return (
    <footer className="bg-light text-center text-light">
      <div className="p-main pt-3 pb-3 mt-5">
        <p className="font-22">Follow Us</p>
        <section className="mb-4">
          <a className="btn rounded-circle border-0" href="https://www.facebook.com/numeras2020" role="button">
            <img src = {facebook} alt = "facebook icon" width = "30px"/>
          </a>
          <Link className="btn rounded-circle border-0" to="#!" role="button">
            <img src = {twitter} alt = "twitter icon" width = "30px"/>
          </Link>
          <a className="btn rounded-circle border-0" href="https://www.linkedin.com/company/numeras/" role="button">
            <img src = {linkedin} alt = "linkedin icon" width = "30px"/>
          </a>
          <Link className="btn rounded-circle border-0" to="#!" role="button">
            <img src = {instagram} alt = "instagram icon" width = "30px"/>
          </Link>
        </section>
      </div>
      <div className="text-center p-main pb-4">
        <p className="mb-2">
          <Link className="font-13 wei-500 no-underline ls-1" to="#">
            Contact Us
          </Link>
          &nbsp;|&nbsp;
          <Link className="font-13 wei-500 no-underline ls-1" to="#">
            Press
          </Link>
        </p>
        <p className="mb-2">
          <Link className="font-13 wei-500 no-underline ls-1" to="#">
            Privacy Policy
          </Link>
          &nbsp;|&nbsp;
          <Link className="font-13 wei-500 no-underline ls-1" to="#">
            Security
          </Link>
          &nbsp;|&nbsp;
          <Link className="font-13 wei-500 no-underline ls-1" to="#">
            Terms&nbsp;&&nbsp;Conditions
          </Link>
        </p>
        <p className="mb-2 no-underline ls-1">
          <Link className="font-13 wei-500 no-underline ls-1" to="#">
            Partners
          </Link>
          &nbsp;|&nbsp;
          <Link className="font-13 wei-500 no-underline ls-1" to="#">
            Services
          </Link>
        </p>
        <p className="font-13 mb-0 pb-1 no-underline ls-1">© 2022 Numeras, Inc.</p>
      </div>
    </footer>
  );
}
