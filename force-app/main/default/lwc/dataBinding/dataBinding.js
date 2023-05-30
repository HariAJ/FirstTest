import Address from '@salesforce/schema/Lead.Address';
import { LightningElement ,track} from 'lwc';

export default class DataBinding extends LightningElement {
    /*customstyle="mystyle";
    firstName="Hari"
    person={
        name:"Dinesh",
        salary:"25000",
        place:"perambalur",
        Position:"Developer",
        Address : {
            city:"TN",
            district:"theni"

        }
    }
    fruits=['apple','orange','mango']
    get fruit(){
      return  this.fruits[1];
      return this.fruits[0];
    }
    handlechange(event){
       this.firstName= event.target.value;

    }
    handleclick(event){
        this.customstyle='mystyle_admin'

    }
    handleclick1(event){
        if(event.target.name=='btn1'){
            alert('btn 1 clicked')
        }
        else if(event.target.name=='btn2'){
            alert('btn2 clicked')
        }
    }
    

   @track people=['mani','kani','dk','muthu']
   get peopleee(){
    return this.people[0]
   }
    handleclickk(event){
        this.people[0]='sani';

    }
    
    
   ischanged='true';
   handleclick(event){
    this.ischanged=!this.ischanged

   }
   
  employeeList=[
    {
        name:'dk',
        salary:25000
    },
    {
        name:'pravuu',
        salary:26000
    },
    {
        name:'Hari',
        salary:25000
    },

  ]
  
 firstName;
 checkusername(firstName){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(firstName=='hari'){
            return resolve('user name checked')
        }
        else{
            return reject('username rejected')
        }
    },2000
        )
}
    )
    
 }
  async handleclick(){
    //this.checkusername('hari')
    //.then((result)=>{console.log(result)})
    //.catch((error)=>{console.log(error)})
    try {
        const response= await this.checkusername('abcdsreved');
        console.log(response)
    }
    catch(e){
        console.log(e)
    }
   
 }
 

async handleclick1(){
    let url="https://dummy.restapiexample.com/api/v1/employees";
    try {
   let respo= await fetch(url,{method:"GET"})
   console.log(respo);
    }
    catch(e){
        console.log(e);
    }
    
  handleclick1(event){
    // let c=this.template.querySelector(".names").value
     //console.log(c)
     //let d=this.template.querySelector("p")
     //console.log(d)
    //let c=this.template.querySelectorAll("p")
   //Array.from(c).forEach(element => {
       // console.log(element.innerHTML)
    //});
    //let prad=this.template.querySelector(".dynamic")
   // prad.innerHTML("<p style='background:red'>Dynamic Para</p>")
   this.template.querySelector("lightning-input[data-name1]").value="kali";
 
  this.template.querySelector("lightning-input[data-name2]").value="vaali";
  
  console.log(event.target.dataset.id)

  }
  */
 employees=[
    {
        Id:101,
        Name:"Hari",
        Salary:25000
    },
    {
        Id:102,
        Name:"DK",
        Salary:26000
    },
    {
        Id:103,
        Name:"Pravuu",
        Salary:27000
    }
]
handleselect(event){
    const b=event.target.dataset.id
    const c= event.target.dataset.name
    alert(`val:id=${b} name=${c}`)
}
handleclear(event){
   const a= event.target.dataset.id;
    this.template.querySelector(`lightning-input[data-id='${a}']`).value=""
    
}
handleclearfirst(event){
this.template.querySelector("lightning-input[data-id='101']").value=""
}
handleclearall(event){

    Array.from(this.template.querySelectorAll("lightning-input")).forEach(e=>e.value="")
        
    
}
    
}