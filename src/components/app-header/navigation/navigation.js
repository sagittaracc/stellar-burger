import NavLink from "../nav-link/nav-link";
import { BurgerIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";

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

export default Navigation;