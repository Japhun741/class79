student_name_array=[];
function submit() {
    var submit_one = document.getElementById("inputone").value;
    var submit_two = document.getElementById("inputtwo").value;
    var submit_three = document.getElementById("inputthree").value;
    var submit_four = document.getElementById("inputfour").value;

    student_name_array.push(submit_one);
    student_name_array.push(submit_two);
    student_name_array.push(submit_three);
    student_name_array.push(submit_four);
    console.log(student_name_array);
    
    document.getElementById("displayname").innerHTML=student_name_array;
    document.getElementById("buttonone").style.display="none";
    document.getElementById("buttontwo").style.display="inline-block";
    
    
}
function sorting() {
    student_name_array.sort();
    console.log(student_name_array);
    document.getElementById("displayname").innerHTML=student_name_array;
}