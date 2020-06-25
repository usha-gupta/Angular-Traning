import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-democomp',
  templateUrl: './democomp.component.html',
  styleUrls: ['./democomp.component.css']
})
export class DemocompComponent implements OnInit {
  public myname:string;
  public res:boolean;
  public hasColor=false;
  public colorChoice="djhgsa";
  public color=getCurrencySymbol;
  public result=false;
  public col="red";
  public whishing="";
  public choices=["Cognizant","IBM","TCS","Infosys","Accenture","cap"];
  enteryAccpect(event){
      console.log(event);
      this.whishing=event.offsetY;
  }
   constructor() {
    
   }

  ngOnInit() {
    this.myname="usha"
    this.res=false;
   
  }

}
