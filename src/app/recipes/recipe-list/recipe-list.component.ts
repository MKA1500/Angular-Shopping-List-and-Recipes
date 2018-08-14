import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Testing Recipe',
      'This is simply a test',
      'http://bi.im-g.pl/im/b9/ab/16/z23770809IF,Mojito-to-doskonaly-sposob-na-orzezwienie-w-cieple.jpg'
    ),
    new Recipe(
      'Kanapka z jajkiem i awokado',
      'This is simply a test',
      'http://bi.im-g.pl/im/8f/ae/16/z23783567IF,Pelnowartosciowe-zrodla-bialka--to-miedzy-innymi-m.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
