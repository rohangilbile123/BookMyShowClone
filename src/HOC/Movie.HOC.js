//Transform components into higher order components
//Adding additional functionalities to existing components
//[Routing prevents page reloading]

import React from "react";
import { Route } from "react-router-dom";

//layouts
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({component: Component, ...rest}) => {
    //components
    //props -> path exact
    return (
       <>
       <Route
       {...rest}
     
       component = {(props) => (
         <MovieLayout>
             <Component {...props} />
         </MovieLayout>
       )       
    }
       />
       </>
    );
};

export default MovieHOC;