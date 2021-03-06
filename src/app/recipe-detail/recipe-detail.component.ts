import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  version = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onEdit(selectedMode) {
    this.recipeService.modeSelected.emit(selectedMode);
    console.log(selectedMode);
  }

  onDelete(recipe) {
    this.recipeService.deleteRecipe(recipe);
    this.recipeService.recipeSelected.emit(null);
  }

  onVersion() {
    this.version = ! this.version;
  }
}
