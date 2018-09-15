import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import { Router } from '@angular/router';

@Component({
	selector: 'shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.css'],
})

export class ShopComponent implements OnInit {
	@Input() filters;
	@Input() message;
	@Input() items;
	@Input() carouselTileItems;

	public carouselTile: NguCarousel;

	constructor(private router: Router) { }

	ngOnInit() {
		this.carouselTile = {
			grid: { xs: 2, sm: 2, md: 3, lg: 3, all: 0 },
			point: {
				visible: true,
				pointStyles: `
			.ngucarouselPoint {
				display:inline-block;
				color:#aa9b77;
				list-style-type: none;
				text-align: center;
				padding: 12px;
				margin: 0 5px -12px;
				font-size:16px;
				white-space: nowrap;
				overflow: auto;
				box-sizing: border-box;
			}
			.ngucarouselPoint li {
				display: none;
				border-radius: 50%;
				border: 1px solid rgba(0, 0, 0, 0.55);
				padding: 4px;
				margin: 0 3px;
				transition-timing-function: cubic-bezier(.17, .67, .83, .67);
				transition: .4s;
			}
			.ngucarouselPoint li.active {
					background: #aa9b77;
					border: 1px solid #aa9b77;
					transform: scale(1.2);
			}
		`
			},
			load: 4,
			touch: true
		};
	}

	goTo(obj) {
		this.router.navigate(['/scaled/' + obj.id],
			{
				queryParams: {
					'price': obj.price,
					'colors': obj.colors,
					'size': obj.size,
					'image': obj.image,
					'whose': obj.whose,
				}
			});
	}
}
