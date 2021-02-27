import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Carousel from './components/Carousel';
import Navigation from './components/Navigation';
import * as sessionActions from './store/session';


function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);


    return isLoaded && (
        <>
            <Navigation isLoaded={isLoaded} />
            {/* {isLoaded && (

            )} */}
            <Carousel />
        </>
    );
}

export default App;
