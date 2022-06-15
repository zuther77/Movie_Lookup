import React from 'react'

//import poster from API call
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';


//Import componets
import HeroImage from './HeroImg';
import Grid from './Grid';
import Thumbnail from './Thumbnail';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';


//Import Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';


// No image import
import NoImg from '../images/no_image.jpg';





const Home = () => {

    const {state , loading, error, searchTerm , setSearchTerm, setLoadMore} = useHomeFetch();

    if (error) {
        return <div>Something went Wrong</div>;
    }

    return (
        <>
        {!searchTerm &&  state.results[0] ? 
        <HeroImage 
        image = { `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}` } 
        title = {state.results[0].original_title}
        text = {state.results[0].overview  } /> 
        : null }

        <SearchBar  setSearchTerm = {setSearchTerm} />
        <Grid header={ searchTerm ? 'Search Result' : 'Popular Movies'} >
            { state.results.map( movie => (
                <Thumbnail 
                    key = {movie.id}
                    click_able = {true}
                    image = {
                        movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImg
                    }
                    movie_id = {movie.id}
                />
            ) )   }
        </Grid>

        { loading && <Spinner/> }
        { state.page < state.total_pages && !loading && (
            <Button text='Load More' callback={() => setLoadMore(true)  }/>
        )}       
        </>
    ); 
}


export default Home;