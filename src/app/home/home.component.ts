import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../shared/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [DataService]
})

export class HomeComponent {
	private title: string = 'angular-task-JSlab';
	private message: string = '';
	private data = [];
	private filters = [];
	private items = [];
	private carouselTileItems: Array<any> = [];

	constructor(private router: Router, private dataService: DataService) { }

	ngOnInit() {
		this.dataService.getData().subscribe(data => { this.items = data[0], this.filters = data[1] });

		for (let i = 0; i < this.filters.length; i++) {
			this.carouselTileItems[i] = this.items.filter(elem => (elem.whose == this.filters[i].category));
		}

/* 		the same thing - how better?
		this.filters.map((elem, index) => this.carouselTileItems[index]=this.items.filter(e => (e.whose == this.filters[index].category));
 */	}

	toggleShopCategory() {
		this.dataService.getData().subscribe(data => this.filters = data[1]);
		this.message = "";

		if (this.filters.every(elem => elem.selected == false)) {
			this.message = "No category is selected. Please, make a choice";
		}
	}

	selectAllCategories() {
		this.dataService.getData().subscribe(data => this.filters = data[1]);
		this.message = "";
	}

	sortItemsByField($event) {
		this.dataService.sortByField($event.field, this.items);
		this.dataService.getData().subscribe(data => this.items = data[0]);
		for (let i = 0; i < this.filters.length; i++) {
			this.carouselTileItems[i] = this.items.filter(elem => (elem.whose == this.filters[i].category));
		}
	}
}
