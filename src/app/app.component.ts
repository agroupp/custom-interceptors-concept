import { Component } from '@angular/core';
import { DialogsService } from './dialogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly dialogs: DialogsService) {}

  openQuestionDialog() {
    this.dialogs.openQuestionDialog({
      question: 'The Ultimate Question of Life, the Universe, and Everything',
    }).subscribe(({ result }) => console.log(result));
  }
}
