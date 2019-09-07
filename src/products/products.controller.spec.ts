import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';

describe('Products Controller', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return products', () => {
    expect(controller.findAll()).toBe([
      {
        name: 'Pasta',
        price: 10,
        active: true,
      },
    ]);
  });

  it('it shoud create a product', () => {
    const createProductDto: CreateProductDto = {
      name: 'Pasta',
      price: 10,
      active: true,
    };

    expect(controller.create(createProductDto)).toBe(true);
  });

  it('it should return product by id', () => {
    expect(controller.findById({ id: 10 })).toBe({
      name: 'Pasta',
      price: 10,
      active: true,
    });
  });
});
