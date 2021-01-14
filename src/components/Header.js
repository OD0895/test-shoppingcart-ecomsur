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
                        <Link to="/"><span> Store <i className="bi bi-house-fill"></i> </span>  </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/carts">
                            <span>
                            Shopping Cart
                            
                                <i className="bi bi-cart4"></i>
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