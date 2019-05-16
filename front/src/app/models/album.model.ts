import {Deserialize} from './deserialize';

export class Album implements Deserialize {
  id: number;
  name: string;
  numberOfTracks: string;
  price: number;
  description: string;

 deserialize(input: any): this {
   return Object.assign(this, input);
 }

}
