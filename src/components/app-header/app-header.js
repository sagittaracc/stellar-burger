import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

const NavLink = ({ link, text, type, children }) => {
    return (
        <a href={link} className="text-decoration-none">
            <span className="pl-5 pr-2 align-middle">{children}</span>
            <span className="text text_type_main-default text_color_primary">{text}</span>
        </a>
    )
}

const Navigation = () => {
    return (
        <div className="float-left mt-3">
            <NavLink link="#" text="Конструктор" type="active">
                <BurgerIcon />
            </NavLink>

            <NavLink link="#" text="Лента заказов">
                <ListIcon />
            </NavLink>
        </div>
    )
}

const AppHeader = () => {
    return (
        <header style={{ width: '80%', margin: 'auto', border: '2px solid #4C4CFF', backgroundColor: '#1C1C21' }} className="pt-4 pb-4">
            <Navigation />

            <Logo />

            <div className="float-right mt-3 mr-3">
                <NavLink link="#" text="Личный кабинет">
                    <ProfileIcon />
                </NavLink>
            </div>
        </header>
    );
}

export default AppHeader;