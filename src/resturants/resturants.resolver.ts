import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ResturantResolver {
  @Query((returns) => Boolean)
  isPizzaGood(): Boolean {
    return true;
  }
}
