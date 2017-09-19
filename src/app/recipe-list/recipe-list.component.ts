import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  @Output() addMode = new EventEmitter<string>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  OnSelected(recipe: Recipe) {
    this.recipeService.recipeSelected.emit(recipe);
    this.selected = recipe;
    this.addMode.emit(null);

    console.log(recipe);
  }

  isActive(recipe: Recipe) {
    return this.selected === recipe;
  }

  onAdd(selectedMode) {
    this.addMode.emit(selectedMode);
  }

}
