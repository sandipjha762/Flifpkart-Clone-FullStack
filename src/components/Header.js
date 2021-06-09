import React from 'react'
import './Header.css'
  //import SearchIcon from '@material-ui/icons/Search';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
 //import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    return (
        <div className="Header__container">
           
                <div className="logo__container">
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo"/>
                    <div class="inside__logo">
                            <span style={{fontSize:'11px', color:'white', fontStyle:'italic'}}>Explore</span>
                            <span style={{fontSize:'11px', color:'#ffe500', fontStyle:'italic'}}>Plus</span>
                            <span>
                                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="plus"/>
                            </span>
                    </div>
                </div>
            
            <div className="search__box">
                <input type="text" placeholder="Search for products, brands and more"></input>
                {/* <SearchIcon/> */}
            </div>
            <div className="login__btn">
                <button type="button">Login</button>
            </div>

            <div className="more__items">
                <span className="more">More</span>
            </div>

            <div className="cart__container">
            {/* <ShoppingCartIcon/> */}
            <span className="cart">Cart</span>
            </div>

        </div>
    )
}

export default Header;
