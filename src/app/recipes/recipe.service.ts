import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Kanapka z jajkiem i awokado',
      'Kanapka z awokado i jajkiem to propozycja na śniadanie albo pomysł na pyszną przekąskę, którą przygotujemy w kilka chwil. Zapraszam Was także na grzanki z awokado i pomidorkami oraz pastę kanapkową z awokado.',
      'http://bi.im-g.pl/im/8f/ae/16/z23783567IF,Pelnowartosciowe-zrodla-bialka--to-miedzy-innymi-m.jpg',
      [
        new Ingredient('jajka', 2),
        new Ingredient('awokado', 2),
        new Ingredient('chleb', 1),
        new Ingredient('majonez', 1),
        new Ingredient('cebula', 1),
        new Ingredient('rukola', 1)
      ]
    ),
    new Recipe(
      'Mohito',
      'Drink mojito to jeden z najpopularniejszych koktajli na świecie. Jak zrobić mojito? Zobacz sprawdzony przepis na mojito prosto ze słonecznej Kuby!',
      'http://bi.im-g.pl/im/b9/ab/16/z23770809IF,Mojito-to-doskonaly-sposob-na-orzezwienie-w-cieple.jpg',
      [
        new Ingredient('limonka', 1),
        new Ingredient('cukier', 2),
        new Ingredient('mięta', 3),
        new Ingredient('rum', 1),
        new Ingredient('lód', 1)
      ]
    )
  ];

  getRecipes() {
    // will return not a reference of the array
    // but the copy that can be freely changed later
    return this.recipes.slice();
  }
}
