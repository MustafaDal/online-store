import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { FindProductDto } from './dto/find-product-dto';

describe('Products Controller', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should return products', async () => {
    const result: Product[] = [
      {
        name: 'Pasta',
        price: 10,
        active: true,
      },
    ];

    jest.spyOn(service, 'findAll').mockResolvedValue(result);
    expect(await controller.findAll()).toEqual(result);
  });

  it('it shoud create a product', async () => {
    const createProductDto: CreateProductDto = {
      name: 'Pasta',
      price: 10,
      active: true,
    };

    jest.spyOn(service, 'create').mockResolvedValue(createProductDto);
    expect(await controller.create(createProductDto)).toEqual(createProductDto);
  });

  it('it should return product by id', async () => {
    const product: Product = {
      _id: 1,
      name: 'Pasta',
      price: 10,
      active: true,
    };

    const dto: FindProductDto = { id: 1 };

    jest.spyOn(service, 'findById').mockResolvedValue(product);
    expect(await controller.findById(dto)).toEqual(product);
  });
});
