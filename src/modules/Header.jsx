import { Link, useLocation } from "react-router-dom"
import { useCart } from "../context/CartContext";

export const Header = () => {
    const location = useLocation();
    const { cart } = useCart();
    const totalQuantity = cart ? cart.reduce((acc, item) => item.quantity + acc, 0) : 0;

    const getActiveClass = (category) => {
        const currentCategory = new URLSearchParams(location.search).get('category');

        return currentCategory === category ? "active" : "";
    }

    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/" className="header__logo-link">
                    <img src="image/logo.svg" alt="Логотип Cup time" className="header__logo" />
                </Link>
                <nav className="header__nav">
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <Link to="/products?category=tea" className={`header__menu-link ${getActiveClass("tea")}`}>Чай</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/products?category=coffee" className={`header__menu-link ${getActiveClass("coffee")}`}>Кофе</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/products?category=teapots" className={`header__menu-link ${getActiveClass("teapots")}`}>Чайники</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/products?category=cezves" className={`header__menu-link ${getActiveClass("cezves")}`}>Турки</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/products?category=other" className={`header__menu-link ${getActiveClass("other")}`}>Прочее</Link>
                        </li>
                    </ul>
                </nav>
                <Link to="cart" className="header__cart-link">{totalQuantity}</Link>
            </div>
        </header>
    )
}
