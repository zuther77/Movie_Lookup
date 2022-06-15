import React , {useState, useEffect, useRef} from 'react'
import { Wrappper, Content } from './Componets_Styles/searchbar.styles'

import searchIcon from '../images/search-icon.svg'


const SearchBar = ( {setSearchTerm} ) => {

    const [state, setState] = useState('');
    const initial = useRef(true);



    useEffect( () => {
        // for inital render so it wont search empty search term, ie no API call is made initally.
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout( () => {
            setSearchTerm(state);
        } , 500)

        return () => clearTimeout(timer)

    } , [setSearchTerm, state] )


    return (
        <Wrappper>
            <Content>
                <img src = {searchIcon} alt = 'search-icon' />
                <input 
                type='text' 
                placeholder='Search Movie' 
                onChange = { event => setState(event.currentTarget.value) }
                value = {state}
                />
            </Content>
        </Wrappper>
    );

} 



export default SearchBar