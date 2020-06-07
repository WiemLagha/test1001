import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  IpEmailBuilderService,
  Structure,
  TextBlock,
  IPEmail,
} from 'ip-email-builder';
import { OnInit } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  isLoading: ReplaySubject<boolean>;
  email = new BehaviorSubject(
    new IPEmail({
      structures: [
        new Structure('cols_1', [[new TextBlock("I'm a new email")]]),
      ],
    })
  );
 
  constructor(_ngb: IpEmailBuilderService) {
    this.isLoading = _ngb.isLoading;
    _ngb.MergeTags = new Set(['{{firstName}}', '{{lastName}}']);
  }
 
  changeEmail() {
    this.email.next(
      new IPEmail({
        structures: [
          new Structure('cols_1', [
            [new TextBlock("I'm a new block created via subscribtion")],
          ]),
        ],
      })
    );
  }
}
