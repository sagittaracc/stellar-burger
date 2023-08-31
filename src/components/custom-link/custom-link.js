import { cloneElement } from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomLink = ({to, text, icon, size, end, onClick}) => {
    const textSize = size ? `text_type_main-${size}` : 'text_type_main-default';

    const handleClick = (onClick) => (e) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    }

    return (
        <NavLink end={end} to={to} className="text-decoration-none">
            {({isActive, isPending}) => (
                <>
                    {icon && <span className="pr-2 align-middle">{
                        cloneElement(icon, {type: isActive ? 'primary' : 'secondary'})
                    }</span>}
                    <span onClick={handleClick(onClick)} className={`text ${textSize} text_color_${isActive ? 'primary' : 'inactive'}`}>
                        {text}
                    </span>
                </>
            )}
        </NavLink>
    )
}

CustomLink.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string.isRequired,
    icon: PropTypes.node,
    size: PropTypes.string,
    end: PropTypes.bool
};

export default CustomLink;