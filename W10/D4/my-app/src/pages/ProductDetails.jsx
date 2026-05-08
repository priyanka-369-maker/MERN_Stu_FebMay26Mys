export function ProductDeatailsPage(){
    const { id } =useParams();
    return (
        <div>
            <h3>Product Id: {id}</h3>
        </div>
    );
}