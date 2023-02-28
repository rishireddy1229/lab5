import {app} from './script.js';
console.log("welcome",app)
import {getDatabase,ref,update,set,get,child,remove} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';
const db=getDatabase();

        var name=document.getElementById("Name")
        var rollno=document.getElementById("Rollno")
        var email=document.getElementById("Email")
        var gender=document.getElementById("Gender")
       
        var addbtn=document.getElementById("addbtn")
        var readbtn=document.getElementById("readbtn")
        var updatebtn=document.getElementById("updatebtn")
        var deletebtn=document.getElementById("deletebtn")
        var a=document.getElementById("a")
       
        function addDetails()
        {
            set(ref(db,"studentdetails/"+rollno.value),{
                stuname:name.value,
                sturoll:rollno.value,
                stuemail:email.value,
                stugen:gender.value
            })
            .then(()=>{
                alert("data stored succesfully")
            })
            .catch((error)=>{
                alert("unsuccesful"+error)
            });
        }
        function readDetails(){
            //const dbref=ref(db);
            get(child(ref(db),"studentdetails"))
            .then((snapshot)=>{
                let arr=Object.values(snapshot.val())
                // if(snapshot.exists())
                // {
                //     document.write(arr)
                // }
                // else{
                //     document.write("no data found")
                // }
                console.log(arr)
                arr.forEach(ele=>{
                    console.log(ele.stuname)
                    a.innerHTML+=`Name: ${ele.stuname} &nbsp&nbsp&nbsp
                      Roll number: ${ele.sturoll}  &nbsp&nbsp&nbsp
                      Email: ${ele.stuemail}   &nbsp&nbsp&nbsp
                      gender: ${ele.stugen} <br>
                      <hr><br>`
                })
            })
            .catch((error)=>{
                alert("unsuccesful"+error)
            });
        }
        function updateDetails()
        {
            update(ref(db,"studentdetails/"+rollno.value),{
                stuname:name.value,
                stuemail: email.value,
                stugen:gender.value
            })
            .then(()=>{
                alert("data updated succesfully")
            })
            .catch((error)=>{
                alert("unsuccesful"+error)
            });
        }
        function deleteDetails()
        {
            remove(ref(db,"studentdetails/"+rollno.value))
            .then(()=>{
                alert("data deleted succesfully")
            })
            .catch((error)=>{
                alert("unsuccesful"+error)
            });
        }
        //events
        addbtn.addEventListener("click",addDetails)
        readbtn.addEventListener("click",readDetails)
        updatebtn.addEventListener("click",updateDetails)
        deletebtn.addEventListener("click",deleteDetails)
       
