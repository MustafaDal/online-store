import { IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class FindProductDto {
  @ApiModelProperty()
  @IsInt()
  readonly id: number;
}
