import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reddit-options',
  templateUrl: './reddit-options.component.html',
  styleUrls: ['./reddit-options.component.css']
})
export class RedditOptionsComponent implements OnInit {

  constructor() { }

  @Output() optionSelected= new EventEmitter<string>();

  ngOnInit(): void {
  }

  optionsToggled(option: string){
    this.optionSelected.emit(option);
  }
}
