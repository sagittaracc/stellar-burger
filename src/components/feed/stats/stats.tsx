import { FC } from 'react';
import styles from './stats.module.css';

const Stats: FC = () => {
    return (
        <div className='mt-20 ml-15'>
            <div className='flex'>
                <div className="col">
                    <h3 className='text text_type_main-medium mb-6'>Готов:</h3>
                    <div className="flex">
                        <div className="col">
                            <p className={`${styles.orderNumber} text text_type_digits-default`}>22097</p>
                            <p className={`${styles.orderNumber} text text_type_digits-default`}>22097</p>
                            <p className={`${styles.orderNumber} text text_type_digits-default`}>22097</p>
                            <p className={`${styles.orderNumber} text text_type_digits-default`}>22097</p>
                            <p className={`${styles.orderNumber} text text_type_digits-default`}>22097</p>
                        </div>
                        <div className="col">
                            <p className={`${styles.orderNumber} text text_type_digits-default`}>22096</p>
                            <p className={`${styles.orderNumber} text text_type_digits-default`}>22096</p>
                            <p className={`${styles.orderNumber} text text_type_digits-default`}>22096</p>
                            <p className={`${styles.orderNumber} text text_type_digits-default`}>22096</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3 className='text text_type_main-medium mb-6'>В работе:</h3>
                </div>
            </div>
            <div>
                <h3 className='text text_type_main-medium mt-15'>Выполнено за всё время:</h3>
                <p className='text text_type_digits-large'>21723</p>
            </div>
            <div>
                <h3 className='text text_type_main-medium mt-15'>Выполнено за сегодня:</h3>
                <p className='text text_type_digits-large'>60</p>
            </div>
        </div>
    );
}

export default Stats;