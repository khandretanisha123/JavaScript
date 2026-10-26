
function DispalyFactors(iNo)
{
   let iCnt = 0 ;
   

    console.log("Factors of : ",iNo)

    for( iCnt=1 ; iCnt <= iNo/2; iCnt++)
    {
        if(iNo % iCnt == 0)
        {
            console.log("Factors is : ",iCnt);
        }
    }
}

function main()
{

    DispalyFactors(12)

}
main()