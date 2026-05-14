//optional parameters
import { useParams } from "react-router-dom";
export function OptionalParameters() {
    const { username } = useParams();
    return(
        <div>
            <h2>Option Parameters</h2>
            {username ? (
                <p>Hello, {username}</p>
            ):(<p>Hello, User</p> )}
        </div>
    );
}