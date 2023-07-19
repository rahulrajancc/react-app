import React, { Component } from 'react';
import './feedpost.css';

import Posts from './posts/posts';
import { useState,useEffect } from 'react';
import { storage } from '../../firebase';
import { ref ,uploadBytes, listAll, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid'



const Feedpost = () => {
    const [Imgupload,setImgupload]=useState(null)
    const imgupload=() =>{
    if (Imgupload==null){return;}
    const imgageref=ref(storage,`image/${Imgupload.name +v4() }`)
    uploadBytes(imgageref,Imgupload).then(() =>{
        alert('have')
    })

}


   return (
        <div className='feedpost_cls'> 
        <div className="post">
            <input type="text" name="Post" id="Post_things" />
            <input type="file" name="Add file to share" id="Add_file" onChange={(event)=>{setImgupload(event.target.files[0])}} />
            <input type="submit" name="submitPost" id="Post_submit" onClick={imgupload} />
          
        
        </div ><div className="post_pla">< Posts /></div>
        
    </div>
    );
}

export default Feedpost;

