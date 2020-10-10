import { BaseProps } from './common';

export interface ProductGroupProps extends BaseProps {}

export interface ProductProps extends BaseProps {
    stock?: number;
    price: number;
    overriden_price?: number;
    description?: string;
    shipping_price?: number;
    is_linked?: boolean;
    image?: any;
    group?: ProductGroupProps;
}
