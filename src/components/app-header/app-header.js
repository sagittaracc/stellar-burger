import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import NavLink from "./nav-link/nav-link";

const AppHeader = () => {
    return (
        <header className="pt-4 pb-4 flex space-between">
            <div className="mt-3 between-5">
                <NavLink to="#" active={true} text="Конструктор" icon={<BurgerIcon />} />
                <NavLink to="#" active={false} text="Лента заказов" icon={<ListIcon />} />
            </div>

            <Logo />

            <div className="mt-3">
                <NavLink to="/profile" active={false} text="Личный кабинет" icon={<ProfileIcon />} />
            </div>
        </header>
    );
}

export default AppHeader;