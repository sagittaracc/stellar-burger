import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientPropTypes } from '../../types/ingredient';
import styles from './bun.module.css';

const Bun = ({ position, data }) => {
    return (
        <div className="ml-8 mb-4">
            <div className="ml-9">
                {
                    <ConstructorElement
                        type={position}
                        isLocked={true}
                        text={
                            data
                                ? data.name + " " + (position === "top" ? "(верх)" : "(низ)")
                                : 'Перетащите сюда булку'
                        }
                        price={data ? data.price : 0}
                        thumbnail={data ? data.image : ''}
                        extraClass={!data && styles.placeholder}
                    />
                }
            </div>
        </div>
    );
}

Bun.propTypes = {
    position: PropTypes.string.isRequired,
    data: ingredientPropTypes
}

export default Bun;