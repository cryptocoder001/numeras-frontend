import './style.css';

import Home1 from '../../assets/svg/home-top.webp';

import Describe from '../../components/home/describe';
import Syndicates from '../../components/home/syndicates';
import StartSyndicate from '../../components/home/startSyndicate';
import Story from '../../components/home/story';
import Video from '../../components/home/video';
import AutoMobile from '../../components/home/autoMobile';
import Equestrian from '../../components/home/equestrian';
import Watch from '../../components/home/watch';

const Home = () => {
  return (
    <>
      <div className="container position-relative">
        <div className='x-font7 text-center mb-5 mt-5'>
          Fractionalize what you own. Own a piece of what you want.
        </div>
        <img width="100%" src={Home1} alt="home1" />
      </div>
      <div className="container p-main1">
        <Describe />
        <Syndicates />
        <StartSyndicate />
      </div>      
      <Video />
      <div className="container p-main1">
        <AutoMobile />
        <Equestrian />
        <Watch />
        <Story />
      </div>
    </>
  );
};

export default Home;
