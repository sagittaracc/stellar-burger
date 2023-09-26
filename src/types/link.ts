import { ReactElement } from "react";

export type TCustomLinkComponent = {
    to: string;
    text: string;
    icon: ReactElement;
    size?: string;
    end?: boolean;
};