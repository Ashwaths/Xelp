import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { Product } from './product.entity';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private itemsInCart: Product[] = [];
  constructor() { 
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }
  public addToCart(item: Product) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public getItems(): Observable<Product[]> {
    return this.itemsInCartSubject;
  }
}
