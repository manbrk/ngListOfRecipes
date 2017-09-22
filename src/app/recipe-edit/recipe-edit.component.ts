import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  @Input() modeSelected: string;
  @Input() recipe: Recipe;
  @ViewChild('f') signupForm: NgForm;
  newRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.modeSelected === 'edit') {
      this.recipe.name = this.signupForm.value.name;
      this.recipe.content = this.signupForm.value.content;
      this.recipe.dateCreated = new Date();
      this.recipe.versions.push({
        dateModify: new Date(),
        name: this.signupForm.value.name,
        content: this.signupForm.value.content
      });

      this.recipeService.recipeSelected.emit(this.recipe);
      this.recipeService.modeSelected.emit(null);
    }

    if (this.modeSelected === 'add') {
      this.newRecipe = new Recipe(this.signupForm.value.name, this.signupForm.value.content, new Date(), [{
        dateModify: new Date(),
        name: this.signupForm.value.name,
        content: this.signupForm.value.content
      }]);
      this.recipeService.addRecipe(this.newRecipe);

      this.recipeService.recipeSelected.emit(this.newRecipe);
      this.recipeService.modeSelected.emit(null);
    }
  }

  onCancel() {
    this.recipeService.modeSelected.emit(null);
  }
}
