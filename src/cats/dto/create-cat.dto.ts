import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  bio: string;

  @IsBoolean()
  isAdopted: boolean;
}
