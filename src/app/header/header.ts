import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // CAN BE OMITTED IF USING ANGULAR 19+
  imports: [],
  // NOT RECOMMENDED, ALWAYS FOCUS ON SEPARATION OF CONCERNS
  // templateUrl: '<h1>Hello World</h1>'
  templateUrl: './header.html',
  styleUrl: './header.css',
  // THIS IS POSSIBLE... BUT AVOID IN-LINE STYLING...
  // styles: ['h1 { color: red }']
})
export class Header {

}
