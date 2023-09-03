import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import mongoose from 'mongoose';

// import XYZ from 'XYZ/another/schema';

@Schema()
export class Product {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  // reference another schema

  // @Prop({
  //   required: true,
  //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'XYZ' }],
  // })
  // xyz: ZYZ;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
