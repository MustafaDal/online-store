import { IsString, IsInt, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiModelProperty()
  @IsString()
  readonly name: string;

  @ApiModelProperty()
  @IsInt()
  readonly price: number;

  @ApiModelProperty()
  @IsBoolean()
  readonly active: boolean;
}
