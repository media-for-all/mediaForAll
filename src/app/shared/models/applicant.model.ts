import {RegisteredUser} from './registeredUser.model';
import {Experience} from './experience.model';
import {Interests} from './interests.model';

export class Applicant {
  applicantKey: number;
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  joinDate: Date;
  userName: string;
  password: string;
  isAdmin: boolean;
  experience: Experience[] = [new Experience()];
  interest:  Interests[] = [new Interests()];
}
