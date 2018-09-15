import { Component} from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'not-found-app',
		templateUrl: './not-found.component.html',
		styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
	constructor(private location: Location) {}
	
	backCatalogue(): void {
		this.location.back();
	}
 }