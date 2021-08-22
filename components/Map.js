import { useState } from 'react';
import ReactMapGL, { Marker, Popup} from 'react-map-gl';
import getCenter  from 'geolib/es/getCenter';


function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] =  useState({});
 
    // Transform the search results object into the
    // { latitute: 52.516272, longitude: 13.377722 } object
    // create coordinates object
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    })) 
 console.log(coordinates)
    // the latitude and longitude of the center of locations coordinates
    const center = getCenter(coordinates);
    console.log(center)
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })
    
  console.log(selectedLocation)

    return <ReactMapGL
        mapStyle='mapbox://styles/talkjasveer/cksl1jbf41dem17pjdka2dny6'
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
     {searchResults.map((result) => (
         <div key={result.long}>
             <Marker 
                longitude={result.long}
                latitude={result.lat}
                offsetLeft={-20}
                 offsetTop={-10}
                 >
               <p 
               role='img'
               onClick={()=> setSelectedLocation(result)} className='cursor-pointer text-2xl animate-bounce'
               arial-label='push-pin'
               >📌</p>
               </Marker>
               
               {/* the popup that should show if we click on a Marker */}

               {selectedLocation.long === result.long ? (
                   <Popup  
                   onClose={() => setSelectedLocation({})}
                   closeOnClick={true}
                   latitude={result.lat}
                   longitude={result.long}
                   >
                       {result.title}
                   </Popup>
               ) : (
                   false
               )
            
               }

            
         </div>
     ))}
    </ReactMapGL>


}

export default Map
