import React from 'react';
import './TopItems.css';
import {navData} from '../assets/navData'
// let items=['Top Offers','Grocery','Mobile','fashion']; 

const TopItems=()=>{
    return(
        <div className="topItems">
          {navData.map(data=>(
            <div style={{textAlign:'center',cursor:'pointer'}}>
            <img style={{height:'64px',width:'64px' }} src={data.url}/>
            <p style={{fontSize:'14px',fontWeight:'600'}}>{data.text}</p>
            </div>
          ))}
        </div>
    );
}
export default TopItems;