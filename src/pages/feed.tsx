import { FC } from 'react';
import Orders from '../components/feed/orders/orders';
import Stats from '../components/feed/stats/stats';
import { feed } from '../stubs/orders';

const Feed: FC = () => {
    return (
        <div className="h-100 pt-10 flex">
            <div className="col">
                <Orders feed={feed} />
            </div>
            <div className="col">
                <Stats feed={feed} />
            </div>
        </div>
    );
}

export default Feed;