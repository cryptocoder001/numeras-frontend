import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Stepper from '../../../components/create/stepper';
import CardItem from '../../../components/create/card';

function Create4() {
  const history = useHistory();
  return (
    <div className="x-create1 container">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <div className='x-font13 mt-5'>
            Create a Listing
          </div>
          <div className="x-font7 font-22 mt-3">
            Tell us about your syndicate.
          </div>
          <div className='my-4'>
            <Stepper
              step="3"
              path="/create-syndicate"
              steps={['Personal info', 'Syndicate info', 'Syndicate Category', 'Create Prospectus', 'Upload Media']}
            />
          </div>
          <div className="x-font5 mt-3 italic">
            Create your prospectus
          </div>
          <div className="x-font11 wei-400 mt-4">
            Basic Details
          </div>
        </div>
        <div className="col-sm-12 col-md-4 mt-5 text-center">

        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-9">
          <div>
            <div className="mt-4">
              <input className="x-input6 mobile-width100" placeholder="Racing Club" />
            </div>
            <div className="mt-3">
              <input className="x-input6 mobile-width100" placeholder="Horse's Name" />
            </div>
            <div className="mt-3">
              <input className="x-input6 mobile-width100" placeholder="Gender" />
            </div>
            <div className="mt-3">
              <input className="x-input6 mobile-width100" placeholder="Birth Year" />
            </div>
            <div className="mt-3">
              <input className="x-input6 mobile-width100" placeholder="Trainer" />
            </div>
            <div className="mt-3">
              <input className="x-input6 mobile-width100" placeholder="Where is this horse based?" />
            </div>
            <div className="mt-3">
              <Link to="/" className="x-font6 wei-500 no-underline">Add pedigree document</Link>
            </div>
            <div className="mt-2">
              <Link to="/" className="x-font6 wei-500 no-underline">Add racing history document</Link>
            </div>
            <div className="x-font4 font-22 wei-400 mt-4">
              Syndicate Summary
            </div>
            <div className="mt-4">
              <textarea name="textarea" className="x-input8 mobile-width100" placeholder="Enter a summary of your syndicate here."></textarea>
            </div>
            <div className="x-font4 font-22 wei-400 mt-4">
              Additional Details
            </div>
            <div className="mt-2">
              <textarea name="textarea" className="x-input7 mobile-width100" style={{ height: '100px' }} placeholder="Enter in any additional details about the club (optional)."></textarea>
            </div>
            <div className="mt-2">
              <textarea name="textarea" className="x-input7 mobile-width100" style={{ height: '100px' }} placeholder="Enter in any additional racehore specifics (optional)."></textarea>
            </div>
            <div className="mt-2">
              <textarea name="textarea" className="x-input7 mobile-width100" style={{ height: '100px' }} placeholder="Enter in any additional syndicate details (optional)."></textarea>
            </div>
            <div className="x-font4 font-22 wei-400 mt-4">
              Your Background
            </div>
            <div className="mt-2">
              <textarea name="textarea" className="x-input8 mobile-width100" style={{ height: '130px' }} placeholder="Enter in your basic background information (optional)."></textarea>
            </div>
            <div className="mt-2">
              <textarea name="textarea" className="x-input8 mobile-width100" style={{ height: '130px' }} placeholder="Enter in your background information that's pertinant to this listing."></textarea>
            </div>
            <div className="x-font4 font-22 wei-400 mt-4">
              Additional Documentation
            </div>
            <div className="mt-3">
              <Link to="/" className="x-font6 uppercase wei-500 no-underline">Add an appraisal</Link>&nbsp;
              <i className="fa-light fa-circle-info wei-500 bule-color"></i>
            </div>
            <div className="mt-2">
              <Link to="/" className="x-font6 uppercase wei-500 no-underline">Add insurance</Link>&nbsp;
              <i className="fa-light fa-circle-info wei-500 bule-color"></i>
            </div>
            <div className="mt-2">
              <Link to="/" className="x-font6 uppercase wei-500 no-underline">Upload additional documents</Link>&nbsp;
              <i className="fa-light fa-circle-info wei-500 bule-color"></i>
            </div>
            <div className="mt-5">
              <button className="x-button8 x-font3" onClick={() => history.push("/create-syndicate/5")}>CONTINUE TO UPLOAD MEDIA</button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 mt-4 text-center">
          <CardItem
            title="Let Us Help You"
            content="Suspendisse rutrum efficitur velit et convallis. Curabitur a tellus congue, consectetur odio facilisis ultrices velit. Duis a nisl est. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            button="GET HELP"
          />
        </div>
      </div>
    </div>
  )
}

export default Create4;