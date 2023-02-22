import {app} from './scripts.js';
console.log("welcome",app)
import {getDatabase,ref,update,set,get,child} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';
const db=getDatabase();
console.log(ref(db));
let name,rollno,branch;
let addbtn=document.getElementById("insertbtn");
let readbtn=document.getElementById("readbtn");
let updatebtn=document.getElementById("updatebtn")
function addstudent(){
    name=document.getElementById('sname').value;
    rollno=document.getElementById('srollno');
    branch=document.getElementById('sbranch');
    set(ref(db,"users/"+rollno.value),{name:name,rollno:rollno.value,branch:branch.value})
}
function viewstudent(){
    let data = document.getElementById("data");
    let d=document.getElementById("m");
  get(child(ref(db),"users")).then((snapshot)=>{
    let arr=Object.values(snapshot.val())
    arr.forEach(ele=>{
        console.log("name:"+ele.name+"  rollno:"+ele.rollno+"  branch:"+ele.branch);
        data.innerHTML += `<tr><td>${ele.name}</td><td>${ele.rollno}</td><td>${ele.branch}</td>`
        d.innerHTML += `<br>${ele.name} &nbsp ${ele.rollno} &nbsp ${ele.branch} <br>`

    })
})
}
function updatestudent(){
    name=document.getElementById('sname').value;
    rollno=document.getElementById('srollno');
    branch=document.getElementById('sbranch');
    get(child(ref(db),"users")).then((snapshot)=>{
        let arr=Object.values(snapshot.val())
        arr.forEach(ele=>{
            if(ele.rollno==rollno&&ele.branch==branch){
                update(ref(db,"users/"+rollno.value),{name:name,rollno:rollno.value,branch:branch.value});
            }else{
                alert("no record exist");
            }
        })
    })
}
addbtn.addEventListener("click",addstudent);
readbtn.addEventListener("click",viewstudent);
updatebtn.addEventListener("click",updatestudent);