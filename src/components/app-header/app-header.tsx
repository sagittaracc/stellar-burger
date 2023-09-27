import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import CustomLink from "../custom-link/custom-link";
import { Link } from "react-router-dom";
import { FC } from 'react';

const AppHeader: FC = () => {
    return (
        <header className="pt-4 pb-4 flex space-between">
            <div className="mt-3 between-5">
                <CustomLink to="" text="Конструктор" icon={<BurgerIcon type="secondary" />} />
                <CustomLink to="feed" text="Лента заказов" icon={<ListIcon type="secondary" />} />
            </div>

            <Link to="/">
                <Logo />
            </Link>

            <div className="mt-3">
                <CustomLink to="profile" text="Личный кабинет" icon={<ProfileIcon type="secondary" />} />
            </div>
        </header>
    );
}

export default AppHeader;