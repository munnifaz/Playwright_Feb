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

    /*  function SumOfAllValues()
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

SumOfAllValues();  */

 //******************iven an integer array, find the maximum amd minimum elements in an array and return their indices. */

  /* Arr1=[1,5,6,3,0,2,3,10,67,89,3,2,-1,-56,-98]

 let sortedArr=Arr1.sort();

 //console.log(sortedArr);

 let Minimum=sortedArr[0];

 findmax=sortedArr.length-1

 let Maximum=sortedArr[findmax]

 console.log(Minimum,Maximum);  */

 //****************************************************

 //************return duplicates*************************************

  /* Arr1=[1,2,5,3,8,5,6,2,1]
 sortedarr=Arr1.sort();
 console.log(sortedarr);
 uniquearray=[];
 

 for (let i=0;i<=sortedarr.length;i++){
    
    for(let j=i+1;j<=sortedarr.length-1;j++)

    {
        if(sortedarr[i]==sortedarr[j]){
           
            uniquearray=uniquearray+sortedarr[i]       
       }   
    }
 } 
 console.log(uniquearray); */
 
 
//*************************************************Occurances*****************************************

/* Arr1=[1,5,3,8,6,2,2,2,2,2,2,2,2,2,2]
sortedarr=Arr1.sort();
console.log(sortedarr);
let k=1;
for (let i=0;i<=sortedarr.length-1;i++){
   
   j=i+1;
   {     if(sortedarr[i]==sortedarr[j]){
          
           k=k+1;
      }  
   }
} 
console.log(k); 
 */
//*******************************************move zero's to the end************************ */
/* 
 var numArray = new Float64Array([0,1,0,3,12]);
numArray = numArray.sort();
console.log(numArray) 

Arr1=[0,1,0,3,12,0,4,6];
Arr2=[];
Arr3=[];
Finalarr=[];

for (let i=0; i<=Arr1.length-1;i++){

if(Arr1[i]==0){
Arr2.push(Arr1[i])

}
else{
    Arr3.push(Arr1[i]);

}
}
console.log(Arr2,Arr3);
Finalarr=Arr3.concat(Arr2);
console.log(Finalarr);  */

//*************************************remove duplicates in an array******************************//
const Arr1 = [1, 2, 5, 3, 8, 5, 6, 2, 1];
const sortedarr = Arr1.slice().sort(); // Make a copy of Arr1 before sorting
console.log(sortedarr);
const uniquearray = [];

for (let i = 0; i < sortedarr.length; i++) {
    let isDuplicate = false;
    for (let j = i + 1; j < sortedarr.length; j++) {
        if (sortedarr[i] === sortedarr[j]) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        uniquearray.push(sortedarr[i]);
    }
}
console.log(uniquearray);

//*******Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must be unique and you may return the result in any order.//********************* */