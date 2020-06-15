import { Injectable } from '@angular/core';
import {Goal} from '../goal'

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  getGoals(){
    return [
      new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2020,7,3)),
      new Goal(2,'Buy Cookies','I have to buy cookies for the parrot', new Date(2020,6,17)),
      new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon', new Date(2020,7,20)),
      new Goal(4,'Get Dog Food','Pupper likes expensive snacks', new Date(2020,7,12)),
      new Goal(5,'Solve math homework','Damn Math', new Date(2020,7,15)),
      new Goal(6,'Plot my world domination plan','Cause I am an evil overlord', new Date(2020,6,12)),
    ];
  }

  constructor() { }
}
