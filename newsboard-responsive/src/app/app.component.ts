import { Component } from '@angular/core';
import { ConfigService } from './configuration/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  constructor(private config: ConfigService) {
    this.title = config.apiUrl;
  }
}
