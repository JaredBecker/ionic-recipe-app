import { Component } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss']
})
export class RecipesPage {
    public recipes!: Recipe[];

    constructor(private recipesService: RecipesService) { }

    public ionViewWillEnter(): void {
        this.recipes = this.recipesService.getAllRecipes();
    }
}
