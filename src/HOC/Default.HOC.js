//Transform components into higher order components
//Adding additional functionalities to existing components
//[Routing prevents page reloading]

import React from "react";
import { Route } from "react-router-dom";

//layouts
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({component: Component, ...rest}) => {
    //components
    //props -> path exact
    return (
       <>
       <Route
       {...rest}
     
       component = {(props) => (
         <DefaultLayout>
             <Component {...props} />
         </DefaultLayout>
       )       
    }
       />
       </>
    );
};

export default DefaultHOC;