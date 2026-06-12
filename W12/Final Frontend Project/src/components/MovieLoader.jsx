import {useState} from "react";
export default function MovieLoader(){
    const [isloading, setIsLLoading] = useState(true);
    return(
        <section>
            <h2>Movies</h2>
            {isloading ? <p>Loading Movies...</p> : <p>Movies loaded successfully!</p>}
            <button onClick={()=>{setIsLLoading(!isloading);}}>Toggle Loading</button>
        </section>
    );
}