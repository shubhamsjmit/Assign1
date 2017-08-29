
function setTimeoutSync(callback,n,number)
{
    var start=new Date();
    while((new Date()-start)!=n)
    {

    }
    console.log("After waiting for "+n+" ms");
    var  resul=callback(number);
    if(resul==-1)
    {
        handleResult(new Error("Odd no"));
    }
    else
    {
        handleResult(null,resul);
    }
};
var handleResult =function (err,result) {
    if(err)
    {
        console.log("ERR: "+err.message);
    }
    else
    {
        console.log("The resultd of : "+result/2+" is "+result);
    }
};
function evenDoubler(num)
{
    if(num%2==0)
    {
        return(2*num);
    }
    else
    {
        return(-1);
    }
}
setTimeoutSync(evenDoubler,1000,2);
setTimeoutSync(evenDoubler,1000,3);
console.log("------");