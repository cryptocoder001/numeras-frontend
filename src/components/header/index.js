import React, {useState,useEffect, useRef} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { Fade as Hamburger } from 'hamburger-react'
import { BsSearch } from "react-icons/bs";
import { useApiContext } from '../../contexts';
import MobileDropDown from './mobileDropdown';
import './header.css';

export default function Header() {
  const history = useHistory();
  const ref = useRef();
  const ref1 = useRef();
  const {active, deactivate} = useWeb3React();
  const [state, { logout }] = useApiContext();

  const [isOpen, setOpen] = useState(false);
  const [isSearchBar, setSearchBar] = useState(false);

  const closeModal = () =>{
    setOpen(false);
  }

  const handleLogout = async () =>{
    await logout();
    history.push("/signin");
  }

  const openSearCh = () =>{
    setOpen(false);
    setSearchBar(!isSearchBar);
  }

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isSearchBar && ref.current && !ref.current.contains(e.target) &&!ref1.current.contains(e.target) ) {
        setSearchBar(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isSearchBar])

  return (
    <>
      <div className='mo-dis-desktop fixed-top navbar-light bg-light px-3'>
        <div className="px-0 x-box-shadow">
          <div className='row p-main'>
            <div className='col-12 px-0'>
              <nav className='navbar-dark px-3 py-0 bi-hand-index jc-fe'>
                {/* <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="container justify-s fd-r mt-1" >
                  <div className="justify-s fd-ri navbar-nav ms-auto">
                      {state.isLogin && active ? (
                          <button className="nav-item nav-link font-13 wei-500 px-3 active bg-transparent border-0 x-linkColor" onClick={handleLogout}>
                            LOG OUT
                          </button>
                        )
                        : active==true ?
                        (<div className=''>
                          <button className="nav-item nav-link font-13 wei-500 px-3 x-backLinkColor1 white rounded-1 border-0" onClick = {()=>{deactivate()}}>
                            Disconnect
                          </button>
                        </div>
                        )
                        :(
                          <>
                            <div className=''>
                              <Link to="/signin" className="nav-item nav-link font-13 wei-500 px-3 active x-linkColor">
                                LOG IN
                              </Link>
                            </div>
                            <div className=''>
                              <Link to="/signup" className="nav-item nav-link font-13 wei-500 px-3 x-backLinkColor1 white rounded-1">
                                BECOME AN INSIDER
                              </Link>
                            </div>
                          </>
                        )

                      }
                    
                    
                  </div>
                </div>
              </nav>
              <div className='d-block'>
                <Link to="/" className="navbar-brand float-left">
                  <img src="/logo/logo1.png" height="28" alt="CoolBrand" />
                </Link>
              </div>
            </div>
          </div>
          <div className='p-main2'>
            <div className='row'>
              <div className='col-12 justify-s px-0'>
                <ul className='navbar-nav h-100'>
                  <li className="nav-item h-100 justify-s x-font15">
                    <Link to="/create-syndicate" className="pb-0 ls-1">
                      Create&nbsp;Syndicate
                    </Link>
                  </li>
                  <li className='nav-item justify-s x-font15'>
                    <Link to="/join-syndicate" className=" px-3 pb-0 ls-1">
                      Join&nbsp;Syndicate
                    </Link>
                  </li>
                  <li className='nav-item justify-s x-font15'>
                    <Link to="#" className="px-3 pb-0 ls-1">
                      Discover
                    </Link>
                  </li>
                  <li className='nav-item justify-s x-font15'>
                    <Link to="#" className="px-3 pb-0 ls-1">
                      Learn More
                    </Link>
                  </li>
                </ul>
                <div className="navbar-nav ms-auto">
                  <div className="input-group mb-3 text-black  font-15 wei-500 px-0 pb-0 mt-3 border-bottom">
                    <input type="text" className="mo-dis-none form-control font-15 wei-500 x-search" placeholder="Looking for something?" />
                    <button className="btn x-btn-search" type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        className="bi bi-search x-search-i"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="mo-dis-show w100 fixed-top2 bg-light">
        <div className="d-flex text-center justify-content-around align-items-center">
          <Hamburger color="#0EA3D9" toggled={isOpen} toggle={setOpen} />
          <Link to="/" onClick = {closeModal} className="">
            <img src="/logo/logo1.png" height="28" alt="CoolBrand" />
          </Link>
          <span onClick={openSearCh} ref = {ref1}><BsSearch size = "33px" color = "#0EA3D9"/></span>
        </div>
        {
          isSearchBar?(
            <input ref = {ref} className='x-input2' placeholder='Looking for something?'/>
          ):<></>
        }
        {
          isOpen?(
            <MobileDropDown closeModal = {closeModal}/>
          ):<></>
        }
      </div>
    </>
  );
}
