import { ReactNode } from "react";

export type TCustomLinkComponent = {
    to: string;
    text: string;
    icon: any;
    size?: string;
    end?: boolean;
};