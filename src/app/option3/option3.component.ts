import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-option3',
  templateUrl: './option3.component.html',
  styleUrls: ['./option3.component.css']
})
export class Option3Component implements OnInit {
  @Input() Object1:any
  constructor() { }

  ngOnInit(): void {
  }

}
