const object1 = {
    prop: 'Iexceed',
    prp1:'HARI',
    prop:'bALA'
  };
  
  console.log(Object.hasOwn(object1, 'prop'));
  
  console.log(Object.hasOwn(object1, 'toString'));
  
  console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));
 
  console.log(Object.hasOwn(object1, 'prp1'));