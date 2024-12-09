import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalogue/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter()

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }

  getDiscountedProducts(product: IProduct) {
    return { 
      strikethrough: product.discount > 0,
    };
  }

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }

}
