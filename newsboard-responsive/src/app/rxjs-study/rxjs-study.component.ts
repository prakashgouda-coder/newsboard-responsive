import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs-study',
  templateUrl: './rxjs-study.component.html',
  styleUrls: ['./rxjs-study.component.scss']
})
export class RxjsStudyComponent implements OnInit {

  constructor() {
    // fromEvent(document,'click')
    // .pipe(scan(count=>count+1,0))
    // .subscribe(count=>console.log(`Clicked' ${count} times`))

    fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));
  }

  ngOnInit() {
  }



}
