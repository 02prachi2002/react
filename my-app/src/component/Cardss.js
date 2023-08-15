import './Cardss.css'
function Cardss(props)
{
    return(
        <div className="cproduct">
            {props.children}
        </div>
    );

}
export default Cardss;