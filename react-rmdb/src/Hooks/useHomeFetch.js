import { useState, useEffect, useRef } from 'react'
import API from '../API';


const initState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
}



export const useHomeFetch = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loadMore, setLoadMore] = useState(false);

    const fetchMovies = async (page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);

            // console.log(...movies.results);

            setState(prev => ({

                // spread operator -  ...
                ...movies,
                results:

                    // is only one page append all results from API to movies array, else append to previous state 
                    // [...prev.results , ...movies.results] this means spread previous state and append current state to it. 
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))

        } catch (error) {
            setError(true);
        }
        setLoading(false)
    };


    // initail render and search
    useEffect(() => {
        // setSearchTerm(initState);
        fetchMovies(1, searchTerm);
    }, [searchTerm])

    //load more
    useEffect(() => {
        if (!loadMore) {
            return;
        }
        fetchMovies(state.page + 1, searchTerm)
        setLoadMore(false);
    }, [loadMore, searchTerm, state.page])

    return { state, loading, error, searchTerm, setSearchTerm, setLoadMore };
}