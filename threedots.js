const ages= [35,65,34,23,32,12];
const ages2= [35,65,34,23,32,12];
const ages3= [35,65,34,23,32,12];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges2);