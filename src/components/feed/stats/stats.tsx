import { FC } from 'react';
import styles from './stats.module.css';
import { useSelector } from 'react-redux';
import { getFeed } from '../../../services/feed/selectors';

const Stats: FC = () => {
    const feed = useSelector(getFeed);
    const done = feed?.orders.filter(order => order.status === "done");
    const pending = feed?.orders.filter(order => order.status === "pending");

    return (
        <div className='mt-20 ml-15'>
            <div className='flex'>
                <div className="col mr-5">
                    <h3 className='text text_type_main-medium mb-6'>Готов:</h3>
                    <div className="flex">
                        <div className="col">
                            <div className={`flex columns wrap ${styles.stats}`}>
                                {done && done.slice(0, 30).map(order => <p key={order._id} className={`m-1 text-success text text_type_digits-default`}>{order.number}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3 className='text text_type_main-medium mb-6'>В работе:</h3>
                    <div className="flex">
                        <div className="col">
                            <div className={`flex columns wrap ${styles.stats}`}>
                                {pending && pending.slice(0, 30).map(order => <p key={order._id} className={`m-1 text-danger text text_type_digits-default`}>{order.number}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text text_type_main-medium mt-15'>Выполнено за всё время:</h3>
                <p className='text text_type_digits-large'>{feed?.total}</p>
            </div>
            <div>
                <h3 className='text text_type_main-medium mt-15'>Выполнено за сегодня:</h3>
                <p className='text text_type_digits-large'>{feed?.totalToday}</p>
            </div>
        </div>
    );
}

export default Stats;