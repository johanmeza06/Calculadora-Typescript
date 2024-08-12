export type MenuItem = {
  id: number;
  name: string;
  price: number;
};

// Extends MenuItem with quantity
export type OrderItem = MenuItem & {
  quantity: number;
};
