import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  {connect} from  'react-redux'
import { MenuItem, StyledHeader } from "../styles/components"

export class Header extends Component {
    render() {
        return (
            <StyledHeader>
            <Link to="/">
                    <span>
                    </span>
                </Link>
                <nav>
                    <ul>
                    <MenuItem margin>
                        <Link to="/">Store</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/carts">
                            <span>
                            Shopping Cart
                                <img
                                    src="https://i.postimg.cc/L6wpMxLt/cart.png"
                                    alt="cartlogo"
                                />
                                {this.props.numberCart}
                            </span>

                        </Link>
                    </MenuItem>
                    </ul>
                </nav>
            
            </StyledHeader>
            
        )
    }
}
const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart
    }
}
export default connect(mapStateToProps,null)(Header)