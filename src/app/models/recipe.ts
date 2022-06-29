export interface Recipe {
  id?:string;
  name:string
  preparationTime:string;
  description:string
  image:string;
  kcal:string
  allergens: string[]
  ingredients: { name: string; amount: number; unit: string }[]
  likes: number;
  mealTime: string;
}