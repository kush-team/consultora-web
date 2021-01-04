import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
