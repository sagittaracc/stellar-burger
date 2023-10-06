import { FC } from 'react';
import styles from './stats.module.css';
import { TFeed } from '../../../types/feed';

const Stats: FC<TFeed> = ({ orders, total, totalToday }) => {
    const done = orders.filter(order => order.status === "done");
    const pending = orders.filter(order => order.status === "pending");

    return (
        <div className='mt-20 ml-15'>
            <div className='flex'>
                <div className="col">
                    <h3 className='text text_type_main-medium mb-6'>Готов:</h3>
                    <div className="flex">
                        <div className="col">
                            <div className={`flex columns wrap ${styles.stats}`}>
                                {done.map(order => <p className={`text-success text text_type_digits-default`}>{order.number}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3 className='text text_type_main-medium mb-6'>В работе:</h3>
                    <div className="flex">
                        <div className="col">
                            <div className={`flex columns wrap ${styles.stats}`}>
                                {pending.map(order => <p className={`text-danger text text_type_digits-default`}>{order.number}</p>)}
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