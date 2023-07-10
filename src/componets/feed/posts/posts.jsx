import React, { Component } from 'react';
import './posts.css';

class Posts extends Component {
    render() {
        return (
            <div className='Post-section'><section className="post_comp"><input type="image" src={require('../../../assest/testaccount.png')} alt="" />
                <span id='Username'>Rahul Rajan</span><br />
                <span className='Added_Date' style={{color:'purple'}}>03/07/2023</span></section>
                
                <section className="post_img">
                    <input type="image" src={require('../../../assest/post.jpg')} height='40%' width='500vw' alt="" />
                </section>
                <section className="like_share_com">
                    <img src={require('../../../assest/icons8-like-50.png')} alt="like_pic" className="like" />
                    <img src={require('../../../assest/icons8-comment-50.png')} alt="like_pic" className="like" />
                    <img src={require('../../../assest/icons8-share-50.png')} alt="like_pic" className="like" />
                </section>
            </div>
        );
    }
}

export default Posts;
