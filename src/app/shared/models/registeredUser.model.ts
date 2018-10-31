import {Interests} from './interests.model';
import {Experience} from './experience.model';

export class RegisteredUser {
  id: number;
  interests: Interests[] = [new Interests()];
  experience: Experience[] = [new Experience()];
  name: string;
  email: string;
}
