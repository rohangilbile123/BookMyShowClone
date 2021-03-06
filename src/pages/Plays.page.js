import React from "react";
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
    return (
        <>
        <div className="container mx-auto px-4">
           
       <div className="w-full lg:flex lg:flex-row-reverse lg:gap-5">
       <div className="lg:w-8/12">
       <h2 className="text-2xl font-bold mb-4">Plays in Pune</h2>
       <div className="flex flex-wrap">
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4 ">
       <Poster 
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315779-szdssxjkfx-portrait.jpg"
          title= "Digital Theatre Monthly Pass"
          subtitle= " English/Hindi ₹"
       />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
       <Poster 
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315134-sjrmabyzbf-portrait.jpg"
          title= "Digital Theatre Monthly Pass"
          subtitle= " English/Hindi ₹"
       />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
       <Poster 
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315134-sjrmabyzbf-portrait.jpg"
          title= "Digital Theatre Monthly Pass"
          subtitle= " English/Hindi ₹"
       />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
       <Poster 
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315134-sjrmabyzbf-portrait.jpg"
          title= "Digital Theatre Monthly Pass"
          subtitle= " English/Hindi ₹"
       />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
       <Poster 
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315134-sjrmabyzbf-portrait.jpg"
          title= "Digital Theatre Monthly Pass"
          subtitle= " English/Hindi ₹"
       />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
       <Poster 
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315134-sjrmabyzbf-portrait.jpg"
          title= "Digital Theatre Monthly Pass"
          subtitle= " English/Hindi ₹"
       />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
       <Poster 
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315134-sjrmabyzbf-portrait.jpg"
          title= "Digital Theatre Monthly Pass"
          subtitle= " English/Hindi ₹"
       />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
       <Poster 
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315134-sjrmabyzbf-portrait.jpg"
          title= "Digital Theatre Monthly Pass"
          subtitle= " English/Hindi ₹"
       />
       </div>
       </div>
       </div>
       <div className="lg:w-1/4">
       <h2 className="text-2xl font-bold mb-4">Filters</h2>
       <div className="lg:mt-5">
        <div className="bg-green-50 mb-4">
        <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
        </div>
         <div className="bg-green-50 mb-4">
         <PlaysFilter title="Language" tags={["Tamil", "Kannada"]}/>
         </div>
       <div className="bg-green-50 mb-4">
         <PlaysFilter title="Categories" tags={["Theatre"]}/> 
       </div>
       <div className="bg-green-50 mb-4">
       <PlaysFilter title="Genres" tags={["Drama","Comedy"]}/>
       </div>
       <div className="bg-green-50 mb-4">
       <PlaysFilter title="More Filters" tags={["Online Streaming","Outdoor Events"]}/>
       </div>
      <div className="bg-green-50 mb-4">
      <PlaysFilter title="Price" tags={["Free","0-500","501-2000","Above 2000"]}/>
      </div>
       </div>
       </div>
       </div>
        </div>
        </>
    )
};

export default Plays;