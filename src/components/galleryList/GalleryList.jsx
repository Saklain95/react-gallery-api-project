import { useState, useEffect } from "react";
import './galleryList.css';
import axios from 'axios';
import GalleryListDisplay from "../galleryListDisplay/galleryListDisplay";


function GalleryList() {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [url, seturl] = useState('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');

    async function downloadPhotos() {
        setIsLoading(true);
        const response = await axios.get(url);
        console.log(response);
        const photosResult = response.data.photos;
        console.log(photosResult);
        setPhotos(photosResult);
        setIsLoading(false);
    }

    useEffect(() => {
        downloadPhotos();
    }, [url])

    return (
        <div className="gl-wrapper">
            {isLoading ? (
                <h1>Loading the data, please wait...</h1>
            ) : (
                <div className="gallery">
                    {photos.map(p => (
                        <GalleryListDisplay image={p.url} key={p.id} id={p.id} />
                    ))}
                </div>
            )}
        </div>
    );

}

export default GalleryList;