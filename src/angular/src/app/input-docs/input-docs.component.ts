import { Component } from '@angular/core';

@Component({
  selector: 'sprk-input-docs',
  template: `
      <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">Inputs</h2>
        <form (submit)="onSubmit($event)" #sampleForm="ngForm">
          <sprk-input-container>
            <label sprk-label>Text Input</label>
            <input 
              name="text_input" 
              [additionalClasses]="textInput.invalid && textInput.dirty ? 'sprk-b-TextInput--error': ''"
              type="text" 
              [(ngModel)]="text_input"
              required
              #textInput="ngModel"
              sprk-input>
            <p sprk-helper-text>Please enter some input.</p>  
            <span 
              [hidden]="textInput.valid || textInput.pristine" 
              sprk-field-error>This field is required.</span>
          </sprk-input-container>
          <sprk-selection-container>
            <label sprk-label>Checkbox Group Label</label>
            <sprk-selection-item-container>
              <input 
                type="checkbox" 
                name="checkbox_input" 
                [(ngModel)]="checkbox_input1" 
                sprk-selection-input
                #checkboxInput1="ngModel"> 
              <label sprk-selection-label>Item 1</label>
            </sprk-selection-item-container>
            <sprk-selection-item-container>
              <input 
                type="checkbox" 
                name="checkbox_input" 
                [(ngModel)]="checkbox_input2" 
                sprk-selection-input
                #checkboxInput2="ngModel"> 
              <label sprk-selection-label>Item 2</label>
            </sprk-selection-item-container>
            <sprk-selection-item-container>
              <input 
                type="checkbox" 
                name="checkbox_input" 
                [(ngModel)]="checkbox_input3" 
                sprk-selection-input
                #checkboxInput3="ngModel"> 
              <label sprk-selection-label>Item 3</label>
            </sprk-selection-item-container>
          </sprk-selection-container> 
          <sprk-selection-container>
            <label sprk-label>Radio Group Label</label>
            <sprk-selection-item-container>
              <input 
                type="radio" 
                value="1"
                name="radio_input" 
                [(ngModel)]="radio_input"
                sprk-selection-input
                #radioInput="ngModel"> 
              <label sprk-selection-label>Item 1</label>
            </sprk-selection-item-container>
            <sprk-selection-item-container>
              <input 
                type="radio" 
                value="2"
                name="radio_input" 
                sprk-selection-input
                [(ngModel)]="radio_input"
                #radioInput="ngModel"> 
              <label sprk-selection-label>Item 2</label>
            </sprk-selection-item-container>
            <sprk-selection-item-container>
              <input 
                type="radio" 
                value="3"
                name="radio_input" 
                sprk-selection-input
                [(ngModel)]="radio_input"
                #radioInput="ngModel"> 
              <label sprk-selection-label>Item 3</label>
            </sprk-selection-item-container>
          </sprk-selection-container> 
          <sprk-input-container>
            <label sprk-label>Textarea Input</label>
            <textarea
              name="textarea_input" 
              [(ngModel)]="textarea_input"
              #textareaInput="ngModel"
              sprk-input></textarea>
          </sprk-input-container>
          <sprk-input-mask-container>
            <label sprk-label>SSN Input</label>
            <input
              [type]="ssnType"
              pattern="(^(?!666|000|9\\d{2})\\d{3}([- ]{0,1})(?!00)\\d{2}\\1(?!0{4})\\2\\d{4}$)|^$" placeholder="000-00-0000"
              name="ssn_input"
              [(ngModel)]="ssn_input"
              #ssnInput="ngModel"
              sprk-input>
            <sprk-selection-item-container>
              <input type="checkbox" sprk-selection-input (click)="toggleSSNType()">
              <label sprk-selection-label>Show SSN</label>
            </sprk-selection-item-container>
            <div 
            [hidden]="ssnInput.valid || ssnInput.pristine"
            sprk-field-error>Invalid SSN.</div>
          </sprk-input-mask-container>
          <sprk-input-container>
            <label sprk-label>Search Input</label>
            <input 
              name="search_input" 
              type="search" 
              [(ngModel)]="search_input"
              #searchInput="ngModel"
              sprk-input>
          </sprk-input-container>
          <sprk-input-container>
            <label additionalClasses="sprk-u-ScreenReaderText" sprk-label>Inline Search Input</label>
            <input 
              name="inline_search_input" 
              type="search" 
              role="search"
              placeholder="Search"
              [(ngModel)]="inline_search_input"
              #inlineSearchInput="ngModel"
              sprk-input>
          </sprk-input-container>
          <sprk-input-mask-container>
            <label sprk-label>Password</label>
            <input
              [type]="passwordType"
              name="password_input"
              sprk-input>
            <sprk-selection-item-container>
              <input type="checkbox" sprk-selection-input (click)="togglePasswordType()">
              <label sprk-selection-label>Show Password</label>
            </sprk-selection-item-container>
          </sprk-input-mask-container>
          <sprk-input-container>
            <label sprk-label>Phone Number</label>
            <input 
              name="phone_input" 
              [additionalClasses]="phoneInput.invalid && phoneInput.dirty ? 'sprk-b-TextInput--error': ''"
              type="text" 
              pattern="(^(\\+\\d{1,2}\\s)?((\\(\\d{3}\\))|\\d{3})[\\s.-]?\\d{3}[\\s.-]?\\d{4}$)|^$"
              placeholder="(000) 000-0000"
              [(ngModel)]="phone_input"
              required
              #phoneInput="ngModel"
              sprk-input>
            <span 
              [hidden]="phoneInput.valid || phoneInput.pristine"
              sprk-field-error>
              {{ phoneInput.invalid && phoneInput.value === '' ? 'This field is required.' : 'This field is invalid.'}}
            </span>  
          </sprk-input-container>
          <sprk-input-container>
            <label sprk-label>Date Input (No Picker)</label>
            <input 
              name="date_input" 
              [additionalClasses]="dateInput.invalid && dateInput.dirty ? 'sprk-b-TextInput--error': ''"
              type="text" 
              pattern="^(((0[1358]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02(\\/?)((0?\\d)|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$"
              placeholder="MM/DD/YYYY"
              [(ngModel)]="date_input"
              #dateInput="ngModel"
              sprk-input>
            <span 
              [hidden]="dateInput.valid || dateInput.pristine"
              sprk-field-error>This field is invalid.</span>  
          </sprk-input-container>
          
          
          
          <sprk-button [isDisabled]="!sampleForm.form.valid">Submit</sprk-button>
        </form>
      </div>`,
  styles: ['']
})

export class InputDocsComponent {
  constructor() { }

  text_input: string = '';
  textarea_input: string = '';
  search_input: string = '';
  inline_search_input: string = '';
  phone_input: string = '';
  date_input: string = '';
  radio_input: string;
  passwordType = 'password';
  ssnType = 'password';

  togglePasswordType(): void {
    if(this.passwordType === 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  toggleSSNType(): void {
    if(this.ssnType === 'password') {
      this.ssnType = 'text';
    } else {
      this.ssnType = 'password';
    }
  }

  onSubmit(): void {
    console.log('Submitted!');
  }
}
