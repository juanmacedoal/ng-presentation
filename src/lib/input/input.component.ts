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

/**
 *
 *
 * @export
 * @class InputComponent
 * @implements {OnInit}
 * @implements {ControlValueAccessor}
 * @implements {Validator}
 */
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

  /**
   * Validate control
   * @param control
   */
  validate(control: AbstractControl) {
    return {};
  }

  /**
   * Get accessor
   *
   * @type {*}
   * @memberof InputComponent
   */
  get value(): any {
    return this.innerValue;
  }

  /**
   * Set accessor including call the onchange callback
   *
   * @memberof InputComponent
   */
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  /**
   * Set touched on blur
   *
   * @memberof InputComponent
   */
  onBlur() {
    this.onTouchedCallback();
  }

  /**
   * From ControlValueAccessor interface
   *
   * @param {*} value
   * @memberof InputComponent
   */
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  /**
   * From ControlValueAccessor interface
   *
   * @param {*} fn
   * @memberof InputComponent
   */
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
    this.change.emit(this.value);
  }

  /**
   * From ControlValueAccessor interface
   *
   * @param {*} fn
   * @memberof InputComponent
   */
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
  /**
   * Set disable state of component
   *
   * @param {boolean} isDisabled
   * @memberof InputComponent
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
