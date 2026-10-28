function CheckGreater(No1 , No2,No3)
{
    if(No1  > No2 && No1 > No3)
    {
        return No1
    }
    else if(No2 > No1 && No2 > No3)
    {
        return No2 
    }
    else
    {
        return No3
    }

}

let Ret = CheckGreater(87,56,34)

console.log("Greater Number is : "+Ret)