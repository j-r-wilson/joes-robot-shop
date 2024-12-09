import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bot-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  products: any;
  filter: string = '';

  constructor(
    private cartSvc: CartService, 
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productSvc.getProducts().subscribe(products => {
      this.products = products;
    });
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    })
  }
  
  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['cart'])
  }

  getFilteredProducts() {
    return this.filter === ''
    ? this.products
    : this.products.filter((product: { category: string; }) => product.category === this.filter);
  }
}

