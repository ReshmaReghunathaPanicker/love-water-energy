import { ReasonsSwitchDataModel } from '../data-model/reasons-switch-data-model';

/** Export constant which stores resons why tou switch your water supply data. It an array of ReasonsSwitchDataModel */

export const ReasonsSwitchMockData: ReasonsSwitchDataModel[] = [
    {
        logo: '/assets/images/reasons-to-switch-icons/low-prices-icon.svg',
        title: 'Low prices:',
        description: 'No hidden extras, no additional costs - just cheaper water rates'
    },
    {
        logo: '/assets/images/reasons-to-switch-icons/free-water-audits-icon.svg',
        title: 'Free water audits:',
        description: 'If you spend over £1,000 on your annual water bill'
    },
    {
        logo: '/assets/images/reasons-to-switch-icons/fixed-rates-icon.svg',
        title: 'Fixed rates:',
        description: 'You can fix your retail rates for up to 3 years'
    },
    {
        logo: '/assets/images/reasons-to-switch-icons/easy-setup-icon.svg',
        title: 'Easy set up:',
        description: 'Once we’ve found the best deal, set up only takes a few minutes'
    }
];