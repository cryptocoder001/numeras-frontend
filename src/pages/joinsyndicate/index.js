import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

import JoinSyndicateCatalog from '../../components/global/joinsyndicatecatalog';
import catalogs from '../../assets/json/catalogs.json';
import './joinsyndicate.css';

// import { useApiContext } from '../../contexts';

function Joinsyndicate() {
    const history = useHistory();
    // const { getAllSyndicates } = useApiContext();
    // const [joinsyndData, setJoinSyndData] = useState([]);
    const [firstFilter, setFirstFilter] = useState(false);
    const [secondFilter, setSecondFilter] = useState(false);

    useEffect(() => {
        (async () => {
            // const syndicates = await getAllSyndicates();
            // setJoinSyndData(syndicates);
        })()
    }, [])

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-sm-12 col-md-8 mt-5">
                    <div className="x-font7">Syndicate Catalog</div>
                    <div className="x-font2">
                        Browse the catalog suspendisse rutrum efficitur velit et convallis. Curabitur a tellus congue, consectetur odio facilisis ultrices velit. Duis a nisl est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a nisl est. Suspendisse rutrum efficitur velit et convallis.
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mt-5 tc mobile-text-left">
                    <div className="mt-4">
                        <Link to="" className="no-underline x-font3 mt-5">BECOME A MEMBER</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="" className="no-underline x-font3 mt-5">I'M ALREADY A MEMBER</Link>
                    </div>
                </div>
            </div>
            <div className='mobile-line'></div>

            <div className='row mt-1'>
                <div className='col-sm-12 col-md-3 mt-5 mo-dis-desktop'>
                    <Collapsible
                        transitionTime={200}
                        open={true}
                        trigger={
                            <div className='justify-s mt-4' onClick={() => { setFirstFilter(!firstFilter) }}>
                                <span className='x-font4 site-color'>Filter Type One</span>
                                <div className='justify-start'>
                                    {firstFilter ?
                                        <BsPlusLg className='bule-color' />
                                        :
                                        <AiOutlineMinus className='bule-color' />
                                    }
                                </div>
                            </div>
                        }>
                        <div className='mt-4'></div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                    </Collapsible>
                    <div className='line'></div>
                    <Collapsible
                        transitionTime={200}
                        open = {true}
                        trigger={
                            <div className='justify-s mt-4' onClick={() => { setSecondFilter(!secondFilter) }}>
                                <span className='x-font4 site-color'>Filter Type Two</span>
                                <div className='justify-start'>
                                    {secondFilter ?
                                        <BsPlusLg className='bule-color' />
                                        :
                                        <AiOutlineMinus className='bule-color' />

                                    }
                                </div>
                            </div>
                        }>
                        <div className='mt-4'></div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                    </Collapsible>

                </div>
                <div className='w50 mt-5 mo-dis-show'>
                    <Collapsible
                        transitionTime={200}
                        open={true}
                        trigger={
                            <div className='justify-s mt-4' onClick={() => { setFirstFilter(!firstFilter) }}>
                                <span className='x-font4 site-color'>Filter Type One</span>
                                <div className='justify-start'>
                                    {firstFilter ?
                                        <BsPlusLg className='bule-color' />
                                        :
                                        <AiOutlineMinus className='bule-color' />
                                    }
                                </div>
                            </div>
                        }>
                        <div className='mt-4'></div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                    </Collapsible>
                </div>
                <div className='w50 mt-5 mo-dis-show'>
                    <Collapsible
                        transitionTime={200}
                        open = {true}
                        trigger={
                            <div className='justify-s mt-4' onClick={() => { setSecondFilter(!secondFilter) }}>
                                <span className='x-font4 site-color'>Filter Type Two</span>
                                <div className='justify-start'>
                                    {secondFilter ?
                                        <BsPlusLg className='bule-color' />
                                        :
                                        <AiOutlineMinus className='bule-color' />

                                    }
                                </div>
                            </div>
                        }>
                        <div className='mt-4'></div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option One</span>
                        </div>
                    </Collapsible>
                </div>
                <div className='col-sm-12 col-md-9 mt-5'>
                    <div className="row">
                        {
                            catalogs.length > 0 ?
                                catalogs.map((data, ind) => (
                                    <div className="col-12" key={ind}>
                                        <JoinSyndicateCatalog propsData={{ ...data, parent: 'syndicate' }} />
                                    </div>
                                ))
                                :
                                <></>
                        }
                    </div>
                </div>
            </div>

            <div className='mo-dis-show'>

            </div>

        </div>
    )
}

export default Joinsyndicate;