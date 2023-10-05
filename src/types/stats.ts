import { TCard } from "./feed";

export type TStatsComponent = {
    feed: {
        orders: Array<TCard>,
        total: number,
        totalToday: number
    }
};