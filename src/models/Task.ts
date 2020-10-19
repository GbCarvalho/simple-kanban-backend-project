import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export default class Task {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @Column('decimal')
  state: number;
}
