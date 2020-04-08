import React, {Component} from 'react'
import ProfileLogo from "./ProfileLogo";

class Header extends Component {

    render() {
        return (
            <div>
                <header>
                    <div id="top-header">
                        <div class="container">
                            <ul class="header-links pull-left">
                                <li><a href="#"><i class="fa fa-phone"></i> +021-95-51-84</a></li>
                                <li><a href="#"><i class="fa fa-envelope-o"></i> email@email.com</a></li>
                                <li><a href="#"><i class="fa fa-map-marker"></i> Казань, Кремлевская 35 </a></li>
                            </ul>

                            {/*<div id="auth"></div>*/}
                            {/*<ul class="header-links pull-right">*/}
                            {/*    <li><a href="/register"><i class="fa fa-user-circle"></i> Регистрация</a></li>*/}
                            {/*    <li><a href="/login"><i class="fa fa-user-o"></i> Вход</a></li>*/}
                            {/*</ul>*/}
                            <ProfileLogo/>
                        </div>
                    </div>
                    

                    
                    <div id="header">
                        
                        <div class="container">
                            
                            <div class="row">
                                
                                <div class="col-md-3">
                                    <div class="header-logo">
                                        <a href="/" class="logo">
                                            <img src="./logo.png" alt="" width="200px"/>
                                        </a>
                                    </div>
                                </div>
                                

                                
                                <div class="col-md-6">
                                    <div class="header-search">
                                        <form>
                                            <select class="input-select">
                                                <option value="0">Все категории</option>
                                                <option value="1">Техника</option>
                                                <option value="2">Поход</option>
                                            </select>
                                            <input class="input" placeholder="Я ищу..."/>
                                                <button class="search-btn">Поиск</button>
                                        </form>
                                    </div>
                                </div>
                                

                                
                                <div class="col-md-3 clearfix">
                                    <div class="header-ctn">
                                        
                                        <div>
                                            <a href="#">
                                                <i class="fa fa-heart-o"></i>
                                                <span>Мои пожелания</span>
                                                <div class="qty">2</div>
                                            </a>
                                        </div>
                                        

                                        
                                        <div class="dropdown">
                                            <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                                <i class="fa fa-shopping-cart"></i>
                                                <span>Мои заказы</span>
                                                <div class="qty">3</div>
                                            </a>
                                            <div class="cart-dropdown">
                                                <div class="cart-list">
                                                    <div class="product-widget">
                                                        <div class="product-img">
                                                            <img src="./img/product.jpg" alt=""/>
                                                        </div>
                                                        <div class="product-body">
                                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                            <h4 class="product-price"><span class="qty">1x</span>$980.00</h4>
                                                        </div>
                                                        <button class="delete"><i class="fa fa-close"></i></button>
                                                    </div>

                                                    <div class="product-widget">
                                                        <div class="product-img">
                                                            <img src="./img/product.jpg" alt=""/>
                                                        </div>
                                                        <div class="product-body">
                                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                            <h4 class="product-price"><span class="qty">3x</span>$980.00</h4>
                                                        </div>
                                                        <button class="delete"><i class="fa fa-close"></i></button>
                                                    </div>
                                                </div>
                                                <div class="cart-summary">
                                                    <small>3 Item(s) selected</small>
                                                    <h5>SUBTOTAL: $2940.00</h5>
                                                </div>
                                                <div class="cart-btns">
                                                    <a href="#">View Cart</a>
                                                    <a href="#">Checkout  <i class="fa fa-arrow-circle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        

                                        
                                        <div class="menu-toggle">
                                            <a href="#">
                                                <i class="fa fa-bars"></i>
                                                <span>Меню</span>
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </header>
                
            </div>
        )
    }
}

export default Header