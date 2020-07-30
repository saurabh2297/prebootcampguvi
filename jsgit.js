//Todo for Variables

//1
var a;
var b;
var c;
var d;
console.log(a,b,c,d);

//2
var myvar = 2;
console.log(myvar);

//3
var fName = "Saurabh";
var lName = "Gangwar";
var maritalStatus = "Single";
var country = "India";
var age = "23";
console.log(fName,lName,maritalStatus,country,age);

//4
var profile = {"First Name":"Saurabh","Last Name":"Gangwar","Marital Status":"Single","Country":"India","Age":"23"};
console.log(profile);

//5
var strng = "stringVariable";  //String datatype
var undef; //undefined datatype
var nil = null; //null datatype
var bool = true; //boolean datatype
console.log(typeof(strng),typeof(undef),typeof(nil),typeof(bool));

//6
var conv = "5";
var pi = parseInt(conv);
var num = Number(conv);
var pls = +conv;
console.log(typeof(pi),typeof(num),typeof(pls));

//7
var x = +5;
var y = +7;
console.log(x==y);
console.log(x!=y);
console.log(x%2===0);
console.log(y%5===2);
console.log(y%x===2)

//Todo for Operators

//1
var s = +(prompt("enter a number"))
console.log(s*s);

//2
var x1 = 2;
var y1 = 3;
console.log(x1,y1);
var temp = x1;
var x1 = y1;
var y1 = temp;
console.log(x1,y1);

//3
var x2 = +(prompt("enter a number"));
var y2 = +(prompt("enter a number"));
var z2 = +(prompt("enter a number"));
console.log(x2+y2+z2);

//4
var cel = +(prompt("Enter the temp in celcius"));
var far = parseFloat((cel * (9/5))+32);
alert(far);

//5
var metre = +(prompt("enter length in metres"));
var miles = parseFloat(metre/1609);
alert(miles);
//6
var pounds = +prompt("enter weight in pounds");
var kg = parseFloat(pounds/2.205);
alert(kg);
//7
var innings = +(prompt("enter number  of innings played"));
var runs = +prompt("Total  runs scored");
var battingAvg = parseFloat(runs/innings);
console.log(battingAvg);

//8
var i=0;
var sum=0;
for(i=0;i<5;i++){
    sum+= +(prompt("enter the score of "+(i) +" test"));
}
console.log(parseFloat(sum/5));

//9
var base = +(prompt("enter base  for calculating"));
var pow = +(prompt("enter raise to power value"));
console.log(Math.pow(base,pow));

//10
var principle = +(prompt("enter the principal  amount"));
var rate = +(prompt("enter rate of interest"));
var time = +(prompt("enter years"));
console.log(parseFloat((principle*rate*time)/100));

//11
var sides = +(prompt("enter side of eqilateral triangle"));
console.log(parseFloat(((Math.sqrt(3))/4)*(sides*sides)));

//12
var Base = +(prompt("enter base of isosceles triangle"));
var height = +(prompt("enter height of isosceles triangle"));
console.log(parseFloat(0.5 * Base * height));

//13
var radius = +(prompt("enter radius of sphere"));
console.log(parseFloat((4/3)*(Math.PI*radius*radius*radius)));

//14
var pBase = +(prompt("enter base length of prism"));
var pBreadth = +(prompt("enter base breadth of prism"));
var pHeight = +(prompt("enter height of prism"));
var bArea = +(pBase*pBreadth);
console.log(parseFloat(bArea*pHeight));

//15
var aSide = +(prompt("enter side of triangle"));
var bSide = +(prompt("enter side of triangle"));
var cSide = +(prompt("enter side of triangle"));
var p = parseFloat((aSide+bSide+cSide)/2);
console.log(parseFloat(Math.sqrt(p * (p - aSide)*(p - bSide)* (p - cSide))));

//16
var actCost = +(prompt("enter actual cost"));
var sellCost = +(prompt("enter selling cost"));
console.log(parseFloat(((actCost-sellCost)*100)/actCost));

//17
var rCircle = +(prompt("enter radius of circle"));
console.log("Diameter :"+(rCircle*2));
console.log("circumference :"+(2*Math.PI*rCircle));
console.log("Area :"+ (Math.PI * rCircle *rCircle));

//18
var num1 = +(prompt("enter a number"));
var num2 = +(prompt("enter a number"));
console.log("Addition " + parseInt(num1+num2));
console.log("Substraction " + parseInt(num2 - num1));
console.log("Multiplication "+ parseInt(num1*num2));
console.log("Division "+parseFloat(num1/num2));

//19
console.log("*****\n*****\n*****\n*****\n*****")

//20
var watt = +(prompt("enter watts consumed"));
var rateWatt = +(prompt("enter the rate per watt"));
console.log(parseFloat(watt * rateWatt));

//21
var numSubjects = +(prompt("enter total number of subjects taken"));
let j=0;
var sm=0;
for(j=0;j<numSubjects;j++){
    sm+= +(prompt("enter the score of "+(j) +" test"));
}
console.log(parseFloat((sm/numSubjects)*9.5));

//Todo for condition , looping and arrays

//1
var fs = "#"; 
for(let i=0;i<7;i++){
    console.log(fs);
    fs+="#";
}

//2
var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"]

for(let i=0;i<strArray.length;i++){
    console.log(strArray[i]);
}

//count elements in array
var myarray=[11,22,33,44,55];
let i = 0;
var cnt =0 ;
while(myarray[i]!=null){
    cnt+=1;
    i+=1;
}
console.log(cnt);

//favourite food problems

let foods= ["f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12","f13","f14","f15","f16","f17","f18","f19","f20"];
console.log(foods[4]);//5th favourite food
console.log(foods.length)//can be found without length using above loops


//friends array problems

let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
friends[0]="Munnabhai";//changed marry to munnabhai
console.log(friends);

const friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
let i=0;
do{
    console.log[friends[i]];
    i++;
}while(friends[i]!="CaptianAmerica"); //print names untill meet captainamerica


//persion is friend or not
const friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(input, name){
    for (let i = 0; i < input.length; i++) {
      if(input[i]==name){
          return "yes";
      }
    }
    return "No";
    }
let found = dataHandling(friends,"Jeff");
console.log(found);

//two friend arrays problem
var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
var friends2 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
var comb = friends1.concat(friends2);
comb = comb.sort();
console.log(comb)//sorted combined array

//1
console.log(comb[0]);
console.log(comb[parseInt(comb.length/2)-1]);
console.log(comb[parseInt(comb.length)-1]);

//2
comb.unshift("Saurabh");
comb.push("Gangwar");
console.log(comb);

//3
for(let i=0;i<comb.length;i++){
    comb[i]="Mr. "+comb[i];
}
console.log(comb);

//4
var cstr = "";
for(let i=0;i<comb.length-1;i++){
    cstr += comb[i]+",";
}
cstr += comb[comb.length-1];
console.log(cstr);

//5
var alist = [];
for(let i=0;i<comb.length;i++){
    if(comb[i].includes("a")){
        alist.push[comb[i]];
    }
}
console.log(alist);

//6
let fsum=0;
for(let i=0;i<comb.length;i++){
    fsum+=comb[i].length;
}
console.log(fsum/comb.length);

//7
var mlist = [];
for(let i=0;i<comb.length;i++){
    if(comb[i].includes("M")){
        mlist.push[comb[i]];
    }
}
console.log(mlist);

//8
var fmx = ""
var fl = -1;
for(let i=0;i<comb.length;i++){
    if(comb[i].length > fl){
        fl=comb[i].length;
        fmx = comb[i];
    }
}
console.log(fmx);

//9
var fmx = ""
var fl = 999999;
for(let i=0;i<comb.length;i++){
    if(comb[i].length < fl){
        fl=comb[i].length;
        fmx = comb[i];
    }
}
console.log(fmx);

//avg only numbers
let asm = 0;
let acnt = 0;
const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
for(let i=0;i<friendsInfo.length;i++){
    if(typeof(friendsInfo[i])== typeof(+3)){
          asm+=friendsInfo[i];
          acnt+=1;
    }
}
console.log(asm/acnt);

//print contents of input variable
var arinput = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ];

for(let i=0;i<arinput.length;i++){
    for (let j=0;j<arinput[i].length;j++){
    console.log(arinput[i][j]);}
    console.log("-----------");
}


//object

myobject = {1:"one",11:1,"name":"arun"}
console.log(myobject[11]); 
console.log(myobject.name);
myobject.ten = "ten";
console.log(myobject.ten)



//
obj = {"Org":"Guvi","Des":"Geek", "cls":6, "clg":"IIT-M RP","city":"Chennai."}
console.log(obj)


//
class dat {
    constructor(org,des,cls,clg,city){
        this.organization = org;
        this.designation = des;
        this.class = cls;
        this.college = clg;
        this.city = city;
    }
}
    p1 = new dat("Guvi", "Geek", "6", "IIT-M RP","Chennai.");
    p2 = new dat("Amazon", "Inc", "31", "SP Infocity", "Chennai.");
    p3 = new dat("Google", "Alphabet", "34", "Amphitheater Parkway", "MountainView.");
    p4 = new dat("Tesla", "Inc" , "32", "333 Santana Row","San Jose.");


objar = [];
objar.push(p1);
objar.push(p2);
objar.push(p3);
objar.push(p4);

for(let i=0;i<objar.length;i++){
    console.log(objar[i]);
}
