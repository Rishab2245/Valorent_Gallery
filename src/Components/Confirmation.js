import React from 'react'
import { DELETE_CARD_API } from '../Common/constants';
import useLocalStorage from '../Hooks/useLocalStorage';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Confirmation = ({id , setiscross , setCardRemoved}) => {
    console.log("id" , id);
    const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");
    const [display, setDisplay] = useState(false);

    const [isLoggedin, setIsLoggedin] = useAuth();
  
    useEffect(() => {
      if (getLocalStorage === null) {
        setIsLoggedin(false);
      }
    }, [getLocalStorage]);

const deleteCard = async function (){
    try {
        console.log( "bearer token" ,getLocalStorage.token);
        const response = await axios.delete(`${DELETE_CARD_API}${id}`, {
            headers:{
                'Authorization': getLocalStorage?.token
            }
        })
        if(response.data.data.deletedCount==0){
            throw new Error(response.data.data.deletedCount);
        }else{
            setiscross(false);
            setCardRemoved(response.data.data.acknowledged);
        }
        // setCardDeleted(response.data.success);
        
    }
    catch (error) {
        console.log(error);
        setDisplay(true);
    }
}


  return (
    <div className='conform'>
        <h3>Are You Sure?</h3>
        <div>
            <button className='button' onClick={()=>{
                console.log("clicked");
                deleteCard();
            }}>Yes</button>
            <button className="button" onClick={()=>{
                setiscross(false);
            }}>No</button>
        </div>
        {display &&(
                        <h5>can't be deleted</h5>
                    )}
    </div>
  )
}

export default Confirmation;