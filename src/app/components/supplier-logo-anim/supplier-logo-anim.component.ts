import { Component, Input } from '@angular/core';

/** Component to show the supplier logo scroll animation
 *  Input : logos - list of logos
 */

@Component({
  selector: 'supplier-logo-anim',
  templateUrl: './supplier-logo-anim.component.html',
  styleUrls: ['./supplier-logo-anim.component.scss']
})
export class SupplierLogoAnimComponent {
  @Input() logos: Array<string>;
  constructor() { 
  }

}

