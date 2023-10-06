import { TCard } from "./feed";

export type TStatsComponent = {
    orders: Array<TCard>,
    total: number,
    totalToday: number
};