import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DataService } from '../shared/data.service';

@Component({
	selector: 'checkboxes-element',
	templateUrl: './checkboxes.component.html',
	styleUrls: ['./checkboxes.component.css'],
	providers: [DataService]
})

export class CheckboxesComponent {
	@Input() filters;
	@Output() toggleShopCategory = new EventEmitter();
	@Output() selectAllCategories = new EventEmitter();

	constructor(private dataService: DataService) {}

	onSelectAllCategories(arr) {
		if (arr.some(elem => elem.selected == false)) {
			this.dataService.selectAllFilters(arr);
			this.selectAllCategories.emit();
		}
	}

	onToggleShopCategory(obj: { category: string, selected: boolean }) {
		this.dataService.toggle(obj);
		this.toggleShopCategory.emit();
	}
}
