import { Component, Input } from '@angular/core';
import { SuppliersDataModel } from '../../data-model/suppliers-data-model';

/** Component to show the suppliers details
 *  Input : suppliersInfo - suppliers details
 */

@Component({
  selector: 'suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent {
  @Input() suppliersInfo: SuppliersDataModel[];
  more: boolean = false;
  constructor() { 

  }
  
}

