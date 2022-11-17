import { Link } from 'react-router-dom';

export default function JoinSyndicateCatalog({ propsData }) {
  const name = propsData.name.length > 27 ? propsData.name?.substring(0, 27) + '...' : propsData.name;
  // const description =
  //   propsData.description.length > 74 ? propsData.description?.substring(0, 74) + '...' : propsData.description;
  const url = '/images/catalog/' + propsData.image;

  return (
    <div>
      <div className="justify-start mo-dis-none" style={{ height: '10rem', marginBottom: '40px' }}>
        <div className="h-100 ">
          <img src={url} className="catalog-image" alt={propsData.parent} />
        </div>
        <div className="desktop-ml-4 w50 mobile-width100 h-100">
          <h3 className="font-22 wei-400 mobile-width100 ls-1">{name}</h3>
          <div className="font-14 mobile-width100 ls-1 mb-2">{propsData.description} {propsData.description}</div>
          <Link to = {`/syndicate/${name.toLowerCase()}`} >More Info</Link>
        </div>
      </div>
      <div className="mo-dis-show" style={{marginBottom: '40px' }}>
        <div className="d-block">
          <img src={url} alt={propsData.parent} width = "100%"/>
        </div>
        <div className="desktop-ml-4 mobile-width100 h-100">
          <h3 className="font-22 wei-400 mobile-width100 ls-1">{name}</h3>
          <div className="font-14 mobile-width100 ls-1 mb-2">{propsData.description} {propsData.description}</div>
          <Link to = {`/syndicate/${name.toLowerCase()}`} className = "x-font17">More Info</Link>
        </div>
      </div>
    </div>
   
  );
}
