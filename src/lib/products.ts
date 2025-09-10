export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'kota' | 'combo' | 'rib-kota' | 'chips' | 'extras';
  ingredients: string[];
  extras?: Array<{
    name: string;
    price: number;
  }>;
}

export const products: Product[] = [
  // Regular Kota Menu
  {
    id: 'kota-basic',
    name: 'Basic Kota',
    price: 20,
    description: 'Atchar, Polony, Lettuce, Chips, Full Vienna',
    image: '/src/assets/kota-variety.jpg',
    category: 'kota',
    ingredients: ['Atchar', 'Polony', 'Lettuce', 'Chips', 'Full Vienna']
  },
  {
    id: 'kota-cheese',
    name: 'Cheese Kota',
    price: 25,
    description: 'Atchar, Polony, Lettuce, Chips, Cheese, Full Vienna',
    image: '/src/assets/kota-variety.jpg',
    category: 'kota',
    ingredients: ['Atchar', 'Polony', 'Lettuce', 'Chips', 'Cheese', 'Full Vienna']
  },
  {
    id: 'kota-russian',
    name: 'Russian Kota',
    price: 35,
    description: 'Atchar, Polony, Lettuce, Chips, Cheese, Russian',
    image: '/src/assets/kota-variety.jpg',
    category: 'kota',
    ingredients: ['Atchar', 'Polony', 'Lettuce', 'Chips', 'Cheese', 'Russian']
  },
  {
    id: 'kota-patty',
    name: 'Patty Kota',
    price: 45,
    description: 'Atchar, Polony, Lettuce, Chips, Cheese, Full Vienna, Patty',
    image: '/src/assets/kota-variety.jpg',
    category: 'kota',
    ingredients: ['Atchar', 'Polony', 'Lettuce', 'Chips', 'Cheese', 'Full Vienna', 'Patty']
  },
  {
    id: 'kota-russian-patty',
    name: 'Russian & Patty Kota',
    price: 55,
    description: 'Atchar, Polony, Lettuce, Chips, Cheese, Full Russian, Patty',
    image: '/src/assets/kota-variety.jpg',
    category: 'kota',
    ingredients: ['Atchar', 'Polony', 'Lettuce', 'Chips', 'Cheese', 'Full Russian', 'Patty']
  },
  {
    id: 'kota-vienna-patty',
    name: 'Vienna & Patty Kota',
    price: 65,
    description: 'Atchar, Polony, Lettuce, Chips, Cheese, Full Russian, Full Vienna, Patty',
    image: '/src/assets/kota-variety.jpg',
    category: 'kota',
    ingredients: ['Atchar', 'Polony', 'Lettuce', 'Chips', 'Cheese', 'Full Russian', 'Full Vienna', 'Patty']
  },
  {
    id: 'kota-full-house',
    name: 'Full House Kota',
    price: 150,
    description: 'Atchar, Polony, Lettuce, Chips, 2x Cheese, 2x Full Russian, 2x Full Vienna, 2x Patty, 2x Egg',
    image: '/src/assets/kota-hero.jpg',
    category: 'kota',
    ingredients: ['Atchar', 'Polony', 'Lettuce', 'Chips', '2x Cheese', '2x Full Russian', '2x Full Vienna', '2x Patty', '2x Egg']
  },
  
  // Rib Kota Menu
  {
    id: 'rib-kota-basic',
    name: 'Rib Kota',
    price: 85,
    description: 'Polony, Lettuce, Chips, Cheese, Bacon, Pickles, Egg',
    image: '/src/assets/rib-kota.jpg',
    category: 'rib-kota',
    ingredients: ['Polony', 'Lettuce', 'Chips', 'Cheese', 'Bacon', 'Pickles', 'Egg']
  },
  {
    id: 'rib-kota-premium',
    name: 'Premium Rib Kota',
    price: 100,
    description: 'Polony, Lettuce, Chips, Cheese, Full Russian, Full Vienna, Rib Burger, Bacon, Pickles, Patty, Egg',
    image: '/src/assets/rib-kota.jpg',
    category: 'rib-kota',
    ingredients: ['Polony', 'Lettuce', 'Chips', 'Cheese', 'Full Russian', 'Full Vienna', 'Rib Burger', 'Bacon', 'Pickles', 'Patty', 'Egg']
  },
  
  // Combos
  {
    id: 'combo-basic',
    name: 'Basic Combo',
    price: 50,
    description: '3 Slices, Polony, Egg, Cheese, Lettuce, Russian & Chips',
    image: '/src/assets/kota-variety.jpg',
    category: 'combo',
    ingredients: ['3 Slices', 'Polony', 'Egg', 'Cheese', 'Lettuce', 'Russian', 'Chips']
  },
  {
    id: 'combo-vienna',
    name: 'Vienna Combo',
    price: 80,
    description: '3 Slices, Polony, Egg, Cheese, Lettuce, Russian, Vienna, Patty & Chips',
    image: '/src/assets/kota-variety.jpg',
    category: 'combo',
    ingredients: ['3 Slices', 'Polony', 'Egg', 'Cheese', 'Lettuce', 'Russian', 'Vienna', 'Patty', 'Chips']
  },
  {
    id: 'combo-large',
    name: 'Large Combo',
    price: 130,
    description: '4 Slices, Polony, Egg, Cheese, Lettuce, 2x Vienna, 2x Russian, 2x Patty & Large Chips',
    image: '/src/assets/kota-variety.jpg',
    category: 'combo',
    ingredients: ['4 Slices', 'Polony', 'Egg', 'Cheese', 'Lettuce', '2x Vienna', '2x Russian', '2x Patty', 'Large Chips']
  }
];

export const extras = [
  { name: 'Egg', price: 5 },
  { name: 'Cheese', price: 5 },
  { name: 'Vienna', price: 5 },
  { name: 'Russian', price: 12 },
  { name: 'Patty', price: 15 }
];

export const chips = [
  { name: 'Small Chips', price: 20 },
  { name: 'Medium Chips', price: 30 },
  { name: 'Large Chips', price: 40 }
];