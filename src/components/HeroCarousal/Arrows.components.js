import React from "react";

export const NextArrow = (props) => {
  // const {className, style, onClick} = props;
   return (
       <>
       <div 
         className={props.className}
         style={{...props.style, backgroundColor: "black", width:56 ,height:56, display:"flex",alignItems:"center",
                 justifyContent: "center", opacity:0.5, position:"absolute"
               }}
         onClick={props.onClick}
       />
       </>
   )
};

export const PrevArrow = (props) => {
    return (
        <>
        <div 
        className={props.className}
        style={{...props.style, backgroundColor: "black" , width:56 ,height:56,display:"flex",alignItems:"center",
               justifyContent: "center", opacity:0.5, position:"absolute"
                }}
        onClick={props.onClick}
         />
        </>
    )
} ;