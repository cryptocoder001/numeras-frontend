import { useState } from 'react';

import StoryCatalog from '../global/storyCatalog';

import Story_img from '../../assets/images/story.png';

import StoryData from '../../assets/json/stories.json';


export default function Story() {
  const [storyData, SetStoryData] = useState(StoryData);
  return (
    <>
      <div className="position-relative mt-5 mb-5">
        <img width="60%" className='mobile-width100 rounded-3' src={Story_img} alt="story" />
        <div className="position-absolute mobile-top d-flex align-items-center justify-content-end top-0 h-100">
          <div className="bg-light px-5 py-4 border-1 x-story">
            <div className="px-4 py-4">
              <p className=" x-font11 mb-1">FEATURED STORIES</p>
              <p className="x-font12 mb-3">Story Title Goes Here</p>
              <div>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Phasellus ut
                imperdiet justo. Quisque pellentesque ac elit maximus viverra. Suspendisse urna tellus, maximus nec est
                quis, sagittis tincidunt lorem.
              </div>
              <button className="x-button5 mt-4">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className='story-mobile-space'></div>
      <div className="row mt-4">
        {storyData.map((data, ind) => (
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={ind}>
            <StoryCatalog propsData={{ ...data, parent: 'story' }} />
          </div>
        ))}
      </div>
    </>
  );
}
