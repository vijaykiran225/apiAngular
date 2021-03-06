import { GetDispute } from '../mock-data/getDispute';

export const getDisputeData: GetDispute = {
    'dispute_id': 'PP-000-042-673-695',
    'create_time': '2018-07-13T12:40:06.000Z',
    'update_time': '2018-08-02T13:19:59.000Z',
    'disputed_transactions': [
        {
            'buyer_transaction_id': '0VU058429S558214R',
            'seller_transaction_id': '4F370410YL204173V',
            'create_time': '2018-07-13T11:11:49.000Z',
            'transaction_status': 'COMPLETED',
            'gross_amount': {
                'currency_code': 'USD',
                'value': '12.00'
            },
            'buyer': {
                'email': 'ronaldo@madridrm.com',
                'payer_id': 'R8KJSB6PCGJMY',
                'name': 'Cristiano Ronaldo'
            },
            'seller': {
                'email': 'zlatan@manu.com',
                'merchant_id': 'RD465XN5VS364',
                'name': 'Zlatan Ibrahimovics Test Store'
            },
            'seller_protection_eligible': true
        }
    ],
    'reason': 'MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED',
    'status': 'RESOLVED',
    'dispute_amount': {
        'currency_code': 'USD',
        'value': '12.00'
    },
    'dispute_outcome': {
        'outcome_code': 'NONE'
    },
    'dispute_life_cycle_stage': 'INQUIRY',
    'dispute_channel': 'INTERNAL',
    'messages': [
        {
            'posted_by': 'BUYER',
            'time_posted': '2018-07-13T12:40:14.000Z',
            'content': 'test'
        }
    ],
    'offer': {
        'buyer_requested_amount': {
            'currency_code': 'USD',
            'value': '6.00'
        }
    },
    'links': [
        {
            'href': 'https://api.sandbox.paypal.com/v1/customer/disputes/PP-000-042-673-695',
            'rel': 'self',
            'method': 'GET'
        }
    ]
};
