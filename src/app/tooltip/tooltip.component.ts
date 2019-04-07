import { Component, OnInit, ViewChild, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.sass']
})
export class TooltipComponent implements OnInit {
  @Input('tooltipTitle') tooltipTitle: string;
  @Input('id') id: string;
  @Input() state: boolean;
  @Output() hideTooltip: EventEmitter<any> = new EventEmitter();
  @Output() showTooltip: EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }  
  showCall(value) {    
    this.showTooltip.emit({ event: value.event, id: value.id });
  }
  hideCall(value) {
    this.hideTooltip.emit({ event: value.event, id: value.id });
  }
}

