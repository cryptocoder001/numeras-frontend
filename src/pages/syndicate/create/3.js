import React from 'react';
import { useHistory } from 'react-router-dom';
import Stepper from '../../../components/create/stepper';
import CategoryCard from '../../../components/create/categroyCard';
import CreateCategoryCard from '../../../components/create/createCategoryCard';
import cate1 from '../../../assets/images/home1.png'



function Create3() {
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
              step="2"
              path="/create-syndicate"
              steps={['Personal info', 'Syndicate info', 'Syndicate Category', 'Create Prospectus', 'Upload Media']}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className='x-font11 mt-3'>
              Syndicate Category
          </div>
          <div className="x-font5 mt-3 italic">
            Select the category that best descibes your syndicate.
          </div>
          <div className="mt-4 card-grid-container">
            <div className="">
              <CategoryCard image="/images/catalog/1.png" />
              <p className='x-font4 wei-400'>Art</p>
            </div>
            <div className="" >
              <CategoryCard image="/images/catalog/2.png" />
              <p className='x-font4 wei-400'>Automobiles</p>
            </div>
            <div className="" >
              <CategoryCard image="/images/catalog/3.png" />
              <p className='x-font4 wei-400'>Culture</p>
            </div>
            <div className="" >
              <CategoryCard image="/images/catalog/4.png" />
              <p className='x-font4 wei-400'>Energy</p>
            </div>
            <div className="" >
              <CategoryCard image="/images/catalog/5.png" />
              <p className='x-font4 wei-400'>Equestrian</p>
            </div>
            <div className="" >
              <CategoryCard image="/images/catalog/6.png" />
              <p className='x-font4 wei-400'>Executives</p>
            </div>
            <div className="" >
              <CategoryCard image="/images/catalog/7.png" />
              <p className='x-font4 wei-400'>Jewelry</p>
            </div>
            <div className="" >
              <CategoryCard image="/images/catalog/8.png" />
              <p className='x-font4 wei-400'>Real Estate</p>
            </div>
            <div className="" >
              <CategoryCard image="/images/catalog/9.png" />
              <p className='x-font4 wei-400'>Watches</p>
            </div>
            <div className="" >
              <CategoryCard image="/images/catalog/10.png" />
              <p className='x-font4 wei-400'>Yachts</p>
            </div>
            <div className="" >
              <CreateCategoryCard image={cate1} />
            </div>
          </div>
          <div className="mt-5">
            <button className="x-button8 x-font3" onClick={() => history.push("/create-syndicate/4")}>SELECT AND CONTINUE</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Create3;