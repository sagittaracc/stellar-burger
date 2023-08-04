import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import NavLink from "./nav-link/nav-link";
import Navigation from "./navigation/navigation";

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

export default AppHeader;