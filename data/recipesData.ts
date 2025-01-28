export interface Author {
  id: string;
  name: string;
  avatar: any;
}

export interface Recipe {
  id: string;
  title: string;
  image: any;
  author: Author;
  category?: string;
  ingredients?: string[];
  instructions?: string[];
}

export const authors: Author[] = [
  {
    id: '1',
    name: 'Alice Fola',
    avatar: require('@/assets/images/avatars/alice.png'),
  },
  {
    id: '2',
    name: 'James Spadar',
    avatar: require('@/assets/images/avatars/james.png'),
  },
  {
    id: '3',
    name: 'Agnes',
    avatar: require('@/assets/images/avatars/agnes.png'),
  },
  {
    id: '4',
    name: 'Natalia Luca',
    avatar: require('@/assets/images/avatars/natalia.png'),
  },
  {
    id: '5',
    name: 'Navabi Beljis',
    avatar: require('@/assets/images/avatars/navabi.png'),
  },
];

export const popularRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Healthy Taco Salad with fresh vegetable',
    image: require('@/assets/images/taco-salad.png'),
    author: authors[0],
    category: 'Lunch',
    ingredients: [
      '2 cups mixed greens',
      '1/2 lb ground turkey',
      '1 cup cherry tomatoes',
      '1/2 cup black beans',
      'Taco seasoning',
      'Avocado for garnish'
    ],
    instructions: [
      'Brown the ground turkey in a pan over medium heat.',
      'Add taco seasoning to the meat and stir well.',
      'Wash and chop all vegetables.',
      'Arrange greens in a bowl and top with seasoned meat.',
      'Add tomatoes, beans, and sliced avocado.',
      'Serve with your favorite dressing.'
    ]
  },
  {
    id: '2',
    title: 'Bowl of noodle with beef',
    image: require('@/assets/images/taco-salad.png'),
    author: authors[1],
    category: 'Dinner',
    ingredients: [
      '200g rice noodles',
      '300g sliced beef',
      '2 cups beef broth',
      'Bean sprouts',
      'Green onions',
      'Soy sauce',
      'Ginger and garlic'
    ],
    instructions: [
      'Soak rice noodles in hot water for 15 minutes.',
      'Stir-fry beef with ginger and garlic.',
      'Cook noodles in beef broth until tender.',
      'Add the cooked beef to the noodles.',
      'Top with bean sprouts and green onions.',
      'Season with soy sauce to taste.'
    ]
  },
  {
    id: '3',
    title: 'Sunny Egg & Toast Avocado',
    image: require('@/assets/images/taco-salad.png'),
    author: authors[2],
    category: 'Breakfast',
    ingredients: [
      '2 slices sourdough bread',
      '1 ripe avocado',
      '2 fresh eggs',
      'Red pepper flakes',
      'Salt and pepper',
      'Extra virgin olive oil'
    ],
    instructions: [
      'Toast the bread until golden brown.',
      'Mash the avocado and spread on toast.',
      'Fry eggs sunny side up in olive oil.',
      'Place eggs on top of avocado toast.',
      'Season with salt, pepper, and red pepper flakes.',
      'Serve immediately while warm.'
    ]
  },
  {
    id: '4',
    title: 'Easy homemade beef burger',
    image: require('@/assets/images/taco-salad.png'),
    author: authors[3],
    category: 'Lunch',
    ingredients: [
      '500g ground beef',
      'Burger buns',
      'Lettuce leaves',
      'Sliced tomatoes',
      'Sliced cheese',
      'Red onion',
      'Mayonnaise and ketchup'
    ],
    instructions: [
      'Form beef into patties and season well.',
      'Grill burgers to desired doneness.',
      'Toast the burger buns lightly.',
      'Add cheese to burgers while still hot.',
      'Assemble with lettuce, tomato, and onion.',
      'Add condiments and serve.'
    ]
  },
  {
    id: '5',
    title: 'Half boiled egg sandwich',
    image: require('@/assets/images/taco-salad.png'),
    author: authors[0],
    category: 'Breakfast',
    ingredients: [
      '4 fresh eggs',
      'Whole grain bread',
      'Butter',
      'Fresh herbs',
      'Salt and pepper',
      'Mayonnaise'
    ],
    instructions: [
      'Boil eggs for 6-7 minutes until half-boiled.',
      'Toast bread slices until golden.',
      'Butter the toast while warm.',
      'Peel and slice the eggs.',
      'Layer eggs on bread, season well.',
      'Add herbs and serve.'
    ]
  },
  {
    id: '6',
    title: 'Japanese-style Pancakes',
    image: require('@/assets/images/peanuts.png'),
    author: authors[1],
    category: 'Breakfast',
    ingredients: [
      '2 eggs',
      '3/4 cup milk',
      '1 cup flour',
      'Baking powder',
      'Vanilla extract',
      'Maple syrup',
      'Butter'
    ],
    instructions: [
      'Separate egg whites and yolks.',
      'Beat egg whites until stiff peaks form.',
      'Mix other ingredients with yolks.',
      'Fold in egg whites gently.',
      'Cook in ring molds until fluffy.',
      'Serve with maple syrup and butter.'
    ]
  },
  {
    id: '7',
    title: 'Fresh Mediterranean Salad',
    image: require('@/assets/images/chowmin.png'),
    author: authors[2],
    category: 'Lunch',
    ingredients: [
      'Mixed greens',
      'Cherry tomatoes',
      'Cucumber',
      'Red onion',
      'Feta cheese',
      'Kalamata olives',
      'Olive oil and lemon dressing'
    ],
    instructions: [
      'Wash and chop all vegetables.',
      'Slice onions thinly.',
      'Cube feta cheese.',
      'Mix vegetables in a large bowl.',
      'Add olives and feta.',
      'Dress with olive oil and lemon juice.'
    ]
  },
  {
    id: '8',
    title: 'Grilled Salmon with Asparagus',
    image: require('@/assets/images/egg-toast.png'),
    author: authors[3],
    category: 'Dinner',
    ingredients: [
      'Salmon fillets',
      'Fresh asparagus',
      'Lemon',
      'Garlic',
      'Olive oil',
      'Fresh dill',
      'Salt and pepper'
    ],
    instructions: [
      'Preheat grill to medium-high.',
      'Season salmon with herbs and lemon.',
      'Trim and oil asparagus.',
      'Grill salmon for 4-5 minutes per side.',
      'Grill asparagus until tender-crisp.',
      'Serve with lemon wedges.'
    ]
  }
];

export const categories = [
  'All',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Appetizer',
  'Dessert',
  'Vegetarian',
  'Seafood'
];

export const categoryRecipes: Recipe[] = [
  // Breakfast Recipes
  {
    id: 'b1',
    title: 'Classic French Toast',
    image: require('@/assets/images/taco-salad.png'),
    author: authors[0],
    category: 'Breakfast',
    ingredients: [
      'Bread slices',
      'Eggs',
      'Milk',
      'Vanilla extract',
      'Cinnamon',
      'Maple syrup'
    ],
    instructions: [
      'Whisk eggs, milk, vanilla, and cinnamon.',
      'Dip bread slices in mixture.',
      'Cook on griddle until golden brown.',
      'Serve with maple syrup.'
    ]
  },
  {
    id: 'b2',
    title: 'Overnight Oats with Berries',
    image: require('@/assets/images/pancai.png'),
    author: authors[1],
    category: 'Breakfast',
    ingredients: [
      'Rolled oats',
      'Almond milk',
      'Chia seeds',
      'Mixed berries',
      'Honey',
      'Nuts'
    ]
  },
  
  // Lunch Recipes
  {
    id: 'l1',
    title: 'Quinoa Buddha Bowl',
    image: require('@/assets/images/chowmin.png'),
    author: authors[2],
    category: 'Lunch',
    ingredients: [
      'Quinoa',
      'Roasted chickpeas',
      'Avocado',
      'Sweet potato',
      'Kale',
      'Tahini dressing'
    ]
  },
  {
    id: 'l2',
    title: 'Chicken Caesar Wrap',
    image: require('@/assets/images/chowmin.png'),
    author: authors[3],
    category: 'Lunch',
    ingredients: [
      'Grilled chicken',
      'Romaine lettuce',
      'Parmesan cheese',
      'Caesar dressing',
      'Tortilla wraps'
    ]
  },

  // Dinner Recipes
  {
    id: 'd1',
    title: 'Shrimp Scampi Pasta',
    image: require('@/assets/images/noodle.png'),
    author: authors[0],
    category: 'Dinner',
    ingredients: [
      'Linguine pasta',
      'Large shrimp',
      'Garlic',
      'White wine',
      'Lemon',
      'Parsley'
    ]
  },
  {
    id: 'd2',
    title: 'Herb-Roasted Chicken',
    image: require('@/assets/images/chicken.png'),
    author: authors[1],
    category: 'Dinner',
    ingredients: [
      'Whole chicken',
      'Fresh herbs',
      'Garlic',
      'Lemon',
      'Olive oil',
      'Root vegetables'
    ]
  },

  // Appetizer Recipes
  {
    id: 'a1',
    title: 'Bruschetta',
    image: require('@/assets/images/taco-salad.png'),
    author: authors[2],
    category: 'Appetizer',
    ingredients: [
      'Baguette',
      'Tomatoes',
      'Fresh basil',
      'Garlic',
      'Olive oil',
      'Balsamic glaze'
    ]
  },
  {
    id: 'a2',
    title: 'Spinach Artichoke Dip',
    image: require('@/assets/images/noodle.png'),
    author: authors[3],
    category: 'Appetizer',
    ingredients: [
      'Spinach',
      'Artichoke hearts',
      'Cream cheese',
      'Parmesan',
      'Garlic',
      'Tortilla chips'
    ]
  },

  // Dessert Recipes
  {
    id: 'ds1',
    title: 'Chocolate Lava Cake',
    image: require('@/assets/images/chips.png'),
    author: authors[0],
    category: 'Dessert',
    ingredients: [
      'Dark chocolate',
      'Butter',
      'Eggs',
      'Sugar',
      'Flour',
      'Vanilla ice cream'
    ]
  },
  {
    id: 'ds2',
    title: 'Berry Cheesecake',
    image: require('@/assets/images/chicken.png'),
    author: authors[1],
    category: 'Dessert',
    ingredients: [
      'Cream cheese',
      'Graham crackers',
      'Mixed berries',
      'Sugar',
      'Eggs',
      'Vanilla extract'
    ]
  },

  // Vegetarian Recipes
  {
    id: 'v1',
    title: 'Mushroom Risotto',
    image: require('@/assets/images/cabbage.png'),
    author: authors[2],
    category: 'Vegetarian',
    ingredients: [
      'Arborio rice',
      'Mixed mushrooms',
      'Vegetable broth',
      'White wine',
      'Parmesan',
      'Fresh thyme'
    ]
  },
  {
    id: 'v2',
    title: 'Vegetable Curry',
    image: require('@/assets/images/avocado.png'),
    author: authors[3],
    category: 'Vegetarian',
    ingredients: [
      'Mixed vegetables',
      'Coconut milk',
      'Curry paste',
      'Rice',
      'Fresh cilantro'
    ]
  },

  // Seafood Recipes
  {
    id: 's1',
    title: 'Grilled Mahi Mahi',
    image: require('@/assets/images/pancai.png'),
    author: authors[0],
    category: 'Seafood',
    ingredients: [
      'Mahi mahi fillets',
      'Lime',
      'Garlic',
      'Cilantro',
      'Olive oil',
      'Mango salsa'
    ]
  },
  {
    id: 's2',
    title: 'Seafood Paella',
    image: require('@/assets/images/peanuts.png'),
    author: authors[1],
    category: 'Seafood',
    ingredients: [
      'Bomba rice',
      'Mixed seafood',
      'Saffron',
      'Bell peppers',
      'Peas',
      'Seafood stock'
    ]
  }
];

// Helper function to get recipes by category
export const getRecipesByCategory = (category: string): Recipe[] => {
  if (category === 'All') {
    return categoryRecipes;
  }
  return categoryRecipes.filter(recipe => recipe.category === category);
}; 