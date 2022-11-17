import { Link } from 'react-router-dom';


export default function VideoCatalog({ propsData }) {
  const title = propsData.title;
  const url = '/images/' + propsData.parent + '/' + propsData.image;

  return (
    <div className="position-relative py-1">
      <img className="mb-2" src={url} width="100%" alt={propsData.parent} />
      <div className='video-play'>
        <i className="fa-solid fa-play"></i>
      </div>
      <Link to="#" className="btn-main font-15 wei-500 text-decoration-none text-start my-3 px-0 mt-3">
        {title}
      </Link>
    </div>
  );
}
