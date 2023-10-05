import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './bun.module.css';
import { FC } from 'react';
import { TBunComponent } from '../../../types/ingredient';

const Bun: FC<TBunComponent> = ({ position, data }) => {
    return (
        <div className="ml-8 mb-4 pr-5">
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
                        extraClass={data ? '' : styles.placeholder}
                    />
                }
            </div>
        </div>
    );
}

export default Bun;