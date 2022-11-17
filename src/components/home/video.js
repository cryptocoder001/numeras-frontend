import { useState } from 'react';

import VideoCatalog from '../global/videoCatalog';

import VideoData from '../../assets/json/video.json';

export default function Video() {
  const [videoData, setVideoData] = useState(VideoData);

  return (
    <div className="p-main px-0 my-5">
      <div className='bg-greyred py-4 mx-5'>
        <div className='container'>
          <div className="d-flex justify-content-between">
            <div className="font-22">Latest Video</div>
            <button className="btn btn-main font-13 wei-500 px-0 border-0">VIEW MORE VIDEOS</button>
          </div>
          <div className="row">
            {videoData.map((data, ind) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={ind}>
                <VideoCatalog propsData={{ ...data, parent: 'story' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
