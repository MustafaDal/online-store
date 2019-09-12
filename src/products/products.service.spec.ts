import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return products', async () => {
    const result: Product[] = [];

    expect(await service.findAll()).toEqual(result);
  });

  it('it shoud create a product', async () => {
    const createProductDto: CreateProductDto = {
      name: 'Pasta',
      price: 10,
      active: true,
    };

    const Product: Product = {
      ...createProductDto,
      _id: 1,
    };

    expect(await service.create(createProductDto)).toEqual(Product);
  });

  it('it should return product by id', async () => {
    const _id: number = 1;
    const product: Product = {
      _id,
      name: 'Pasta',
      price: 10,
      active: true,
    };

    expect(await service.findById(_id)).toEqual(product);
  });
});
