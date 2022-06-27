export interface Recipe {
  id?:string;
  name:string
  preparationTime:string;
  description:string
  image:string;
  kcal:string
  allergens: string[]
  ingredients: {[key: string]: string}
  mealTime: string;
}