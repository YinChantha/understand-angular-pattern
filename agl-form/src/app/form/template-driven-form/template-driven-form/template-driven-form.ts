import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '../input-field-component/input-field.component';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule, FormsModule, InputFieldComponent],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.scss',
})
export class TemplateDrivenForm {
  onSubmit(myForm: any) {
    if (myForm.invalid) return;
    console.log('Form submitted!', myForm.value);
  }
}
