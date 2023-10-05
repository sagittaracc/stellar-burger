import { FC } from 'react';
import Orders from '../components/feed/orders/orders';
import Stats from '../components/feed/stats/stats';

const Feed: FC = () => {
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