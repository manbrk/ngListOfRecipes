import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  selected: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  OnSelected(recipe: Recipe) {
    this.recipeService.recipeSelected.emit(recipe);
    this.selected = recipe;
    console.log(recipe);
  }

  isActive(recipe: Recipe) {
    return this.selected === recipe;
  }

}
