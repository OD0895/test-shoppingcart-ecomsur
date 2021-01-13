import React, { Component } from 'react'
import { actFetchProductsRequest, AddCart } from './actions'
import { connect } from 'react-redux';
import { StyledProducts } from "../styles/components";

export class Product extends Component {
    constructor(props) {
        super(props)
    }
 
    componentDidMount(){
        this.props.actFetchProductsRequest();
    }
     
    render() {
        const {_products} = this.props._products;
        if(_products.length>0){
            
           return (
            <StyledProducts>
                <section>
                    {
                        _products.map((item,index)=>(
                            <article key={index}>
                                <img src={item.imageURL} />
                                <p>{item.name}</p>
                                <small> $ {item.price}</small>
                                <span className="badge badge-primary" style={{cursor:'pointer'}} onClick={()=>this.props.AddCart(item)}>Add to Cart →</span>
                            </article>
                        ))
                    }
                </section>
            </StyledProducts>
                
            )
        }
        return(
            <div className="row">
                <h2>Loading...!</h2>
            </div>
        )
         
    }
}
 
const mapStateToProps = state =>{
    return {
         _products: state._todoProduct,
       };
}
function mapDispatchToProps(dispatch){
    return{
        actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
        AddCart:item=>dispatch(AddCart(item))
      
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product)