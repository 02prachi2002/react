 
import './App.css';
import Cardss from './component/Cardss';
import Prodate from './component/Prodate';
import Productcard from './component/Productcard';
import Productname from './component/Productname.js';



function App() {
  // const itemtwo = "ariel"
  const response = [
    {
      itemnamee:"Nirma",
      itemday: 12,
      itemmonth:" Feb ",
      itemyear:2002
    },
    {
      itemnamee:" Ariel ",
      itemday: 22,
      itemmonth:" July ",
      itemyear:2006
    },
    {
      itemnamee:"Maggi",
      itemday: 14,
      itemmonth:" Aug ",
      itemyear:2000
    },
    {
      itemnamee:"Biscuit",
      itemday: 19,
      itemmonth:" Dec ",
      itemyear:2009
    }
  ];
  return (
    <div>
      {/* method 1 */}
     {/* <Firstcomponent name = "nirma"></Firstcomponent>
     <Firstcomponent name = "surf excel"></Firstcomponent>
     <Firstcomponent name = "555"></Firstcomponent>
     {/* another method */}
     {/* <Firstcomponent name = {itemtwo}></Firstcomponent>
     {/* method 3 using array */}
     {/* <Firstcomponent name = {response[0].itemnamee}>
      {/* to print the children use props.children nahi toh yeah text visible nahi hoga*/}
      {/* isha pagal hai
     </Firstcomponent>
     <Firstcomponent name = {response[1].itemnamee}></Firstcomponent>
     <Firstcomponent name = {response[2].itemnamee}></Firstcomponent> */} 
     <Productcard>
     <Cardss>
    <Productname name = {response[0].itemnamee}></Productname>
      <Prodate day = {response[0].itemday} month = {response[0].itemmonth} year = {response[0].itemyear} ></Prodate>
      </Cardss>
      <Cardss>
      <Productname name = {response[1].itemnamee}></Productname>
      <Prodate day = {response[1].itemday} month = {response[1].itemmonth} year = {response[1].itemyear} ></Prodate>
      </Cardss>
     <Cardss>
     <Productname name = {response[2].itemnamee}></Productname>
      <Prodate day = {response[2].itemday} month = {response[2].itemmonth} year = {response[2].itemyear} ></Prodate>
     </Cardss>
     <Cardss>
     <Productname name = {response[3].itemnamee}></Productname>
      <Prodate day = {response[3].itemday} month = {response[3].itemmonth} year = {response[3].itemyear} ></Prodate>
     </Cardss>
      
  
     </Productcard>
    
    
    
    
    </div>
    
  );
}

export default App;
