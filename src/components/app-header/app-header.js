import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

const NavLink = ({ link, text, type, children }) => {
    var colorClass = type === 'active' ? 'text_color_primary' : 'text_color_inactive';

    return (
        <a href={link} className="text-decoration-none">
            <span className="pr-2 align-middle">{children}</span>
            <span className={`text text_type_main-default ${colorClass}`}>{text}</span>
        </a>
    )
}

const Navigation = () => {
    return (
        <div className="mt-3 between-5">
            <NavLink link="#" text="Конструктор" type="active">
                <BurgerIcon />
            </NavLink>

            <NavLink link="#" text="Лента заказов">
                <ListIcon type="secondary" />
            </NavLink>
        </div>
    )
}

const AppHeader = () => {
    return (
        <header className="pt-4 pb-4 flex space-between">
            <Navigation />

            <Logo />

            <div className="mt-3">
                <NavLink link="#" text="Личный кабинет">
                    <ProfileIcon type="secondary" />
                </NavLink>
            </div>
        </header>
    );
}

NavLink.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    children: PropTypes.node
};

export default AppHeader;