import { Module } from '@nestjs/common';
import { ResturantResolver } from './resturants.resolver';

@Module({
  providers: [ResturantResolver],
})
export class ResturantsModule {}
