import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import { AngularSvgIconModule } from 'angular-svg-icon';
@Component({
  selector: 'sup-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrl: './stars-rating.component.scss',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarsRatingComponent),
      multi: true
    }
  ]

})
export class StarsRatingComponent implements ControlValueAccessor {
  @Input() value = 0
  @Input() disabled = false


  onChange = (rating: number) => { };


  onTouched = () => { };

  rate(rating: number) {
    if (!this.disabled) {
      this.writeValue(rating);
    }
  }

  writeValue(rating: number): void {
    this.value = rating
    this.onChange(this.value);
  }


  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }


  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
