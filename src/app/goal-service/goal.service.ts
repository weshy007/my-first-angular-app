import { Injectable } from '@angular/core';
import { goals } from '../goal-list';


@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return goals
  }


  constructor() { }
}
