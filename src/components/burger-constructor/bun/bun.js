import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientPropTypes } from '../../types/ingredient';

const Bun = ({ position, data }) => {
    return (
        <div className="ml-8 mb-4">
            <div className="ml-9">
                <ConstructorElement
                    type={position}
                    isLocked={true}
                    text={data.name + " " + (position === "top" ? "(верх)" : "(низ)")}
                    price={data.price}
                    thumbnail={data.image}
                />
            </div>
        </div>
    );
}

Bun.propTypes = {
    position: PropTypes.string.isRequired,
    data: ingredientPropTypes.isRequired
}

export default Bun;