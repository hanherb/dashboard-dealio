export default function () {
  return [{
    title: 'Dashboards',
    items: [{
      title: 'Home',
      to: '/',
      htmlBefore: '<i class="material-icons">&#xE917;</i>',
      htmlAfter: '',
    }, {
      title: 'Vendor',
      to: '/merchant',
      htmlBefore: '<i class="material-icons">&#xE917;</i>',
      htmlAfter: '',
    }],
  }, {
    title: 'Campaign',
    items: [{
      title: 'Merchant Deals',
      htmlBefore: '<i class="material-icons">&#xE889;</i>',
      to: {
        name: 'deals',
      },
    }, {
      title: 'E-Commerce Deals',
      htmlBefore: '<i class="material-icons">&#xE889;</i>',
      to: {
        name: 'product-deals',
      },
    }, {
      title: 'Earn',
      htmlBefore: '<i class="material-icons">&#xE889;</i>',
      to: {
        name: 'earn',
      },
    }, {
      title: 'Win',
      htmlBefore: '<i class="material-icons">&#xE889;</i>',
      to: {
        name: 'win',
      },
    }],
  }];
}
