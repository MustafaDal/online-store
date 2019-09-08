import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];
  private uniqueId = 0;

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async findById(Id: number): Promise<Product> {
    return this.products.find(item => item._id === Id);
  }

  async create(product: Product): Promise<Product> {
    this.uniqueId = this.uniqueId + 1;

    const newProduct: Product = {
      ...product,
      _id: this.uniqueId,
    };

    this.products.push(newProduct);

    return newProduct;
  }
}
