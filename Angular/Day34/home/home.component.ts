import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from '../utility/employee';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { DialogService } from '../dialog.service';
import { ToastrService  } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameSearch:string='';
  p:number=1;
empData:any[]=[];
empobj=<Employee>{};
isSelected:boolean=false;
modalRef!: BsModalRef; 
config = {
  animated: true,  
  ignoreBackdropClick: true,
  class: "alert alert-danger"
};

  constructor(private service:HttpService,
    private modalservice:BsModalService,
    private dialogservice:DialogService,
    private toaster:ToastrService) { }

  ngOnInit(): void {
     this.getAllData(); 
  }

  getAllData(){
    this.service.getAllRecord()
    .subscribe((response:any)=>{
      console.log(response);
      this.empData=response;
      
    })
  }

  onEdit(item:any){
    this.isSelected=true;
    this.empobj=item;
  }

  isCheckedRadio(){
    if(this.isSelected)
    return true;
    else 
    return false;
  }

  onUpdate(popup:TemplateRef<any>){
    if(this.isCheckedRadio())
    {
      //Update record to display pop up box

      this.modalRef = this.modalservice.show(        
        popup, this.config);

    }else{
      //alert("Please select Record to be Update...")

      this.toaster.warning("Please select Record to be Update...")

    }
  }

  onDelete(){
    if(this.isCheckedRadio()){
      //display pop up box
      this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
      .afterClosed()
      .subscribe((res)=>{
        console.log(res)
        if(res){
          // delete record
          this.service.DeleteRecord(this.empobj.id)
          .subscribe((response)=>{
            // console.log(response);
            this.toaster.success(response);
            this.getAllData();
          });
        }
      })

    }else{
      //alert("Please select Record to be Delete...")
      this.toaster.error("Please select Record to be Delete...");
    }
  }


}
