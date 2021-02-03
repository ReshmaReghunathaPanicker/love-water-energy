/** Data model for benafites data,  here paragraphes and lists are optional */

export interface BenafitsDataModel {
    tabName: string;
    paragraphes?: Array<string>;
    lists?: Array<string>
}
  