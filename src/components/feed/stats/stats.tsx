import { FC } from 'react';
import { TStatsComponent } from '../../../types/stats';

const Stats: FC<TStatsComponent> = ({ feed }) => {
    const done = feed.orders.filter(order => order.status === "done");
    return (
        <div className='mt-20 ml-15'>
            <div className='flex'>
                <div className="col">
                    <h3 className='text text_type_main-medium mb-6'>Готов:</h3>
                    <div className="flex">
                        <div className="col">
                            {
                                done.map(order => <p className={`text-success text text_type_digits-default`}>{order.number}</p>)
                            }
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3 className='text text_type_main-medium mb-6'>В работе:</h3>
                </div>
            </div>
            <div>
                <h3 className='text text_type_main-medium mt-15'>Выполнено за всё время:</h3>
                <p className='text text_type_digits-large'>{feed.total}</p>
            </div>
            <div>
                <h3 className='text text_type_main-medium mt-15'>Выполнено за сегодня:</h3>
                <p className='text text_type_digits-large'>{feed.totalToday}</p>
            </div>
        </div>
    );
}

export default Stats;