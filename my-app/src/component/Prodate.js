
import './Prodate.css';
function Prodate(props){
    const dayy = props.day;
    const monthh = props.month;
    const yearr = props.year;
    return(
        <div className="pdname">
            <span className = "mfgday">{dayy}</span><br></br>
            <span className = "mfgmonth">{monthh}</span><br></br>
            <span className = "mfgyear">{yearr}</span>
        </div>
    );
}
export default Prodate;