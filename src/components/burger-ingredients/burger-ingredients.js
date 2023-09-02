import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropTypes } from "../types/ingredient";
import Modal from "../modal/modal";
import IngredientDetails from "./ingredient-details/ingredient-details";
import IngredientBox from "./ingredient-box/ingredient-box";
import { useInView } from 'react-intersection-observer';
import { ingredientPreview } from "../../services/preview/selectors";
import { closePreview } from "../../services/preview/actions";
import { previewFinish } from "../../utils/preview";



const BurgerIngredients = ({ data }) => {
    const [tab, setTab] = useState('bun');

    const threshold = 0.45;
    const [bunsRef, bunsInView] = useInView({threshold});
    const [saucesRef, saucesInView] = useInView({threshold});
    const [mainRef, mainInView] = useInView({threshold});

    useEffect(() => {
        let tab = null;

        if (bunsInView) {
            tab = 'bun';
        }
        else if (saucesInView) {
            tab = 'sauce';
        }
        else if (mainInView) {
            tab = 'main';
        }

        setTab(tab);
    }, [bunsInView, saucesInView, mainInView])

    const [preview, ingredient] = useSelector(ingredientPreview);
    const dispath = useDispatch();

    const closeModal = () => {
        previewFinish();
        dispath(closePreview());
    }

    return (
        <div className="flex columns text text_type_main-default h-100">
            <h1>Соберите бургер</h1>

            <div className="flex">
                <Tab value="bun" active={tab === 'bun'}>Булки</Tab>
                <Tab value="sauce" active={tab === 'sauce'}>Соусы</Tab>
                <Tab value="main" active={tab === 'main'}>Начинки</Tab>
            </div>

            <div className="custom-scroll full-space overflow-auto">
                <IngredientBox tab={bunsRef} title="Булки" category="bun" data={data} />
                <IngredientBox tab={saucesRef} title="Соусы" category="sauce" data={data} />
                <IngredientBox tab={mainRef} title="Начинки" category="main" data={data} />
            </div>
            {
                preview && ingredient &&
                <Modal header="Детали ингредиента" onClose={closeModal}>
                    <IngredientDetails ingredient={ingredient} />
                </Modal>
            }
        </div>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.shape({
        bun: PropTypes.arrayOf(ingredientPropTypes),
        sauce: PropTypes.arrayOf(ingredientPropTypes),
        main: PropTypes.arrayOf(ingredientPropTypes),
    })
};

export default BurgerIngredients;