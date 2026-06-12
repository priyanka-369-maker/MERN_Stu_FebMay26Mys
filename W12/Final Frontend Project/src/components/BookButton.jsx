export default function BookButton(){
    function hadleBooking(){
        alert("Your ticket has been booked successfully!");
    }
    return(
        <section>
            <h3>Book Movie</h3>
            <button onClick={hadleBooking}>Book Movie</button>
        </section>
    )

    }