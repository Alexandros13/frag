import { Component } from '@angular/core';
import jsonfile from './menou/data.json';

export interface data {
  name?:string
  surname?:string,
  age?:number,
  siblings?:siblings[]
  }

  export interface siblings{
    name1?:string,age1?:number,sex1?:string
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frag';
  
  dataObj:any=jsonfile
  
}
