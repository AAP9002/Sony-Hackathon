import React from 'react';
import "./Home.css";
import { useEffect, useRef, useState } from 'react';
import "../../Components/CameraDropdown";
import CameraDropdown from '../../Components/CameraDropdown';




const About = () => {
    const [Leaderboard, setLeaderboard] = useState([]);
    const [SortName, SetSort] = useState("Wins")

    function getSort(value) {

        SetSort(value);
  
        // fetch(`/api/leaderboards?sort=${ sort }`).then(res => res.json()).then(fetchedData =>{
        //   setLeaderboard(fetchedData.leaderboards);
        //   console.log(Leaderboard);
        // });
  
    }


    return (
    //     <div>
    //         <div className='all w-100 d-flex justify-content-center'>
    //         <div className='box'>
    //         <select value="Camera 1" name="modes" onChange={(e) => getSort(e.target.value)} >
    //             <option disabled>Camera 1</option>
    //         </select>
    //     </div>
    //   </div>
    //     </div>
        <div>
            <CameraDropdown name="Camera 1" />
            <p>sfs</p>
        </div>
    );
};

export default About;