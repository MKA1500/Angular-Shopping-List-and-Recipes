import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {
  ingredientsChange = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Herbes de Provence', 1),
    new Ingredient('Onion', 2)
  ];

  getIngredients() {
    // return copy:
    return this.ingredients.slice();
    // but in this case we will need to inform our component that some new data
    // is available => ingredientsChange
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    // this above would emit many events, so:
    this.ingredients.push(...ingredients);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}
