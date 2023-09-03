import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
    @InjectConnection() private connection: Connection,
  ) {}

  create(createProductDto: CreateProductDto) {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  findAll() {
    return;
  }

  findOne(id: number) {
    return id;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return updateProductDto;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
