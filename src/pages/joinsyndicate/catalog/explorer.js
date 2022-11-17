import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import SlickImages from '../../../components/global/slickImages';

const Explorer = styled.div`
  display: ${props => props.sort === 'list' ? 'flex' : 'grid'};
  flex-direction: column;
  grid-template-columns: ${props => props.sort === 'grid' ? 'repeat(3, 30%)' : 'none'};
  justify-content: space-between;
`;

const CatalogItem = styled.div`
  margin-bottom: ${props => props.sort === 'list' ? '40px' : '0'};
  display: flex;
  flex-direction: ${props => props.sort === 'list' ? 'row' : 'column'};
  height: ${props => props.sort === 'list' ? '10rem' : '100%'};
`;

const CatalogItemMobile = styled.div`
  margin-bottom: ${props => props.sort === 'list' ? '40px' : '0'};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Images = styled.div`
  display: inline-block;
  width: ${props => props.sort === 'list' ? '220px' : '100%'};
  height: ${props => props.sort === 'list' ? '160px' : '100%'};
`;

const ImagesMobile = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

export default function CatalogExplorer({ catalog }) {
  const history = useHistory();
  const [sortMode, setSortMode] = useState('list');
  return (
    <div>
      <div className='mo-dis-desktop'>
        <div className='mb-2 justify jc-fe'>
          <button className={sortMode === 'list' ? "btn-sort-catalog selected" : "btn-sort-catalog"} onClick={() => setSortMode('list')}>
            <i className="fa-solid fa-list font-22"></i>
          </button>
          <button className={sortMode === 'grid' ? "btn-sort-catalog selected" : "btn-sort-catalog"} onClick={() => setSortMode('grid')}>
            <i className="fa-solid fa-grid-2 font-22"></i>
          </button>
        </div>
        <Explorer sort={sortMode}>
          {
            catalog?.items.map((item, index) => (
              <CatalogItem sort={sortMode} key={index}>
                <Images sort={sortMode}>
                  <SlickImages propsData={item.images} />
                </Images>
                <div className={`mobile-width100 h-100 ${(sortMode === 'list') ? 'desktop-ml-4 w50' : 'w100 mt-3'}`}>
                  <h3 className={` x-font13 wei-400 mobile-width100 cu-po ls-1 ${(sortMode === 'list') ? 'font-22' : 'font-20'}`} onClick = {()=>history.push(`/syndicate/${catalog.name.toLowerCase()}/${index}`)}>{item.name}</h3>
                  <div className="font-14 mobile-width100 ls-1 mb-3">{item.description} {item.description}</div>
                </div>
              </CatalogItem>
            ))
          }
        </Explorer>
        {catalog?.items.length === 0 && (
          <div className='justify mt-5'>
            <span className='font-20'>No data to show</span>
          </div>
        )}
      </div>
      <div className='mo-dis-show'>
        <Explorer sort={sortMode}>
          {
            catalog?.items.map((item, index) => (
              <CatalogItemMobile sort={sortMode} key={index}>
                <ImagesMobile sort={sortMode}>
                  <SlickImages propsData={item.images} />
                </ImagesMobile>
                <div className="mobile-width100 h-100 desktop-ml-4 w100">
                  <h3 className={` x-font13 wei-400 mobile-width100 cu-po ls-1 ${(sortMode === 'list') ? 'font-22' : 'font-20'}`} onClick = {()=>history.push(`/syndicate/${catalog.name.toLowerCase()}/${index}`)}>{item.name}</h3>
                  <div className="font-14 mobile-width100 ls-1 mb-3">{item.description} {item.description}</div>
                </div>
              </CatalogItemMobile>
            ))
          }
        </Explorer>
        {catalog?.items.length === 0 && (
          <div className='justify mt-5'>
            <span className='font-20'>No data to show</span>
          </div>
        )}
      </div>
    </div>
    
  );
}
