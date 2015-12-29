import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector: 'hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} Details</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  </div>
  `,
  inputs: ['hero']
})
export class HeroDetailComponent {
  public hero: Hero;
}
