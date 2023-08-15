import './Productcard.css'
function Productcard(props)
{
    return(
        <div className ="maincard">
            {props.children}
        </div>
    );

}
export default Productcard;