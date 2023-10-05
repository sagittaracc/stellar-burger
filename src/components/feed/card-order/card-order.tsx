import { FC } from 'react';
import styles from './card-order.module.css'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { TCardOrderComponent } from '../../../types/feed';
import Ingredients from '../ingredients/ingredients';
import { IModalHook } from '../../../types/modal';
import useModal from '../../../hooks/useModal';
import Modal from '../../modal/modal';
import CardOrderDetails from '../card-order-details/card-order-details';

const CardOrder: FC<TCardOrderComponent> = ({ data }) => {
    const { open: modalShown, openModal, closeModal }: IModalHook = useModal();

    return (
        <>
            <div onClick={openModal} className={`${styles.card} p-6 mb-4`}>
                <div className='mb-6'>
                    <span className='text text_type_digits-default'>#{data.number}</span>
                    <span className='float-right text text_type_main-default text_color_inactive'>
                        <FormattedDate date={new Date(data.timestamp)} />
                    </span>
                </div>
                <p className='text text_type_main-medium mb-6'>{data.name}</p>
                <p className={`${styles.status} text text_type_main-default mb-6`}>Готов</p>
                <div className='flex'>
                    <Ingredients list={data.ingredients} maxCount={5} />
                    <div className='col'>
                        <p className='text text_type_digits-medium float-right mt-3'>
                            <span className='mr-2'>{data.price}</span>
                            <CurrencyIcon type="primary" />
                        </p>
                    </div>
                </div>
            </div>
            {
                modalShown &&
                <Modal onClose={closeModal} header={`#${data.number}`}>
                    <CardOrderDetails data={data} />
                </Modal>
            }
        </>
    );
}

export default CardOrder;