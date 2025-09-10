import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  extras?: Array<{
    name: string;
    price: number;
  }>;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (newItem) => {
        const existingItem = get().items.find(item => item.id === newItem.id);
        
        if (existingItem) {
          set(state => ({
            items: state.items.map(item =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          }));
        } else {
          set(state => ({
            items: [...state.items, { ...newItem, quantity: 1 }]
          }));
        }
      },
      
      removeItem: (id) => {
        set(state => ({
          items: state.items.filter(item => item.id !== id)
        }));
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        
        set(state => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        }));
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const extrasPrice = item.extras?.reduce((sum, extra) => sum + extra.price, 0) || 0;
          return total + (item.price + extrasPrice) * item.quantity;
        }, 0);
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'bongs-kitchen-cart'
    }
  )
);