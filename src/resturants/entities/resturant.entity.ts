import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Resturant {
  @Field(() => String)
  name: string;
}
