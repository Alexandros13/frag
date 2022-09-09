import { Component, OnInit } from '@angular/core';
import jsonfile from './data.json';
@Component({
  selector: 'app-menou',
  templateUrl: './menou.component.html',
  styleUrls: ['./menou.component.css']
})

export class MenouComponent implements OnInit {
  public stoixeio1:boolean=false
  public stoixeio2:boolean=false
  public stoixeio3:boolean=false
  dataObj:any=jsonfile
  Object:any=jsonfile
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.stoixeio1=!this.stoixeio1;
  }
  onClick2(){
    this.stoixeio2=!this.stoixeio2;
  }
  onClick3(){
    this.stoixeio3=!this.stoixeio3;
  }
}
