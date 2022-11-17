import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Stepper from '../../../components/create/stepper';
import CardItem from '../../../components/create/card';
import { BsExclamationCircle } from "react-icons/bs";
import { NotificationManager } from "react-notifications";
import { useApiContext } from '../../../contexts';
import { checkProperties } from '../../../utils/utils';

function Create2() {
  const history = useHistory();
  const [state, { setInfo }] = useApiContext();
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    otherName: "",
    service: "",
    description: ""
  });

  const handleBasicInfo = () => {
    const isFilled = checkProperties(basicInfo);
    if (isFilled) {
      setInfo(1, basicInfo);
      history.push("/create-syndicate/3");
    } else {
      NotificationManager.warning("Please fill all fields", "", 3000);
    }

  }
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
              step="1"
              path="/create-syndicate"
              steps={['Personal info', 'Syndicate info', 'Syndicate Category', 'Create Prospectus', 'Upload Media']}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-9">
          <div>
            <div className='x-font11 mt-3'>
              Syndicate Information
            </div>
            <div className="x-font5 mt-3 italic">
              Enter some basic information about your syndicate.
            </div>
            <div className="mt-4 justify-s">
              <div className="w80 mobile-width100">
                <input className="x-input6 mobile-width100 " placeholder="Syndicate Name" value={basicInfo.name} onChange={(e) => setBasicInfo({ ...basicInfo, name: e.target.value })} />
              </div>
              <div className="w20 mobile-width0"></div>
            </div>
            <div className="mt-2 justify-s">
              <div className="w80 mobile-width100">
                <input className="x-input6 mobile-width100 " placeholder="[other] Name" value={basicInfo.otherName} onChange={(e) => setBasicInfo({ ...basicInfo, otherName: e.target.value })} />
              </div>
              <div className="w20 mobile-width0"></div>
            </div>
            <div className="mt-2 justify-s">
              <div className="w80 mobile-width100 justify-start">
                <input className="x-input6 mobile-width90 " placeholder="Choose Service" value={basicInfo.service} onChange={(e) => setBasicInfo({ ...basicInfo, service: e.target.value })} />
                <BsExclamationCircle style={{ marginLeft: '15px', fontSize: "22px", color: '#2232cd' }} />
              </div>
              <div className="w20 mobile-width0">
              </div>
            </div>
            <div className="mt-2 justify-s">
              <div className="w80 mobile-width100">
                <textarea name="textarea" className="mobile-width100 x-input7" placeholder="Enter any other information you want to provide." value={basicInfo.description} onChange={(e) => setBasicInfo({ ...basicInfo, description: e.target.value })} />
              </div>
              <div className="w20 mobile-width0"></div>
            </div>
            <div className="mt-3 justify-s">
              <div className="w80 mobile-width100 d-flex align-items-center">
                <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                <label className="x-font5 my-0" style={{ marginLeft: "10px" }}> I agree to the numeras <span className="bule-color">Terms</span> and <span className="bule-color">Access Agreement</span></label>
              </div>
              <div className="w20 mobile-width0"></div>
            </div>
            <div className="mt-5 justify-s">
              <div className="w80 mobile-width100">
                <button className="x-button8 x-font3" onClick={handleBasicInfo}>CREATE SYNDIATE</button>
              </div>
              <div className="w20 mobile-width0"></div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 mt-5 text-center">
          <div className="mt-5">
            <CardItem
              title="Looking For Prices"
              content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus pretium felis sed nunc interdum, maximus accumsan arcu blandit. In eu tempus erat.Nulla facilisi. Suspendisse dapibus ipsum vel justo vestibulum, brandit imperdiet tellus suscipit.Pellentesque tempor ex quis arcu pellentesque, quis tempor lacus laoreet."
              button="SEE OUR PRICING CHART"
            />
          </div>

        </div>
      </div>
    </div >
  )
}

export default Create2;