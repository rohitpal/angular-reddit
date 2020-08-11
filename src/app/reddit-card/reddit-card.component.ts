import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reddit-card',
  templateUrl: './reddit-card.component.html',
  styleUrls: ['./reddit-card.component.css']
})

export class RedditCardComponent implements OnInit {

  @Input() post: any;

  constructor() { }

  ngOnInit(): void {
  }

}
