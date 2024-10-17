var studentID;
var studentName;
var CouseName;
var semester;

var html;
var css;
var java;

function studentDetails(studentID,studentName,CouseName,semester){
    console.log(studentID);
    console.log(studentName);
    console.log(CouseName);
    console.log(semester); 
}

function marks(mark1,mark2,mark3){
    return mark1+mark2+mark3;
}


studentDetails("DT","Abhay","COMPUTERS",4);
// console.log(student1);
var total_marks = marks(80,90,67);
console.log(total_marks);
var total_percentage = (total_marks/300)*100;
console.log(total_percentage+"%");

console.log("--------------------------------");

studentDetails("DT001","Raghav","SCIENCE",4);
var total_marks = marks(60,90,67);
console.log(total_marks);
var total_percentage = (total_marks/300)*100;
console.log(total_percentage+"%");

console.log("--------------------------------");

studentDetails("DT004","Rajav","ARTS",4);
var total_marks = marks(80,70,47);
console.log(total_marks);
var total_percentage = (total_marks/300)*100;
console.log(total_percentage+"%");

console.log("--------------------------------");





