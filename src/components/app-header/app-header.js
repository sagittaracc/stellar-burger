import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import CustomLink from "../custom-link/custom-link";
import { Link } from "react-router-dom";

const AppHeader = () => {
    return (
        <header className="pt-4 pb-4 flex space-between">
            <div className="mt-3 between-5">
                <CustomLink to="" text="Конструктор" icon={<BurgerIcon />} />
                <CustomLink to="feed" text="Лента заказов" icon={<ListIcon />} />
            </div>

            <Link to="/">
                <Logo />
            </Link>

            <div className="mt-3">
                <CustomLink to="profile" text="Личный кабинет" icon={<ProfileIcon />} />
            </div>
        </header>
    );
}

export default AppHeader;