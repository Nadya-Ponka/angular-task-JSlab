import { Component, Input } from '@angular/core';
	
@Component({
  selector: 'shop-element',
  templateUrl: './shop-element.component.html',
  styleUrls: ['./shop-element.component.css']
})

export class ShopElementComponent {
	@Input() item;
}