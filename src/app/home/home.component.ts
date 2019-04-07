import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { TooltipComponent } from '../tooltip/tooltip.component';
const ESCAPE_KEYCODE = 27;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
  }
  constructor() { }

  @ViewChild('btnOne')
  btnOne: TooltipComponent;
  @ViewChild('btnTwo')
  btnTwo: TooltipComponent;

  ngOnInit() {
  }

  hideTooltip(event) {
  }
  showTooltip(event) {
    if (event != null && event.id != null) {
      if (event.id == this.btnOne.id) {
        this.btnOne.state = true;
        this.btnTwo.state = false;
      }
      else {
        this.btnTwo.state = true;
        this.btnOne.state = false;
      }
    }
  } 
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === ESCAPE_KEYCODE) {
      this.btnTwo.state = false;
      this.btnOne.state = false;
    }
  }
}
