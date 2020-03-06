export default function () {
  return [{
    title: 'Dashboards',
    items: [{
      title: 'Home',
      to: '/',
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
      title: 'Loyalty',
      htmlBefore: '<i class="material-icons">&#xE889;</i>',
      to: {
        name: 'loyalty',
      },
    }, {
      title: 'Deal Of The Month',
      htmlBefore: '<i class="material-icons">&#xE889;</i>',
      to: {
        name: 'deal-of-the-month',
      },
    }, {
      title: 'Deal Of The Week',
      htmlBefore: '<i class="material-icons">&#xE889;</i>',
      to: {
        name: 'deal-of-the-week',
      },
    }],
  }];
}
