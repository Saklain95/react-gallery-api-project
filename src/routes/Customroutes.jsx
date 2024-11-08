import {Routes, Route} from 'react-router-dom';
import Gallery from '../components/gallery/Gallery';
import GalleryDetails from '../components/galleryDetails/GalleryDetails';

function CustomRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={ <Gallery/>} />
                <Route path="/photos/:id" element={ <GalleryDetails/> } />
            </Routes>
        </div>
    );
}

export default CustomRoutes;