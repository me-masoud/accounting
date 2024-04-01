import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('projects')
export class Project {

  @PrimaryGeneratedColumn()
  id: number

  @Column({type:'text' , unique:true})
  name: string

}
