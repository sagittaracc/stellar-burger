import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

const BurgerConstructor = () => {
    return (
        <div className="mt-25 ml-8 flex columns gap-2">
            <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
        </div>
    );
}

export default BurgerConstructor;