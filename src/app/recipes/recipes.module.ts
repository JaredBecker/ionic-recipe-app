import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPage } from './recipes.page';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeRoutingModule } from './recipe-routing.module';



@NgModule({
    declarations: [
        RecipesPage,
        RecipeItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecipeRoutingModule
    ],
})
export class RecipesPageModule { }
