import { cloneElement } from "react";
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import { TCustomLinkComponent } from "../../types/link";

const CustomLink: FC<TCustomLinkComponent> = ({to, text, icon, size, end}) => {
    const textSize = size ? `text_type_main-${size}` : 'text_type_main-default';

    return (
        <NavLink end={end} to={to} className="text-decoration-none">
            {({isActive}) => (
                <>
                    {icon && <span className="pr-2 align-middle">{
                        cloneElement(icon, {type: isActive ? 'primary' : 'secondary'})
                    }</span>}
                    <span className={`text ${textSize} text_color_${isActive ? 'primary' : 'inactive'}`}>
                        {text}
                    </span>
                </>
            )}
        </NavLink>
    )
}

export default CustomLink;