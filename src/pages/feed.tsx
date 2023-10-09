import { FC, useEffect } from 'react';
import Orders from '../components/feed/orders/orders';
import Stats from '../components/feed/stats/stats';
import { feed } from '../stubs/feed';
import { useDispatch, useSelector } from 'react-redux';
import { WS_CONNECTION_START } from '../services/ws/actions';
import { hasData } from '../services/ws/selectors';

const Feed: FC = () => {
    const dispath = useDispatch<any>();
    const loaded = useSelector(hasData);

    useEffect(() => {
        dispath({ type: WS_CONNECTION_START });
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