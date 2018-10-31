import {RegisteredUser} from './registeredUser.model';

export class Applied {
  id: number;
  position: string;
  productionName: string;
  productionDate: Date;
  registeredUser: RegisteredUser = new RegisteredUser();
}
