import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'; 

class BurgerBuilder extends Component{

      constructor(){
          super();
          
          this.state={
              ingredients:[
                  {name:'salad', label:'Salad', qty:0, price:5, disable:true},
                  {name:'bacon', label:'Bacon', qty:0, price:6, disable:true},
                  {name:'cheese', label:'Cheese', qty:0, price:7, disable:true},
                  {name:'meat', label:'Meat', qty:0, price:10, disable:true},         
              ],
          }
              
          this.addItems= (type)=> {
              const updatedIngredients= this.state.ingredients.map(ingredient =>{
              if(ingredient.name === type)
              {
                  ingredient.qty++;
                  ingredient.disable= false;
              }     
                return ingredient;
            });
              
           this.setState({
              ingredients: [].concat(updatedIngredients),        
          })}
          
          this.removeItems= (type)=> {
              const updatedIngredients= this.state.ingredients.map(ingredient =>{
            if(ingredient.name === type)
             {
                   if(ingredient.qty > 0)
                   {
                       ingredient.qty--;
                       ingredient.disable= false;
                   } 
                   if(ingredient.qty === 0)
                   {
                       ingredient.disable= true;
                   } 
             }
               return ingredient;
            });
              
           this.setState({
              ingredients: [].concat(updatedIngredients),      
          })}
      }
    
  render() { 
    return (
       <div> 
          <Burger ingredients={this.state.ingredients} />
          <BuildControls removeItems={this.removeItems} addItems={this.addItems} ingredients={this.state.ingredients} />
       </div>   
    );
  }
}

export default BurgerBuilder;
