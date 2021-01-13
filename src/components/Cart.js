import React from 'react'
import { connect } from "react-redux";
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from './actions';
import { StyledCart } from "../styles/components"

function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}){
  //  console.log(items)
    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }
    
    return(
        <StyledCart>
            <table className="table">
                <tbody>
                    <tr>
                        <th> Name Product</th>
                        <th>Imagen</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                {
                    ListCart.map((item,key)=>{
                        return(
                            <tr key={key}>   
                            
                            <td>{item.name}</td>
                            <td><img src={item.imageURL} style={{width:'150px',height:'150px'}}/></td>
                            <td>{item.price} $</td>
                            <td>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</span>
                                    <span className="btn btn-info">{item.quantity}</span>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</span>
                            </td>
                            <td>{ TotalPrice(item.price,item.quantity)} $</td>
                            <td>
                            <span className="btn btn-danger" style={{margin:'2px'}} onClick={()=>DeleteCart(key)}>-</span>
                            </td>
                        </tr>
                        )
                    })
                         
                }
                <tr>
                    <td colSpan="5">Total Carts</td>
                    <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
                </tr>
                </tbody>
               
            </table>
        </StyledCart>
        
    )
}
const mapStateToProps = state =>{
    console.log(state)
    return{
        items:state._todoProduct
    }
}
 
export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart)
