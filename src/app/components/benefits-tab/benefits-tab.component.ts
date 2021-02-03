import { Component, Input, OnInit } from '@angular/core';
import { BenafitsDataModel } from '../../data-model/benafits-data-model';

/** Component to show the the benafilts 
 *  Input : benefitsDetails - benafits details
 */

@Component({
  selector: 'benefits-tab',
  templateUrl: './benefits-tab.component.html',
  styleUrls: ['./benefits-tab.component.scss']
})
export class BenefitsTabComponent implements OnInit {

  @Input() benefitsDetails: BenafitsDataModel[];
  
  selectedDetails: BenafitsDataModel;
  constructor() { 
  }

  // Set the selected benafit as first one from the input initially
  ngOnInit() {
    this.selectedDetails = this.benefitsDetails[0];
  }

}

