import {Link} from 'react-router-dom';

function GalleryListDisplay({image,id}){
    return(
        <div>
            <Link to={`/photos/${id}`} >
            <img src={image}/>
            </Link>
        </div>
    );
}

export default GalleryListDisplay;