import {Interests} from './interests.model';
import {Experience} from './experience.model';

export class registeredUser {
  id: number;
  interests: Interests[] = [new Interests()];
  experience: Experience[] = [new Experience()];

}
