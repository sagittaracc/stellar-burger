import { cloneElement } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({to, text, active, icon}) => {
    const textClass = active ? 'text_color_primary' : 'text_color_inactive';
    let iconElement = null;

    if (icon) {
        const iconType = active ? 'primary' : 'secondary';
        iconElement = cloneElement(icon, {type: iconType});
    }

    return (
        <Link to={to} className="text-decoration-none">
            {iconElement && <span className="pr-2 align-middle">{iconElement}</span>}
            <span className={`text text_type_main-default ${textClass}`}>{text}</span>
        </Link>
    )
}

NavLink.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    icon: PropTypes.node
};

export default NavLink;