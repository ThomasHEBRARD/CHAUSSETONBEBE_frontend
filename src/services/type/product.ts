import { BaseType } from "./common";

export interface ProductGroup extends BaseType {}

export interface Product extends BaseType {
  stock?: number;
  price: number;
  overriden_price?: number;
  shipping_price?: number;
  is_linked?: boolean;
  image?: any;
  group: ProductGroup;
}
