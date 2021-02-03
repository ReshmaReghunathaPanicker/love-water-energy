import { Component, OnInit, Input } from '@angular/core';
import { SuppliersFaqsDataModel } from '../../data-model/supplier-faqs-data-model';

/** Component to show the suppliers FAQs
 *  Input : suppliersFaqs - suppliers FAQs details
 */

@Component({
  selector: 'suppliers-faqs',
  templateUrl: './suppliers-faqs.component.html',
  styleUrls: ['./suppliers-faqs.component.scss']
})
export class SuppliersFaqsComponent {
  @Input() suppliersFaqs: SuppliersFaqsDataModel[];
  selectedFaq: SuppliersFaqsDataModel;
  constructor() { 
  }

  ngOnInit() {
    // Set the selected FAQ as first one from the input initially
    this.selectedFaq = this.suppliersFaqs[0];
  }
}

