import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeDetailPage } from './recipe-detail.page';
import { RecipeDetailRoutingModule } from './recipe-detail-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecipeDetailRoutingModule
    ],
    declarations: [RecipeDetailPage]
})
export class RecipeDetailPageModule { }
