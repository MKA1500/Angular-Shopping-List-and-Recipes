import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
  // all the child components will receive the same instance of that service
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
