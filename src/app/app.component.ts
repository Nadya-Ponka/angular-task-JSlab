import { Component } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

import { items } from './shared/data';
import { DataService } from './shared/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [DataService]

})
export class AppComponent {
	constructor(private dataService: DataService) { }

	title: string = 'angular-task-JSlab';
}
