import './Firstcomponent.css';
function Firstcomponent(props){
    
    const itemname = props.name;
    return(
   
        // method 1 - hardcoding <p className ="nirma">Nirma</p>
        //method 2 - parsing the data
        <div>
            {/* have to keep this in one div as there is only one parent policy in react */}
            <p className="nirma">{itemname} </p>
        {props.children}
        </div>
        
    );

}
export default Firstcomponent;