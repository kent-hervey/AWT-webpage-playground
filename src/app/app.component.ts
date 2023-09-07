import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
name: any;
onClickMe() {
throw new Error('Method not implemented.');
}

  title: string = 'Automated Web webpage Testing Playground';

constructor(private titleService: Title) {
      titleService.setTitle(this.title);
  }

}

