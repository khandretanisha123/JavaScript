function Divisibility (No)
{
    if(No % 3 == 0 )
    {
        return true 
    }

    return false
}

let Ret = Divisibility(9)

console.log("Number is Divisible by 3 : "+Ret)