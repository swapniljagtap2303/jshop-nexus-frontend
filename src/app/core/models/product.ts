
export interface Product {

  id?:number;

  name?:string;

  description?:string;

  // image:string;

  price:number;

  oldPrice:number;

  rating?:number;

  stock?:number;

  category?:string;
  
  discountPrice?: number;

  imageUrls?: string[];


}