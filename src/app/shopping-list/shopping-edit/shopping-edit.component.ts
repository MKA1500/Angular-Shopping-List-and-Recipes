import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    // const newIngredient = new Ingredient(value.name, value.amount);
    // this.slService.addIngredient(newIngredient);
    console.log(this.slForm);
  }
}
