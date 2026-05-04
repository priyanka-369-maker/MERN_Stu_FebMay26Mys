//Updating objects and Arrays
import { useState, UseState } from "react";
export function UpdatingObjectsArraysState(){
    //user state
    const [user,setUser] = useState({
        name:'Priya',
        skill:'React'
    });
    const updateSkill = () =>{
        setUser({ 
            ...user, //copies all existing properties 
            skill:'Advanced React'
        });
    };
return(
    <>
    <h2>Updating objects state</h2>
    <p>{user.name} - {user.skill}</p>
    <button onClick={updateSkill}>Update Skill</button>
    </>
)
}