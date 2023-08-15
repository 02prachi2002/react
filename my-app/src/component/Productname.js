import React, {useState} from 'react';
import './Productname.css';
const Productname = (props)=>
{

   const[prodname,seTitle] = useState(props.prodname);
    function buttonhandler(){
        seTitle("popcorn");
        console.log("hi i am button");
    }
    return(
        <div>
            <p className="pname">{prodname} </p>
            <button onClick={buttonhandler}> Add to Cart</button>
        </div>
        
    );
    

}
export default Productname;