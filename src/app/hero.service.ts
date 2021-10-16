import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})

getHeroes(): Hero[] {
  return HEROES;
}
export class HeroService {

  constructor() { }

}