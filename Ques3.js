function ForEach(arr,callback)
{
    var temp;
    for(var i=0;i<arr.length;i++)
    {
        double(arr[i],i,arr)
    }
    return(temp);
}
function Map(arr,callback)
{
    var temp=[];
    for(var i=0;i<arr.length;i++)
    {
        temp[i]=double(arr[i],i,arr)
    }
    return temp;
}
function double(element,index,array)
{
    console.log("Double of a["+index+"]="+(2*element));
    //return(2*element);
}
function print(arr) {
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
}
a=[1,2,3,4,5];
b=ForEach(a,double);
c=Map(a,double);
print(c);
//print(b);
console.log(b);
