import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];

  id:number=0;
  title:string='';
  body:string='';
  isHidden:boolean=true;


  constructor(private service:HttpService) { }

  ngOnInit(): void {
      this.getRecord();
  }

  getRecord(){
      this.service.getPost()
      .subscribe((response:any)=>{
        // console.log(response)
        this.posts=response;
      },(myerror)=>{
          // alert("Error Occured....");

          if((myerror.status>=400) || (myerror.staus<=499)){
            alert("Client error occur "+myerror.status);

          }else if(myerror.status>=500 || myerror.staus<=599){
            alert("Server Side error occur");
          }else{
            alert("Unknown error");
          }

      })
  }

  onSend(mytitle:any,mybody:any){
      let obj={
        title:mytitle,
        body:mybody
      }

      this.service.Postdata(obj)
      .subscribe((response)=>{
        console.log(response);
      })

  }

  onEdit(item:any){
      this.id=item.id;
      this.title=item.title;
      this.body=item.body;
      this.isHidden=false;
  }

  onUpdate(){

      let obj={
        id:this.id,
        title:this.title,
        body:this.body
      }

      this.service.UpdateData(obj)
      .subscribe((repsonse)=>{
        console.log(repsonse);
        this.isHidden=true;
      })

  }

  onDelete(id:any){
    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response);
    })
  }

}
