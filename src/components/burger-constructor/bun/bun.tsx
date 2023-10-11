import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
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
                        text={data.name + " " + (position === "top" ? "(верх)" : "(низ)")}
                        price={data.price}
                        thumbnail={data.image}
                    />
                }
            </div>
        </div>
    );
}

export default Bun;