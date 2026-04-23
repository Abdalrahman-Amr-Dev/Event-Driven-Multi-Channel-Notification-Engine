import { AppBaseEntity } from 'src/modules/core/database/base.entity';
import { Entity } from 'typeorm';

@Entity()
export class User extends AppBaseEntity {}
