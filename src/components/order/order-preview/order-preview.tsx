import { FC } from 'react';
import styles from './order-preview.module.css';
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import Order from "../order";
import IngredientList from "../../ingredient-list/ingredient-list";
import { IModalHook } from "../../../types/modal";
import useModal from "../../../hooks/useModal";
import { TOrderPreviewComponent } from "../../../types/order";

const OrderPreview: FC<TOrderPreviewComponent> = ({ order, ingredients, cost, status }) => {
    const {
        open: modalShown,
        openModal,
        closeModal
    }: IModalHook = useModal();

    return (
        <>
            <div onClick={openModal} className={`${styles.card} p-6 mb-4`}>
                <div className='mb-6'>
                    <span className='text text_type_digits-default'>#{order.number}</span>
                    <span className='float-right text text_type_main-default text_color_inactive'>
                        <FormattedDate date={new Date(order.createdAt)} />
                    </span>
                </div>
                <p className='text text_type_main-medium mb-6'>{order.name}</p>
                {status}
                <div className='flex'>
                    <IngredientList list={ingredients} maxCount={5} />
                    <div className='col'>
                        <p className='text text_type_digits-medium float-right mt-3'>
                            <span className='mr-2'>{cost}</span>
                            <CurrencyIcon type="primary" />
                        </p>
                    </div>
                </div>
            </div>
            {
                modalShown &&
                <Modal onClose={closeModal} header={`#${order.number}`}>
                    <Order order={order} preview={false} />
                </Modal>
            }
        </>
    );
}

export default OrderPreview;