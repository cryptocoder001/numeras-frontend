import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import createCover from '../../../assets/images/create-cover.jpg';
import FaqItem from '../../../components/create/faqItem';
import CardItem from '../../../components/create/card';
import SyndicateCatalog from '../../../components/global/syndicateCatalog';
import GuideItem from '../../../components/create/guideItem';
import infoIcon from '../../../assets/icons/info-icon.png';
import photoIcon from '../../../assets/icons/photo-icon.png';
import submitIcon from '../../../assets/icons/submit-icon.png';

const Syndicate = () => {
  const history = useHistory();
  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-12 col-md-8 mt-5 mb-4">
          <div className="x-font7">Have Something to Syndicate?</div>
          <div className="x-font2 ls-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat.
            Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit.
            Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet.
          </div>
          <div className='x-font13 mt-5'>Get Started in 3 Easy Steps</div>
          <div className="row mt-5">
            <div className='col-4'>
              <GuideItem photo = {infoIcon} text = "1. PROVIDE INFO" />
            </div>
            <div className='col-4'>
              <GuideItem photo = {photoIcon} text = "2. UPLOAD PHOTOS"/>
            </div>
            <div className='col-4'>
              <GuideItem photo = {submitIcon} text = "3. REVIEW & SUBMIT"/>
            </div>
          </div>
        </div>
        <hr className='x-underline'/>
        <div className="col-sm-12 col-md-4 x-desktop-mt">
          <div>
            <Link to="" className="x-font3 no-underline">BECOME A MEMBER</Link>
          </div>
          <div className="mt-4">
            <Link to="" className="x-font3 mt-5 no-underline">I'M ALREADY A MEMBER</Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-8 mt-5">
          <div className="x-font7">Why Syndicate with Numeras?</div>
          <div className="x-font2 font-14 ls-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat.
            Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit.
            Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat.
            Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit.
            Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet.
          </div>
          <div className="mt-3">
            <button className="x-button5" onClick={()=>{history.push("/create-syndicate/1")}}>Create Now</button>
          </div>
          <div className="x-font7 mt-5">How This Works</div>
          <div className="x-font2 font-14 ls-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat.
          </div>
          <div className="mt-3">
            <FaqItem
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat. Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit. Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet."
            />
            <FaqItem
              title="Maecenas fermentum magna vitae dolor convallis semper?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat. Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit. Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet."
            />
            <FaqItem
              title="Praesent porttitor dolor vitae laoreet porta?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat. Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit. Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet."
            />
            <FaqItem
              title="Morbi hendrerit neque ac nisl eleifend, non feugiat eros volutpat?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat. Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit. Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet."
            />
            <FaqItem
              title="Etiam eget nisl posuere, interdum justo eget, convallis est?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat. Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit. Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet."
            />
            <FaqItem
              title="Donec vulputate lectus eget arcu hendrerit tincidunt?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat. Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit. Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet."
            />
            <FaqItem
              title="Nulla fermentum orci ut dui sodales ultrices?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat. Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit. Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet."
            />
            <FaqItem
              title="Aliquam sed mi ut orci eleifend porttitor at quis lorem?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat. Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit. Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet."
            />
            <FaqItem
              title="Donec in libero non dui fringilla viverra?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat. Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit. Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet."
            />
            <FaqItem
              title="Phasellus nec lacus ullamcorper, cursus odio sit amet, sollicitudin lectus?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat. Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit. Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet."
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-4 mt-5 text-center">
          <CardItem
            title="Let Us Help You"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat. Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit. Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet."
            button="MORE INFO"
          />
        </div>
        <div className="row mt-5">
          <div className="x-font7">Syndicate Highlights</div>
          <div className="x-font2 font-14 ls-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat.
          </div>
          <div className='mt-4'>
            <SyndicateCatalog />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Syndicate;
