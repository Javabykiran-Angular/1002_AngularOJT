import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  incorrect:string='';

  constructor(private service:LoginService,
              private router:Router,
              private title:Title) { }
  

  ngOnInit(): void {
    this.setImageToDocument();
    this.title.setTitle("Login | Project Work")
  }

  setImageToDocument(){
      document.body.className='bg_background';
  }

  onSubmit(f:NgForm){

    let obj={
      email:f.value.email,
      password:f.value.password
    }
    this.service.login(obj)
    .subscribe((response:any)=>{
      console.log(response);
      if(response.msg==='Valid User'){
        sessionStorage.setItem("username",response.user.username);
       sessionStorage.setItem("email",response.user.email);
        this.router.navigate(['/home']);
      }else{
        this.incorrect=response.msg;
      }
    })

  }


  ngOnDestroy(): void {
    document.body.className='';
  }

}
