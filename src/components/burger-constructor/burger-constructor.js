import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { ingridientPropTypes } from "../types/ingridient";

const Cart = ({ ingridient }) => {
    return (
        <div className="flex align-center pb-4">
            <span className="mr-4"><DragIcon type="primary" /></span>
            <ConstructorElement
                text={ingridient.name}
                price={ingridient.price}
                thumbnail={ingridient.image}
            />
        </div>
    );
}

const Ingridients = ({ data }) => {
    return (
        <div className="full-space ml-8 custom-scroll overflow-auto">
            {
                data.main &&
                data.main.map(ingridient => <Cart ingridient={ingridient} />)
            }
        </div>
    );
}

const BurgerConstructor = ({ data }) => {
    let sum = 0;
    data.main && data.main.forEach(ingridient => {
        sum += ingridient.price
    });

    return (
        <div className="flex columns h-100">
            <div className="mt-25 ml-8 mb-4">
                <div className="ml-9">
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={1255}
                        thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
                    />
                </div>
            </div>

            <Ingridients data={data} />

            <div className="ml-8">
                <div className="ml-9">
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={1255}
                        thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
                    />
                </div>
            </div>

            <div className="ml-8 mt-4 mb-4 mt-4">
                <div className="float-right">
                    <span className="mr-2 text_type_main-large">{1255 + 1255 + sum}</span>
                    <CurrencyIcon type="primary" />
                    <Button extraClass="ml-6" htmlType="button" type="primary" size="large">
                        Нажми на меня
                    </Button>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    ingridient: ingridientPropTypes.isRequired
}

Ingridients.propTypes = {
    data: PropTypes.shape({
        bun: PropTypes.arrayOf(ingridientPropTypes),
        sauce: PropTypes.arrayOf(ingridientPropTypes),
        main: PropTypes.arrayOf(ingridientPropTypes),
    })
};

BurgerConstructor.propTypes = {
    data: PropTypes.shape({
        bun: PropTypes.arrayOf(ingridientPropTypes),
        sauce: PropTypes.arrayOf(ingridientPropTypes),
        main: PropTypes.arrayOf(ingridientPropTypes),
    })
};

export default BurgerConstructor;