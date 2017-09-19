import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedRecipe: Recipe;
  selectedMode: string;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );

    this.recipeService.modeSelected
      .subscribe(
        (mode: string) => {
          this.selectedMode = mode;
        }
      );
  }

  onAdd(selectedMode) {
    this.selectedMode = selectedMode;
  }

  onEdit(selectedMode) {
    this.selectedMode = selectedMode;
  }
}
