import { FC, useEffect } from 'react';
import Orders from '../components/feed/orders/orders';
import Stats from '../components/feed/stats/stats';
import { useSelector } from 'react-redux';
import { feedLoadedSelector } from '../services/feed/selectors';
import { CONNECTION_CLOSE, CONNECTION_START } from '../services/feed/actions';
import { useDispatch } from '../types';

const Feed: FC = () => {
    const dispatch = useDispatch();
    const loaded = useSelector(feedLoadedSelector);

    useEffect(() => {
        dispatch({ type: CONNECTION_START });
        return () => { dispatch({ type: CONNECTION_CLOSE }) };
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