import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './galleryDetails.css';

function GalleryDetails(){
    const {id} = useParams();
    console.log(id);
    const [photo,setPhoto]=useState('');
    
    async function downloadImages() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);      
        console.log(response);
        setPhoto({
            image:response.data.photo.url,
            title:response.data.photo.title,
            description:response.data.photo.description,
            user:response.data.photo.user,
        })
    } 

    useEffect(()=>{
        downloadImages();
    },[])


    return(
        <div className='single-image-wrapper'>
               <img src={photo.image}/>
               <h1>{photo.title}</h1>
               <h5>{photo.description}</h5>
               <p>Published by user {photo.user}</p>
        </div>
    );
}

export default GalleryDetails;