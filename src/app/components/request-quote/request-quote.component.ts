import { Component } from '@angular/core';

/** Component to show a form for requesting quote  */

@Component({
  selector: 'request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.scss']
})
export class RequestQuoteComponent {

  phNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  showSuccessMsg: boolean = false;
  constructor() { }
  /**form submit function. Validation is already handled in html. Submit button will enble only once the form is valid   */
  submit(quoteForm){
    if(quoteForm.form.valid) {
      this.showSuccessMsg = true;

      // Hide success message
      setTimeout(()=>{                    
          this.showSuccessMsg = false;
          quoteForm.form.reset();
      }, 3000);
    }
  }
}

