import { FC } from 'react';
import styles from './stats.module.css';
import { useSelector } from 'react-redux';
import { TFeed } from '../../../types/feed';
import { getData } from '../../../services/feed/selectors';
import { TOrder } from '../../../types/order';

const Stats: FC = () => {
    const [ , orderList, total, totalToday ] = useSelector(getData);
    const orders = orderList as Array<TOrder>;
    const done = orders.filter(order => order.status === "done");
    const pending = orders.filter(order => order.status === "pending");

    return (
        <div className='mt-20 ml-15'>
            <div className='flex'>
                <div className="col mr-5">
                    <h3 className='text text_type_main-medium mb-6'>Готов:</h3>
                    <div className="flex">
                        <div className="col">
                            <div className={`flex columns wrap ${styles.stats}`}>
                                {done.slice(0, 30).map(order => <p key={order._id} className={`m-1 text-success text text_type_digits-default`}>{order.number}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3 className='text text_type_main-medium mb-6'>В работе:</h3>
                    <div className="flex">
                        <div className="col">
                            <div className={`flex columns wrap ${styles.stats}`}>
                                {pending.slice(0, 30).map(order => <p key={order._id} className={`m-1 text-danger text text_type_digits-default`}>{order.number}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text text_type_main-medium mt-15'>Выполнено за всё время:</h3>
                <p className='text text_type_digits-large'>{total}</p>
            </div>
            <div>
                <h3 className='text text_type_main-medium mt-15'>Выполнено за сегодня:</h3>
                <p className='text text_type_digits-large'>{totalToday}</p>
            </div>
        </div>
    );
}

export default Stats;