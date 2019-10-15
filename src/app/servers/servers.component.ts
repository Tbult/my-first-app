import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // verwijst naar app-servers component in app.component.html
  template: '<app-server></app-server><app-server></app-server>', // gebruik template of templateUrl. Eén van de twee moet aanwezig zijn
  // templateUrl: './servers.component.html'
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
