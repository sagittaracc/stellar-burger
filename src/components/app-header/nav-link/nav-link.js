import { cloneElement } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NvLink = ({to, active, text, icon}) => {
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

NvLink.propTypes = {
    to: PropTypes.string,
    active: PropTypes.bool,
    text: PropTypes.string.isRequired,
    icon: PropTypes.node
};

export default NvLink;