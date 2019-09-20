import { Component, OnInit } from '@angular/core';
import { Product } from '../product.entity';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //products: { id: string; name: string; price: number; photo: string; }[];
  private products: Product[];  

  constructor() {
    this.products = [
      { id: 'p01', name: 'name 1', price: 100, photo: 'jeans1.jpg' },
      { id: 'p02', name: 'name 2', price: 200, photo: 'jeans2.jpg' },
      { id: 'p03', name: 'name 3', price: 300, photo: 'jeans3.jpg' }
  ];
   }

   findAll(): Product[] {
    return this.products;
}

find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
}

private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id) {
            return i;
        }
    }
    return -1;
}

  ngOnInit() {
  }

}
