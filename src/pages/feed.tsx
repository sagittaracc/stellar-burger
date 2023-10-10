import { FC, useEffect } from 'react';
import Orders from '../components/feed/orders/orders';
import Stats from '../components/feed/stats/stats';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../services/feed/selectors';
import { CONNECTION_CLOSED, CONNECTION_START } from '../services/feed/actions';

const Feed: FC = () => {
    const dispatch = useDispatch<any>();
    const [loaded,] = useSelector(getData);

    useEffect(() => {
        dispatch({ type: CONNECTION_START });
        return () => dispatch({ type: CONNECTION_CLOSED });
    }, []);

    return (
        <>
            {
                loaded &&
                <div className="h-100 pt-10 flex">
                    <div className="col">
                        <Orders />
                    </div>
                    <div className="col">
                        <Stats />
                    </div>
                </div>
            }
        </>
    );
}

export default Feed;