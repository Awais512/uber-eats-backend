import { Query, Resolver } from '@nestjs/graphql';
import { Resturant } from './entities/resturant.entity';

@Resolver()
export class ResturantResolver {
  @Query((returns) => Resturant)
  myResturant() {
    return true;
  }
}
