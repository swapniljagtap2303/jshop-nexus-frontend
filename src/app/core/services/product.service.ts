import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api =
  'http://localhost:9094/api/products';

  constructor(
    private http:HttpClient
  ) {}

  getAllProducts() {

    return this.http.get(this.api);

  }

  getProduct(id:number) {

    return this.http.get(
      `${this.api}/${id}`
    );

  }

}