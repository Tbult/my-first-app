import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // ook in index.html
  // selector: '[app-servers]', -- by div
  // selector: app-servers -- by class
  templateUrl: './app.component.html',
  // style moet een array zijn, kan een external file zijn of inline code
  // styleUrls: ['./app.component.css'],
  styles: [`
    h3 {
      color: dodgerblue; 
    }
  `] 
})
export class AppComponent {
  // name = 'Tonke';
}
