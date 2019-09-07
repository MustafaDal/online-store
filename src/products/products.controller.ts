import { Controller, Get, Req, Post, Param, Body } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
import { FindProductDto } from './dto/find-product-dto';

@ApiUseTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findById(@Param() params: FindProductDto): Promise<Product> {
    return await this.productsService.findById(Number(params.id));
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<void> {
    await this.productsService.create(createProductDto);
  }
}
