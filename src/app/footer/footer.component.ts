import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.Component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
public className="footerStyleDemo";
public hasNot=false;
public hasYes=true;
public traffiecred;
public traffiecwait;
public traffiecredgo;

public messageClass = {
  "footerStyle": !this.hasNot
}


  constructor() { }

  ngOnInit() {
    this.traffiecred=true;
    this.traffiecwait=true;
    this.traffiecredgo=true;

  }

}
