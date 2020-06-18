import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';
import {GoalService} from '../goal-service/goal.service';
import {AlertService} from '../alert-service/alert.service';
import {HttpClient} from '@angular/common/http'
import {Quote} from '../quote-class/quote'
import {QuoteRequestService} from '../quote-http/quote-request.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: any;
  alertService: any;
  quote: Quote;

  goToUrl(id){[
    this.router.navigate(['/goals',id])
  ]
}
goalDelete(index){
  // if(isComplete){
   let toDelete = confirm(`Are you syre you want to delete ${this.goals[index].name}?` );
   if (toDelete) {
     this.goals.splice(index,1);
     this.alertService.alertMe("The Goal has been deleted")     
     }
   }

  //goals: Goal[];
  //alertService:AlertService;
  //quote:Quote;
  
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  
//toggleDetails(index){
  //this.goals[index].showDescription = !this.goals [index].showDescription;
//}
  //completeGoal(isComplete,index){
    //if(isComplete) {
      //this.goals. splice(index,1);
    //}
  //}
  
 
  //constructor(goalService:GoalService, alertService:AlertService, private http:HttpClient, private quoteService:QuoteRequestService, private router:Router)
  constructor(goalService:GoalService, alertService:AlertService, private quoteService:QuoteRequestService, private router:Router,private http:HttpClient) {
    this.goals = goalService.getGoals()
    this.alertService = alertService;
   }

  ngOnInit(){
    interface ApiResponse{
      author:string;
      quote:string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      //Succesful API request
      this.quote = new Quote(data.author, data.quote)
    },err=>{
      this.quote = new Quote("Winston Churchill","Never never give up!")
      console.log("An error occurred")
  })

  }
 
}
