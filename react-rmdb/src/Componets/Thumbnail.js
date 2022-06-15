import React from 'react'
import {Image} from './Componets_Styles/thumbnail.styles'


const Thumbnail = ({image, movie_id, click_able}) => {
    return (
        <div>
            <Image src={image} alt = 'movie-image' />
        </div>
    );
}


export default Thumbnail