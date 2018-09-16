import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Kanapka z jajkiem i awokado',
      'Kanapka z awokado i jajkiem to propozycja na śniadanie albo pomysł na pyszną przekąskę, którą przygotujemy w kilka chwil. Zapraszam Was także na grzanki z awokado i pomidorkami oraz pastę kanapkową z awokado.',
      'http://bi.im-g.pl/im/8f/ae/16/z23783567IF,Pelnowartosciowe-zrodla-bialka--to-miedzy-innymi-m.jpg'
    ),
    new Recipe(
      'Testing Recipe',
      'This is simply a test',
      'http://bi.im-g.pl/im/b9/ab/16/z23770809IF,Mojito-to-doskonaly-sposob-na-orzezwienie-w-cieple.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
