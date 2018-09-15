import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { items, filters } from '../shared/data';

@Injectable()
export class DataService {

	private dataSource = new BehaviorSubject<any[]>([items, filters]);
	items = this.dataSource.asObservable();;
	filters = this.dataSource.asObservable();

	constructor() { }

	updatedDataSelection(items, filters) {
		this.dataSource.next([this.items, this.filters]);
	}

	public getData(): any {
		return this.dataSource;
	}

	toggle(obj: { category: string, selected: boolean }) {
		obj.selected = !obj.selected;
	}

	selectAllFilters(arr) {
		arr.forEach(elem => elem.selected = true);
	}

	sortByField(field, arr) {
		function sorted(a, b) {
			if (field == 'price') {
				if (a[field] < b[field])
					return -1;
				if (a[field] > b[field])
					return 1;
				return 0;
			}
			else {
				if (a[field].toString().toUpperCase() < b[field].toString().toUpperCase())
					return -1;
				if (a[field].toString().toUpperCase() > b[field].toString().toUpperCase())
					return 1;
				return 0;
			}
		}
		arr.sort(sorted);
	}
}
