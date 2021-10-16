import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

getHeroes(): Observable<Hero[] {
  const heroes = of(HEROES);
  return heroes;
}
export class HeroService {

  constructor() { }

}