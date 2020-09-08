import React from 'react'
import './Home.css'
import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import {Link}  from 'react-router-dom'
import Search from '../components/Search';

function Home() {
    return (
        <div className='home'>
           
            <div className="home__header">
                <div className="home__left">
                 <Link to='/about'>About</Link>
                 <Link to='/store'>Store</Link>
                </div>
                <div className="home__right">
                <Link to='/gmail'>Gmail</Link>
                 <Link to='/images'>Images</Link>
                  <AppsIcon/>
                  <Avatar/>  
                </div>
            </div>
            <div className="home__body">
              <img
               src='https://www.google.dk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
              alt="google"
              />
              <div className="home_inputContainer">
                  <Search/>
              </div>
            </div>
        </div>
    )
}

export default Home
