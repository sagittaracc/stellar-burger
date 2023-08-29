import { cloneElement, useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({to, text, icon}) => {
    const [active, setActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setActive(location.pathname === to);
    }, [location]);

    const textClass = active ? 'text_color_primary' : 'text_color_inactive';
    const iconType = active ? 'primary' : 'secondary';
    const iconElement = cloneElement(icon, {type: iconType});

    return (
        <Link to={to} className="text-decoration-none">
            <span className="pr-2 align-middle">{iconElement}</span>
            <span className={`text text_type_main-default ${textClass}`}>{text}</span>
        </Link>
    )
}

NavLink.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string.isRequired,
    icon: PropTypes.node
};

export default NavLink;