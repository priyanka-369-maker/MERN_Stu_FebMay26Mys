import {useState} from 'react';
export default function AuthStatus(){
    const [isloggedIn, setIsLoggedIn] = useState(false);
    return(
        <section>
            <h2>Authentication Status</h2>
            <p>
                Current Status:
                {isloggedIn ? "Logged In" : "Guest User"}
            </p>
            <button onClick={()=>{setIsLoggedIn(!isloggedIn);}}>
                {isloggedIn ? "Logout" :"Login"}
            </button>
        </section>
    )
}