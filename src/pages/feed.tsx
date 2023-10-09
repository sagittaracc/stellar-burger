import { FC, useEffect } from 'react';
import Orders from '../components/feed/orders/orders';
import Stats from '../components/feed/stats/stats';
import { feed } from '../stubs/feed';
import { useDispatch } from 'react-redux';
import { WS_CONNECTION_START } from '../services/ws/actions';

const Feed: FC = () => {
    const dispath = useDispatch<any>();

    useEffect(() => {
        dispath({type: WS_CONNECTION_START});
    }, []);

    return (
        <div className="h-100 pt-10 flex">
            <div className="col">
                <Orders />
            </div>
            <div className="col">
                <Stats />
            </div>
        </div>
    );
}

export default Feed;