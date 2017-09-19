import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  modeSelected = new EventEmitter<string>();

  dateCreated = new Date();

  private recipes: Recipe[] = [
    new Recipe('масло из барбершопа', 'Великолепное масло из барбершопа на Смузийной 7', this.dateCreated,
      [
        {dateModify: new Date(), name: 'масло', content: 'Просто масло'},
        {dateModify: new Date(), name: 'масло из', content: 'Просто масло из барбершопа'},
      ]),
    new Recipe('крафтовый борщ', 'Прекрасный борщ от бьюти-влогера', this.dateCreated, []),
    new Recipe('вкусняки', 'Набор различных органических ништяков, собранных веганами-вейперами из земли не ' +
      'содержащей удобрений с любовью упакованные в крафтовые, дизайнерские пакеты с разнообразной брендовой' +
      'маркировкой', this.dateCreated, [])
  ];

  getRecipes() {
    // return this.recipes.slice();
    return this.recipes;
  }

  deleteRecipe(recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
  //
  // addRecipe(recipe: Recipe) {
  //   this.recipes.push(recipe);
  //   console.log('add button press');
  // }
}
