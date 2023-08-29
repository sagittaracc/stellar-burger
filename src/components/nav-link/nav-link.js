import { cloneElement, useEffect, useState } from "react";
import { Link, useMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({to, text, icon, size}) => {
    const [active, setActive] = useState(false);
    const match = useMatch(to);

    useEffect(() => {
        setActive(match);
    }, [match]);

    const textClass = active ? 'text_color_primary' : 'text_color_inactive';
    const textSize = size ? `text_type_main-${size}` : 'text_type_main-default';
    let iconElement = null;

    if (icon) {
        const iconType = active ? 'primary' : 'secondary';
        iconElement = cloneElement(icon, {type: iconType});
    }

    return (
        <Link to={to} className="text-decoration-none">
            {iconElement && <span className="pr-2 align-middle">{iconElement}</span>}
            <span className={`text ${textSize} ${textClass}`}>{text}</span>
        </Link>
    )
}

NavLink.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string.isRequired,
    icon: PropTypes.node,
    size: PropTypes.string,
};

export default NavLink;