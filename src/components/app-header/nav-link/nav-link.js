import PropTypes from 'prop-types';

const NavLink = ({ link, text, type, children }) => {
    var colorClass = type === 'active' ? 'text_color_primary' : 'text_color_inactive';

    return (
        <a href={link} className="text-decoration-none">
            <span className="pr-2 align-middle">{children}</span>
            <span className={`text text_type_main-default ${colorClass}`}>{text}</span>
        </a>
    )
}

NavLink.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    children: PropTypes.node
};

export default NavLink;