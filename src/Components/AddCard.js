import React, { useEffect , useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../Hooks/useLocalStorage";
import { ADD_CARD_API } from "../Common/constants";

const AddCard = ({setisAdd , setCardCreated})=>{
    const [getLocalStorage, setLocalStorage] = useLocalStorage("user");
    const [cardName, setcardName] = useState("");
    const [cardDiscription, setcardDiscription] = useState("");
    const [cardImage, setcardImage] = useState("");
    const [Image , setImage] = useState("");
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();
    const HandleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'cardName') {
            setcardName(value);
        }
        if (name === 'cardDiscription') {
            setcardDiscription(value);
        }
        if (name === 'cardImage') {
            setcardImage(e.target.files[0]);
            previewFiles(e.target.files[0]);
        }
    }

    const previewFiles = (e) => {

        const reader = new FileReader();
        reader.readAsDataURL(e);
        reader.onloadend = () =>{
            console.log(reader.result);
            setImage(reader.result);
        }

    }

    const Submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                ADD_CARD_API,
                {
                  "cardName": cardName,
                  "cardDiscription": cardDiscription,
                  "cardImg": Image
                },
                {
                  headers: {
                    'Authorization': getLocalStorage?.token
                  }
                }
              );
              
            // if(response.statusCode == 201){
                
            // }
            console.log(response);
            setCardCreated(response.data.success);
            setisAdd(false);

            
            // const token = "token";
            // console.log("Data : ",response.data.user._id);
            // const id = "1"; 
            // Cookies.set('id',id,{expires:7,path:'/',secure:true})
            // Cookies.set('token',token,{expires:7,path:'/',secure: true})
            // navigate(`/dashboard`, { state: { id: "1", cardName: cardName, auth: token } });
        }
        catch (error) {
            console.log(error);
            setDisplay(true);
        }
    }

    return (
    <div className="addContainer body-container">
           <form className="addCard-form " onSubmit={Submit}>
                    <h2>Add Card</h2>
                    <div className="input">
                    <input type="text" className="field" placeholder="Card Name" onChange={HandleChange} name="cardName" autoComplete="off" value={cardName} />
                    
                    <input type="text" className="field" placeholder="card Discription" onChange={HandleChange} name="cardDiscription" value={cardDiscription} />
                    
                    <input type="file" className="field" placeholder="card Image" onChange={HandleChange} name="cardImage" accept="image/png , image/jpeg , image/jpg"/>
                    
                    {/* <img src={Image} alt="cardImage"/> */}
                    <button type="submit">Add Card</button>
                    </div>
                    <br></br>
                    {display &&(
                        <h3>Please Enter Valid Credentials</h3>
                    )}
            </form>
    </div>)
}

export default AddCard;