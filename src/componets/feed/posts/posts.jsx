import React, { Component } from 'react';
import './posts.css';
import { useState,useEffect } from 'react';
import { storage } from '../../../firebase';
import { ref ,uploadBytes, listAll, getDownloadURL} from 'firebase/storage';



const Posts = () => {
    const [Imglist, setImglist] = useState([]);
    const imgreflist=ref(storage,"image/")


    useEffect(() =>{
        listAll(imgreflist).then((response) =>{
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) =>{
                    setImglist((prev) => [...prev,url]);
                })
                
            });
        })
    },[]);
    return (
        <div className='Post-section'><section className="post_comp"><input type="image" src={require('../../../assest/testaccount.png')} alt="" />
                <span id='Username'>Rahul Rajan</span><br />
                <span className='Added_Date' style={{color:'purple'}}>03/07/2023</span></section>
                
                    {Imglist.map((url) =>{
                   return <><section className="post_img">
                    
                     <img src={url} height='40%' width='450vw' alt="" />
                    </section>
                    <section className="like_share_com">
                    <img src={require('../../../assest/icons8-like-50.png')} alt="like_pic" className="like" />
                    <img src={require('../../../assest/icons8-comment-50.png')} alt="like_pic" className="like" />
                    <img src={require('../../../assest/icons8-share-50.png')} alt="like_pic" className="like" />
                </section>
                    </>
                })}
               
            </div>
    );
}

export default Posts;

