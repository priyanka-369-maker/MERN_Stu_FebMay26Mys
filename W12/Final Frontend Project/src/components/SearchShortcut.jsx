export default function SearchShortcut(){
    function handleSearch(){
        if(event.key === "Enter"){
            alert("Search Initiated");
        }
            if(event.key === "Escape"){
                alert("Search Cancelled");
            }
        
    }
    return(
        <section>
            <h2>Keyboard Search</h2>
            <input type="text" placeholder="Type and press Enter" onKeyDown={handleSearch}/>
        </section>
    );
}