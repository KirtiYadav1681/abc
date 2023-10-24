import React, { useState } from 'react';
import './App.css';
import Addcar from './components/addcar/addcar';
import Displaycar from './components/displaycars/displaycar';
import SellCar from './components/sellCar/SellCar';
import {carStock} from './data/carStock';

function App() {
  const[car,setcar]=useState(carStock);

  const handleAddingcar =(Brand,Model,quantity) => {
    // checking if model and Brand are same
    const model=car.filter((c)=>c.Model===Model && c.Brand === Brand);
    console.log(model);
    if(model.length>0){
        model[0].quantity=Number(model[0].quantity) + Number(quantity);
        const oldcar=car.filter((c)=>c.Model !== Model);
        setcar([model[0],...oldcar])
    }
    // if model and name are not same just add new car
    else{
      const Newcar={Brand,Model,quantity};
      setcar([Newcar,...car])
    }
  }

  const handleSellingcar =(Brand,Model,quantity) => {
    // checking if model and Brand are same
    const model = car.filter((c)=> c.Model === Model && c.Brand === Brand);
    if(model.length>0){
      if(model[0].quantity === 0){
        model[0].quantity = 'NOT IN STOCK'
      } else{
        model[0].quantity=Number(model[0].quantity) - Number(quantity);
        if(model[0].quantity === 0){
          model[0].quantity = 'NOT IN STOCK'
        }
      }
        const oldcar=car.filter((c)=>c.Model !== Model);
        setcar([model[0],...oldcar])
    }
    // if model and name are not same just add new car
    else{
      alert('Enter valid car entry');
    }
  }

  return (
  <>
  {/* passing props to components */}
    <Displaycar car={car}/>
    <div style={{display:"flex", flexDirection:"row", alignItems: "center", justifyContent: "center", padding:'10px 200px'}}>
    <Addcar handleAddingcar={handleAddingcar}/>
    <SellCar handleSellingcar={handleSellingcar} car={car}/>
    </div>
  </>
  );
}

export default App;
