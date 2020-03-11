export default function () {
  return [{
    title: 'Dashboards',
    items: [{
      title: 'Home',
      to: '/',
      htmlBefore: '<i class="material-icons">&#xE917;</i>',
      htmlAfter: '',
    }, {
      title: 'Merchant',
      to: '/merchant',
      htmlBefore: '<i class="material-icons">&#xE917;</i>',
      htmlAfter: '',
    }],
  }, {
    title: 'Campaign',
    items: [{
      title: 'Deals',
      htmlBefore: '<i class="material-icons">&#xE889;</i>',
      to: {
        name: 'deals',
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
