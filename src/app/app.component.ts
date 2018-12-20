import {Component} from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private test: TestService) {
    test.test().subscribe(data => console.log(data));
  }


}
