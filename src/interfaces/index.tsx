export interface ApiProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem extends ApiProduct {
  count: number;
}
export interface CartStateValue {
  isOpen: boolean;
  cartItems: CartItem[];
}

export interface CartState {
  value: CartStateValue;
}
