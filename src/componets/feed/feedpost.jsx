import React, { Component } from 'react';
import './feedpost.css';
import Posts from './posts/posts';
class Feedpost extends Component {
    render() {
        return (
            <div className='feedpost_cls'> 
                <div className="post">
                    <input type="text" name="Post" id="Post_things" />
                    <input type="file" name="Add file to share" id="Add_file" />
                  
                </div ><div className="post_pla">< Posts />< Posts />< Posts /></div>
                < Posts />< Posts />< Posts />
            </div>
        );
    }
}

export default Feedpost;
