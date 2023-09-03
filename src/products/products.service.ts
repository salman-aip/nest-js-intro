import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Products[] = [
    {
      id: 343,
      name: 'Product 1',
      price: 500,
    },
    {
      id: 987,
      name: 'Product 2',
      price: 999,
    },
  ];

  create(createProductDto: CreateProductDto) {
    return createProductDto;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return updateProductDto;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
