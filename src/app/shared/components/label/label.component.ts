import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: [],
})
export class LabelComponent implements OnInit {
  @Input()
  public required = false;
  @Input()
  public name? = '';
  @Input()
  public value!: string;
  public showValue = false;
  @Input()
  public margin = false;
  ngOnInit() {
    this.showValue = (this.value !== undefined || this.value !== null) && !Array.isArray(this.value);
  }
}
