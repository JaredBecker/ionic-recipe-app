import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Schnitzel',
            imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
            ingredients: ['French Fries', 'Pork Meat', 'Salad']
        },
        {
            id: 'r2',
            title: 'Spaghetti',
            imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
            ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
        }
    ];

    constructor() { }

    public getAllRecipes(): Recipe[] {
        return [...this.recipes];
    }

    public getRecipe(recipeId: string): Recipe {
        return {
            ...this.recipes.find(recipe => {
                return recipe.id === recipeId;
            })
        } as Recipe;
    }

    public deleteRecipe(recipeId: string): void {
        this.recipes = this.recipes.filter(recipe => {
            return recipe.id !== recipeId;
        });
    }
}
