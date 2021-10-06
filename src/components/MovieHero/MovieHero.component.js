import React from "react";
import {BiShareAlt,BiChevronRight, BiHeart} from "react-icons/bi";

const launchRazorPay = () => {
    let options= {
        key: "rzp_test_liaCm2K08VdxXR",
        amount: 500*100,
        currency: "INR",
        name: "Book My Show Clone",
        description : "Movie Purchase on Rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert( "Payment Done" )
        },
        theme: {color: "#c4242d"}
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};


const MovieHero = () => {

    return(
        <>
        {/* 180vw means the calculate the full width of the screen */}
        <div className="md:hidden" style={{height:"calc(180vw)"}} >
            <img 
                src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                alt="Poster" />



        </div>


        <div className="hidden md:block  lg:hidden" >
        <img 
                src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                alt="Poster" />



</div>


        
        <div className=" relative hidden lg:block" style={{height:"36rem"}}>


            <div className="absolute h-full w-full z-10 " style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}} />
           
              <div className="flex flex-col z-30">
                <img 
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                alt="Poster"
                className="absolute z-30 w-64 h-96 left-16 top-10"
                />
                <div className=" z-30 absolute left-80 top-10 p-7 align-center flex flex-col gap-3 ">
                    <div className="  text-white left-40 top-10 text-xl font-bold text-4xl block">Shang-Chi and the Legend <br/>of the Ten Rings</div>
                    <div className="text-white flex text-xl gap-1 my-2"> 
                    <div className="w-8 h-8">
                      <span style={{color: "white"}}>
                      <BiHeart className="w-full h-full " />
                      </span>
                        </div> 90%
                        <span className="text-base px-2 py-1 "> 53.3k Ratings </span>
                    <div className="w-6 h-8"> 
                    < BiChevronRight className=" w-full h-full"/>
                    </div>
                    
                    </div>
                    <div className=" flex justify-between bg-navCol-200 rounded-sm my-2 "> 
                    <div className="text-white align-center font-bold px-5 py-2 text-xl">
                        Add your Rating & Review<br/>
                        <span className="text-sm text-align-center ">Your rating Matters </span>
                     </div>
                    <button className="  bg-white text-black rounded-lg p-1 m-4 px-2 py-1" >Rate Now</button>
                    
                    </div>
                    <span className="bg-gray-200 text-black rounded-sm w-1/2 px-2 ">2D,3D,IMAX 2D,MX4D,4DX</span>
                    <span className="bg-gray-200 text-black rounded-sm  w-4/5 px-2  ">English,Kannada,Tamil,Hindi,Telugu,Malayalam</span>

                    <span className="text-white text-base">2h 12m • Action,Adventure,Fantasy • UA • 3 Sep, 2021</span>

                    
                    <button onClick={launchRazorPay} className=" bg-red-600 rounded-lg align-center text-white p-2 w-1/2 mx-8 ">Book tickets</button>
                </div>
                
               <button>
               <div className="flex bg-opacity-30 bg-black z-30 absolute right-20 top-20 rounded-lg p-2 flex gap-0.5 ">
                <div className="w-16 h-10">
                <BiShareAlt className="w-full h-full " style={{color: "white"}} />
            </div>
             <span className="text-white text-xl font-bold py-1.5 ">Share</span>
             </div>  
               </button>

                
                
             </div> 

             
            
             
             <img
     src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
     alt="poster"
     className="w-full h-full"
    />
         
         

        </div>
        </>
    );
};

export default MovieHero;