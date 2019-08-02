import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from '@angular/core';
import {
  ControlValueAccessor,
  Validator,
  AbstractControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

const noop = () => {};

@Component({
  selector: 'san-presn-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() id: string = 'input';
  @Input() label: string;
  @Input() content: string = 'input_component';
  @Input() placeholder: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() maxlength: number;
  @Input() type: 'text' | 'number' = 'text';
  @Output() change: EventEmitter<any> = new EventEmitter();

  // The internal data model
  private innerValue: any = '';

  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  /**
   *Creates an instance of InputComponent.
   * @memberof InputComponent
   */
  constructor() {}

  /**
   *
   *
   * @memberof InputComponent
   */
  ngOnInit() {
    this.innerValue = this.content;
  }


  validate(control: AbstractControl) {
    return {};
  }


  get value(): any {
    return this.innerValue;
  }


  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }


  onBlur() {
    this.onTouchedCallback();
  }


  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }


  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
    this.change.emit(this.value);
  }


  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
