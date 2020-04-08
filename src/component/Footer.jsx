import React, {Component} from 'react'

class Footer extends Component {

    render() {
        return (
            <div>
                <footer id="footer">
                    <div class="section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-3 col-xs-6">
                                    <div class="footer">
                                        <h3 class="footer-title">О нас</h3>
                                        <p>Помощь в аренде</p>
                                        <ul class="footer-links">
                                            <li><a href="#"><i class="fa fa-map-marker"></i>Казань, ул. Кремлевская, 35</a></li>
                                            <li><a href="#"><i class="fa fa-phone"></i>+021-95-51-84</a></li>
                                            <li><a href="#"><i class="fa fa-envelope-o"></i>email@email.com</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-md-3 col-xs-6">
                                    <div class="footer">
                                        <h3 class="footer-title">Категории</h3>
                                        <ul class="footer-links">
                                            <li><a href="#">Hot deals</a></li>
                                            <li><a href="#">Laptops</a></li>
                                            <li><a href="#">Smartphones</a></li>
                                            <li><a href="#">Cameras</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="clearfix visible-xs"></div>

                                <div class="col-md-3 col-xs-6">
                                    <div class="footer">
                                        <h3 class="footer-title">Информация</h3>
                                        <ul class="footer-links">
                                            <li><a href="#">О нас</a></li>
                                            <li><a href="#">Политика конфидициальности</a></li>
                                            <li><a href="#">Заказы и возвраты</a></li>
                                            <li><a href="#">Сроки и условия</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-md-3 col-xs-6">
                                    <div class="footer">
                                        <h3 class="footer-title">Услуги</h3>
                                        <ul class="footer-links">
                                            <li><a href="#">Мой аккаунт</a></li>
                                            <li><a href="#">Мои заказы</a></li>
                                            <li><a href="#">Список желаний</a></li>
                                            <li><a href="#">Track My Order</a></li>
                                            <li><a href="#">Помощь</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
        
            </div>
        )
    }
}

export default Footer