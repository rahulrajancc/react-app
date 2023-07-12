import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './topbar.css'
import Feedpost from '../feed/feedpost';

class Topbar extends Component {
    render() {
        return (
            <div className='Topbar_compounet'>
                {/* <div className="topbar_Left01"><h1 style={{color:'purple'}}>TechBoy</h1></div> */}
                <div className="topbar_Left"><h1 style={{color:'purple'}}>TechBoy</h1></div>
                <div className="topbar_center">
                    <img src={require('../../assest/icons8-search-50.png')} alt='Profile pic'/>
                    <input type="search" name="Search" id="Main_Search" placeholder='Search for people,post video' />
                </div>
                <div className="topbar_right">
                    <a href='/home'><img src={require('../../assest/ihome.png')}/><span style={{color:'red'}}><sup>1</sup></span></a>
                    
                    <a href='/message'><img src={require('../../assest/icons8-message-50.png')}/><span style={{color:'red'}}><sup>1</sup></span></a>
                    <div id="Add"><a><img src={require('../../assest/Add.png')}/></a></div>
                    <a href=''><img src={require('../../assest/icons8-bell-50.png')}/><span style={{color:'red'}}><sup>1</sup></span></a></div>
                    <div className="Profile_pic"><a href='#'><img src={require('../../assest/testaccount.png')}/></a></div>
            
            </div>
        );
    }
}

export default Topbar;
