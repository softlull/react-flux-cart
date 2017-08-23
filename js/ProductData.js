module.exports = {
  // Load Mock Product Data Into localStorage
  init: function () {
    // localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
    {
      id: '0011002',
      name: 'Sugar Thrillz',
      image: 'sugar-thrillz-pink.jpg',
      description: 'Sugar Thrillz Rock Garden Heels ...don’t assume a pretty face can’t be vicious too, babe~ These swEEt heels feature a sleek baby pink vegan leather construction, skyy high block heel ‘N platform, open toe with a fluffy ‘N pink strap, and insane spiked studs all over the heel and velcro closure ankle strap.',
      variants: [
        {
          sku: '123123',
          type: 'UK 2',
          price: 55.00,
          inventory: 1

        },
        {
          sku: '123124',
          type: 'UK 3',
          price: 55.00,
          inventory: 5
        },
        {
          sku: '1231235',
          type: 'UK 4',
          price: 55.00,
          inventory: 2
        },
        {
          sku: '1231236',
          type: 'UK 5',
          price: 55.00,
          inventory: 3
        },
        {
          sku: '1231237',
          type: 'UK 6',
          price: 55.00,
          inventory: 20
        }, 
        {
          sku: '1231238',
          type: 'UK 7',
          price: 55.00,
          inventory: 1
        },
        {
          sku: '1231239',
          type: 'UK 8',
          price: 55.00,
          inventory: 1
        }               
      ]        
    }
    ])); 
  }

};