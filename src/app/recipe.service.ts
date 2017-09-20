import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  modeSelected = new EventEmitter<string>();

  dateCreated = new Date();

  private recipes: Recipe[] = [
    new Recipe('масло из барбершопа', 'Великолепное масло из барбершопа на Смузийной 7, cобраное чувственными' +
      ' руками известных коучей-селебрети. Подается в винтажных емкостях.', this.dateCreated,
      [
        {dateModify: new Date(), name: 'масло', content: 'Просто масло'},
        {dateModify: new Date(), name: 'масло традиционное', content: 'Ароматное масло из барбершопа'},
      ]),
    new Recipe('крафтовый борщ', 'Прекрасный борщ от бьюти-влогера набравший невероятное количество лайков' +
      ' и подписчиков на YouTube канале. Сметана используется в качестве драйвера для инициализации борща.', this.dateCreated, []),
    new Recipe('вкусняки', 'Набор различных органических ништяков, собранных веганами-вейперами из земли не ' +
      'содержащей удобрений. С любовью упакованные в дизайнерские пакеты с уникальной брендовой ' +
      'маркировкой.', this.dateCreated, []),
    new Recipe('морковный стейк', 'Прожарку стейка опытный гриллер определяет на глаз по оттенкам от массаки до' +
      ' сольферино. Чугунная ретро-сковорода позволяет гармонично раскрыть все вкусовые достоинства блюда.', this.dateCreated, []),
    new Recipe('смузи из водомерок', 'Все собранные на хантинге водомерки аккуратно разложены по инстаграммным ' +
      'профилям и обрамленым хэштегами популярных трендов.', this.dateCreated, []),
    new Recipe('панкейки из артишоков', 'Панкейки щедро заправленны планго и кронатой подаются во время бранча. ' +
      'Прекрасно апгрейдят ежедневный фейслифт.', this.dateCreated, []),

  ];

  getRecipes() {
    // return this.recipes.slice();
    return this.recipes;
  }

  deleteRecipe(recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
