import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.page.html',
    styleUrls: ['./recipe-detail.page.scss']
})
export class RecipeDetailPage implements OnInit {
    public loaded_recipe!: Recipe;

    constructor(
        private activatedRoute: ActivatedRoute,
        private recipesService: RecipesService,
        private router: Router,
        private alertCtrl: AlertController
    ) { }

    public ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('recipeId')) {
                const recipe_id = paramMap.get('recipeId');

                if (recipe_id) {
                    this.loaded_recipe = this.recipesService.getRecipe(recipe_id);
                }

                return;
            }

            this.router.navigate(['/recipes']);
        });
    }

    /**
     * Fires off alert to make sure the users wants to delete the recipe
     */
    public onDeleteRecipe(): void {
        this.alertCtrl
            .create({
                header: 'Are you sure?',
                message: 'Do you really want to delete the recipe?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Delete',
                        handler: () => {
                            this.recipesService.deleteRecipe(this.loaded_recipe.id);
                            this.router.navigate(['/recipes']);
                        }
                    }
                ]
            })
            .then(alertEl => {
                alertEl.present();
            });
    }
}
