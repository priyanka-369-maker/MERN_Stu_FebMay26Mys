import { useState } from "react";

export default function MovieSearch(){
const[seach, setSearch] = useState("");
return(
    <section>
        <h3>Search for Movies</h3>
        <input type="text" placeholder="Search for movies" value={seach} onChange={(e) => setSearch(e.target.value)}/>
        <p>You are searching for: {seach}</p>
    </section>
);
}
