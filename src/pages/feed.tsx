import { FC } from 'react';
import Orders from '../components/feed/orders/orders';
import Stats from '../components/feed/stats/stats';
import { feed } from '../stubs/feed';

const Feed: FC = () => {
    return (
        <div className="h-100 pt-10 flex">
            <div className="col">
                <Orders {...feed} />
            </div>
            <div className="col">
                <Stats {...feed} />
            </div>
        </div>
    );
}

export default Feed;