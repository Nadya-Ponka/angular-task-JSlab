import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material';
import { NguCarouselModule } from '@ngu/carousel';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './page-not-found/not-found.component';
import { ScaledItemComponent } from './scaled-elements/scaled-item.component';
import { ShopComponent } from './shop/shop.component';
import { CheckboxesComponent } from './checkboxes-component/checkboxes.component';
import { ShopElementComponent } from './shop-element/shop-element.component';
import {DataService} from './shared/data.service';
import { SortingComponent } from './sorting/sorting.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent }, 
	{ path: 'scaled/:id', component: ScaledItemComponent },
	{ path: 'scaled/:id/**', redirectTo: '**', pathMatch:'full' },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NotFoundComponent,
		ScaledItemComponent,
		ShopElementComponent,
		ShopComponent,
		SortingComponent,
		CheckboxesComponent
	],
	imports: [
		BrowserModule,
		MatSelectModule,
		NguCarouselModule,
		RouterModule.forRoot(appRoutes),
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})

export class AppModule { }
