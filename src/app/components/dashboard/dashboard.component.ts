import { Component } from '@angular/core';

import { BenafitsDataModel } from '../../data-model/benafits-data-model';
import { BenafitsMockData } from '../../data-store/benafits-mock-data';
import { ReasonsSwitchDataModel } from '../../data-model/reasons-switch-data-model';
import { ReasonsSwitchMockData } from '../../data-store/reasons-switch-mock-data';
import { LogoMockData } from '../../data-store/logos-mock-data';
import { SuppliersDataModel } from '../../data-model/suppliers-data-model';
import { SuppliersDataStore } from '../../data-store/suppliers-data-store';
import { SuppliersFaqsDataModel } from '../../data-model/supplier-faqs-data-model';
import { SuppliersFaqsDataStore } from '../../data-store/suppliers-faqs-data-store';

/** Dashboard page component, It shows all the other components in header page */

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  benafitsTabData: BenafitsDataModel[] = BenafitsMockData;
  reasonsToSwitchData: ReasonsSwitchDataModel[] = ReasonsSwitchMockData;
  logoData: Array<string> = LogoMockData;
  suppliersData: SuppliersDataModel[] = SuppliersDataStore;
  suppliersFaqsData: SuppliersFaqsDataModel[] = SuppliersFaqsDataStore;
  constructor() { }

}

