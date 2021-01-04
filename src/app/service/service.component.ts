import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input() public title: string = "";
  @Input() public description: string = "";

  constructor() {}

  ngOnInit(): void {
  }

}
