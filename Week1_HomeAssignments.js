//********************************01_CheckNumType**************************
/* function checkNumberType(number)

{
    if(number>0){
        return number;

    }
    else if(number<0){
        return number;

    }
    else{
        return number;
    }
    }

    let number=0;
    console.log(checkNumberType(number));
     */

    //****************************ODD or EVEN **************************/
/* 
    function checkOddorEven(number)
    {
    if (number%2==0) 
    { 
    console.log("even" , +number)}
else{
    console.log("odd" , +number)}
} 

let number=47;
checkOddorEven(number); */

 //****************************Students Score**************************/

/* 
function calculateGrade(score){

    switch(true){
        case score<34:
                console.log("FAIL");
                break;
        case score>34 && score<=74: 
                console.log("PASS");
                break;
        case score>=75 && score<100:
                console.log("GRADE-A");
                break;
        case  score==100:
                console.log("TOPPER");
                break;

                default:
                    console.log("none");}
                
    }

let score=75;
calculateGrade(score); */


//*************Given a string s consisting of words and spaces, return the length of the last word in the string.*************

/* let Input="Munni Shaik begum MM";

let Arr=Input.split(" ");

console.log(Arr.length);

console.log(Arr[Arr.length-1]);
 */


//***********************************************************************//
//Need to know if any other ways around

/* let Input="   fly me   to   the moon  ";

let Arr=Input.trim();

let last_word=Arr.slice(-4);
console.log(last_word.length) */

//********************************Write a function to check if two strings are anagrams.********************************************

/* function anagram(){

    let A1="silent";
    let A2="listtnt";

    if(A1.length==A2.length){

        let Result1=A1.split("");
        SortedResult1=Result1.sort();

        let Result2=A2.split("");
        SortedResult2=Result2.sort();

         if(JSON.stringify(SortedResult1) == JSON.stringify(SortedResult2)){
            console.log("Given strings were Anagrams")
        }
        else{
            console.log("Given strings were not Anagrams")
        } 
    }
    else{
        console.log("Give correct Input");
    }
}
anagram();
 */
//************************************************Palindrome***************************
/* 
let OrginalStr="MAsdffdsAM";
let chars=OrginalStr.split("");
 let RevStr="";
    for(let j=chars.length-1;j>=0;j--)
    {   
       RevStr=RevStr+chars[j];
        
        }
    if(RevStr==OrginalStr)
    {
        console.log("Palindrome")
    }
    else{
        console.log("Not Palindrome")
    } 
 */
   // ******************************print between 1, 10 --> keep adding the sum of values********************************************************

    /* function SumOfAllValues()
    {
        let val=7;
        i=1, j=2;k='';
 
        do {
            k = i+j;
            console.log(k);
             i=k;
             j=j+1;
            }

        while (j <=val);
        
        }

SumOfAllValues(); */