import { FC, useEffect } from 'react';
import Orders from '../components/feed/orders/orders';
import Stats from '../components/feed/stats/stats';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../services/feed/selectors';
import { CONNECTION_START } from '../services/feed/actions';

const Feed: FC = () => {
    const dispath = useDispatch<any>();
    const [loaded, ] = useSelector(getData);

    useEffect(() => {
        dispath({ type: CONNECTION_START });
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