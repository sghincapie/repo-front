import { Directive, OnDestroy, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[rnetConsultasOnlyAlfanumeric]',
})
export class OnlyAlfanumericDirective implements OnInit, OnDestroy {
  valueSubscription!: Subscription;
  constructor(public ngControl: NgControl) {}

  ngOnInit(): void {
    if (this.ngControl.control) {
      this.valueSubscription = this.ngControl.control?.valueChanges.subscribe(value => {
        const initalValue = value;
        if (initalValue != null && initalValue !== undefined) {
          const newValue = initalValue.toString().replace(/[^a-zA-Z0-9]*/g, '');
          if (initalValue.toString() !== newValue) {
            this.ngControl.control?.setValue(newValue, { emitEvent: false });
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.valueSubscription.unsubscribe();
  }
}
