import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;
  myUsername:string='Sumit-Raokhande';

  jsonObj={
    id:8,
    fname:'Sumit raokhande',
    role:'DevOps'
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onPage1(){
    this.router.navigate(['/Page1'])
  }
  onPage2(){
    this.router.navigate(['/Page2',this.myid])
  }
  onPage3(){
    this.router.navigate(['/Page3',this.myid,this.myUsername]);
  }

  onFollower(){
    this.router.navigate(['/Follower']);
  }

  onQueryParameter(){
      this.router.navigate(['/QueryParameter'],{
        queryParams:this.jsonObj
      })
  }

  

}
