import { Component, Output, EventEmitter } from '@angular/core';

import { sortBy } from '../shared/data';

@Component({
	selector: 'sorts-element',
	templateUrl: './sorting.component.html',
	styleUrls: ['./sorting.component.css']
})

export class SortingComponent {
	@Output() sortItemsByField = new EventEmitter();

	private sortBy = sortBy;

	onSortItemsByField(field) {
		this.sortItemsByField.emit({ field: field });
	}
}
