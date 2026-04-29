// Container/ Wrapper component
import { React } from "react";
//Children is a special React prop
//It holds nested JSX passed b/w component tags
//It helps create reusable wrapper/layout components
function Container({children}){
    return(
        <div className="card">
            {children}
        </div>
    );
}
// Parent component
export function PropsChildren(){
    return(
        <>
        <Container> {/* Container here is name of child component */}
            <h3>First child element is Nested approach</h3>
        </Container>
        </>
    )
}