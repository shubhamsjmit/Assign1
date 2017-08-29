a=[1,2,3,4,5];
bb=[1,2,3,4,5]
/*function double(element,,arra)
{
    console.log("2*"+cur+"="+arra[indx]);
}*/
function print(elem)
{
    c//onsole.log("Element is +"+elem);
}
function logArrayElements(elemen, index, array) {
    //console.log('a[' + index + '] = ' + elemen);
}
function logArrayElements1(elemen, index, array) {
   // console.log('a[' + index + '] = ' + elemen);
   return(elemen);
}
c=a.forEach(logArrayElements);
console.log(c);
b=bb.map(logArrayElements);
console.log(b);
//b.forEach(print);
cc1=a.forEach(logArrayElements1);
console.log(cc1);
cc=a.map(logArrayElements1);
console.log(cc);
