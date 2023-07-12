import React, { Component } from 'react';
import Feedpost from '../../componets/feed/feedpost';
import './message.css'

class Message extends Component {
    render() {
        return (
            <div className='feedpost'>
                <h1 >Messages</h1>
                <div className="message_item">
                    
                <div className="message_cont">
                    <img src={require('../../assest/testaccount.png')} alt="" className='profile_mess' /><span className='mess_name' >RahulRajan</span>
                </div>

                <div className="messages_scr">
                <div className="message_top">
                <img src={require('../../assest/testaccount.png')} alt="" className='profile_mess' /><span className='mess_name' >RahulRajan</span><br /><span className='mess_name'>Date:30/07/2023</span>

                </div>
                <div className="message_center">

                </div>
                <div className="message_box">
                <img src={require('../../assest/chat.png')} alt=""  />
                    <input type="text" name="Messaging Tab" id="message_tab" />
                <img src={require('../../assest/sent.png')} alt=""  />
                <img src={require('../../assest/mic.png')} alt=""  />
                </div>

                </div>
                </div>
            </div>
        );
    }
}

export default Message;
