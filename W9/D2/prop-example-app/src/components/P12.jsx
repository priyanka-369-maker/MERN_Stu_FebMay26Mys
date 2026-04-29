// Higher order components(HDC)
const Greeting = ({name}) => {
    return <h1>Hello,{name}</h1>
}
const WithBorder = (OriginalComponents) => {
    return function EnhancedComponent(props){
        return(
            <div className="setBorder">
                <OriginalComponents{...props} />
            </div>
        );
    }
}
const GreetingWithBorder = WithBorder(Greeting);
export function HOCExample(){
    return(
        <>
        <GreetingWithBorder name="Priya"/>
        </>
    )
}