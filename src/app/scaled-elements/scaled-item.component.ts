import { Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
	selector: 'scaled-item',
	templateUrl: './scaled-item.component.html',
	styleUrls: ['./scaled-item.component.css'],
})

export class ScaledItemComponent {
	private querySubscription: Subscription;

	private price: number;
	private colors: string[];
	private size: string[];
	private image: string;
	private whose: string;
	private id: number;

	constructor(private activateRoute: ActivatedRoute, private location: Location) {
		this.querySubscription = activateRoute.queryParams.subscribe(
			            (queryParam: {}) => {
			                this.price = queryParam['price'];
			                this.colors = queryParam['colors'];
											this.size = queryParam['size'];
											this.image = queryParam['image'];
											this.whose = queryParam['whose'];
			            }
			        );
	}

	backCatalogue(): void {
		this.location.back();
	}
}
