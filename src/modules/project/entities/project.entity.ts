import { Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Project {

  @PrimaryGeneratedColumn()
  id: bigint

  @String({type: 'unique'})
  name: string

}
