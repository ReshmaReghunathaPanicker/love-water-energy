import { Component, Input } from '@angular/core';
import { ReasonsSwitchDataModel } from '../../data-model/reasons-switch-data-model';

/** Component to show the reasons why you switch your water supply
 *  Input : reasonsToSwitchDatas - reasons why you switch your water supply details
 */

@Component({
  selector: 'reasons-to-switch',
  templateUrl: './reasons-to-switch.component.html',
  styleUrls: ['./reasons-to-switch.component.scss']
})
export class ReasonsToSwitchComponent {
  @Input() reasonsToSwitchDatas: ReasonsSwitchDataModel[];
  selectedDataIndex: number;
  constructor() { 
    this.selectedDataIndex = 0;
  }
  /** In mobile view get next item of reason to switch slider*/
  getNext() {
    if(this.selectedDataIndex == this.reasonsToSwitchDatas.length-1) {
      this.selectedDataIndex = 0;  
    } else {
      this.selectedDataIndex += 1;
    }
  }

  /** In mobile view get previous item of reason to switch slider*/
  getPrev() {
    if(this.selectedDataIndex == 0) {
      this.selectedDataIndex = this.reasonsToSwitchDatas.length-1;  
    } else {
      this.selectedDataIndex -= 1;
    }
  }
}

