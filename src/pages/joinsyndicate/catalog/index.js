import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import Slider from '@mui/material/Slider';

import CatalogExplorer from './explorer';
import catalogs from '../../../assets/json/catalogs.json';
import { numberWithCommas } from '../../../utils/utils';
import './catalog.css';

function SyndicateCatalog() {
    const history = useHistory();
    const { name } = useParams();
    const [locationFilter, setLocationFilter] = useState(false);
    const [firstFilter, setFirstFilter] = useState(false);
    const [secondFilter, setSecondFilter] = useState(false);
    const [catalog, setCatalog] = useState();
    const [priceRange, setPriceRange] = useState([0, 100000]);

    const handleChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    useEffect(() => {
        const data = catalogs.filter((val) => {
            return val.name.toLowerCase() === name;
        });
        if (data.length > 0) {
            setCatalog(data[0]);
        }
    }, [name]);

    return (
        <div className="container">
            <div className="row mb-3">
                <div className='col-sm-12 col-md-12 mt-2'>
                    <div className="font-14 justify-start gap-2">
                        <Link to={`/join-syndicate`} className="no-underline site-color">Syndicate Catalog</Link>
                        <span>:</span>
                        <span>{catalog?.name} Catalog</span>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 mt-4">
                    <div className="x-font7">{catalog?.name}</div>
                    <div className="x-font2">
                        {catalog?.description} {catalog?.description} {catalog?.description}
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

            <div className='row mt-1 mo-dis-none'>
                <div className='col-sm-12 col-md-3 mt-5'>
                    <Collapsible
                        transitionTime={200}
                        open={true}
                        trigger={
                            <div className='justify-s mt-4' onClick={() => { setLocationFilter(!locationFilter) }}>
                                <span className='x-font4 site-color'>Location</span>
                                <div className='justify-start'>
                                    {locationFilter ?
                                        <BsPlusLg className='bule-color' />
                                        :
                                        <AiOutlineMinus className='bule-color' />
                                    }
                                </div>
                            </div>
                        }>
                        <div className="mt-2 justify-s">
                            <span className='mr-1'>Within:</span>
                            <select className="x-input1-30 mobile-width30 select-location">
                                <option value="50">50 miles</option>
                                <option value="100">100 miles</option>
                                <option value="500">500 miles</option>
                                <option value="1000">1000 miles</option>
                            </select>
                            <span className='mr-4'>of</span>
                        </div>
                        <div className="mt-2 justify-start">
                            <input className="x-input1-30 mobile-width30 input-zipcode" placeholder='Zip code' />
                            <span className='font-16 wei-500 ml-3'>OR</span>
                        </div>
                        <div className="mt-2 justify-s gap-2">
                            <input className="x-input1-30 mobile-width30 input-city" placeholder='City' />
                            <select className="x-input1-30 mobile-width30 select-state" defaultValue={'0'}>
                                <option value="0" disabled>State</option>
                                <option value="1">Test 1</option>
                                <option value="2">Test 2</option>
                                <option value="3">Test 3</option>
                            </select>
                        </div>
                    </Collapsible>
                    <hr className='mt-4' />
                    <Collapsible
                        transitionTime={200}
                        open={true}
                        trigger={
                            <div className='justify-s mt-4' onClick={() => { setLocationFilter(!locationFilter) }}>
                                <span className='x-font4 site-color'>Price Range</span>
                                <div className='justify-start'>
                                    {locationFilter ?
                                        <BsPlusLg className='bule-color' />
                                        :
                                        <AiOutlineMinus className='bule-color' />
                                    }
                                </div>
                            </div>
                        }>
                        <div className="my-3 justify-start fd-c">
                            <span className='w-100 text-left'>${numberWithCommas(priceRange[0])} - ${numberWithCommas(priceRange[1])} USD</span>
                            <div className='price-range'>
                                <Slider
                                    getAriaLabel={() => 'range'}
                                    disableSwap={true}
                                    value={priceRange}
                                    min={0}
                                    max={100000}
                                    step={100}
                                    onChange={handleChange}
                                    valueLabelDisplay="off"
                                />
                            </div>
                        </div>
                    </Collapsible>
                    <hr className='mt-2 mb-2' />
                    <Collapsible
                        transitionTime={200}
                        open={true}
                        trigger={
                            <div className='justify-s mt-2' onClick={() => { setFirstFilter(!firstFilter) }}>
                                <span className='x-font4 site-color'>Filter Type One</span>
                                <div className='justify-start'>
                                    {firstFilter ?
                                        <AiOutlineMinus className='bule-color' />
                                        :
                                        <BsPlusLg className='bule-color' />
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
                            <span className="x-font5 ml-2">Filter Option Two</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option Three</span>
                        </div>
                    </Collapsible>
                    <hr className='mt-2' />
                    <Collapsible
                        transitionTime={200}
                        trigger={
                            <div className='justify-s' onClick={() => { setSecondFilter(!secondFilter) }}>
                                <span className='x-font4 site-color'>Filter Type Two</span>
                                <div className='justify-start'>
                                    {secondFilter ?
                                        <AiOutlineMinus className='bule-color' />
                                        :
                                        <BsPlusLg className='bule-color' />

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
                            <span className="x-font5 ml-2">Filter Option Two</span>
                        </div>
                        <div className="w80 mobile-width100 align-center mb-3">
                            <input type="checkbox" className="checkbox-agree" name="vehicle1" value="Bike" />
                            <span className="x-font5 ml-2">Filter Option Three</span>
                        </div>
                    </Collapsible>
                </div>
                <div className='col-sm-12 col-md-9 mt-5'>
                    <CatalogExplorer catalog={catalog} />
                </div>
            </div>
        </div>
    )
}

export default SyndicateCatalog;