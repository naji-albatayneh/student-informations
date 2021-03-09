'use strict';

let tableEl=document.getElementById('table');
let submitButton=document.getElementById('submit');
let showTotal=document.getElementById('total');

let emailInput=document.getElementById('email');
let telInput=document.getElementById('tel');
let tuitionInput =document.getElementById('tuition');

let total=0;
let id=0;
let retreiveArr=[];

let Student=function(name, email, tel, tuition){
  this.id=id++;
  this.name=name;
  this.email=email;
  this.mobile=tel;
  this.tuition=tuition;
  this.age=randomAge(18,24);

  Student.Array.push();

  total=total+tuition;

  save();
};

let getName=function(email){
  let firstName = email.split('@');
  return firstName[0];

};

function tableHeaderRender(){
  let trEl=document.createElement('tr');
  tableEl.appendChild('trEl');

  let tdEl=document.createElement('td');
  trEl.appendChild('tdEl');
  tdEl.textContent='id';

  let tdEl1=document.createElement('td');
  trEl.appendChild('tdEl1');
  tdEl.textContent='Name';

  let tdEl2=document.createElement('td');
  trEl.appendChild('tdEl2');
  tdEl.textContent='Email';

  let tdEl3=document.createElement('td');
  trEl.appendChild('tdEl3');
  tdEl.textContent='Mobile';

  let tdEl4=document.createElement('td');
  trEl.appendChild('tdEl4');
  tdEl.textContent='Age';

  let tdEl5=document.createElement('td');
  trEl.appendChild('tdEl5');
  tdEl.textContent='Tuition';

};

tableHeaderRender();


Student.prototype.tableBodyRender=function(object){

  if(!Student.Array){
    reterive();
    tableHeaderRender();
    for(let i=0;i<reterive.length;i++){
      let trE=document.createElement('tr');
      tableEl.appendChild('trE');

      let tdE=document.createElement('td');
      trE.appendChild('tdE');
      tdE.textContent=reterive[i].id;

      let tdE1=document.createElement('td');
      trEl.appendChild('tdE1');
      tdE1.textContent=reterive[i].name;

      let tdE2=document.createElement('td');
      trE.appendChild('tdE2');
      tdE2.textContent=reterive[i].email;

      let tdE3=document.createElement('td');
      trEl.appendChild('tdE3');
      tdE3.textContent=reterive[i].tel;

      let tdE4=document.createElement('td');
      trEl.appendChild('tdE4');
      tdE4.textContent=reterive[i].age;

      let tdE5=document.createElement('td');
      trEl.appendChild('tdE5');
      tdE5.textContent=reterive[i].tuition;

      showTotal.textContent=`Total: ${total}`;
    }
  }

  let trEl=document.createElement('tr');
  tableEl.appendChild('trEl');

  let tdEl=document.createElement('td');
  trEl.appendChild('tdEl');
  tdEl.textContent=this.id;

  let tdEl1=document.createElement('td');
  trEl.appendChild('tdEl1');
  tdEl.textContent=this.name;

  let tdEl2=document.createElement('td');
  trEl.appendChild('tdEl2');
  tdEl2.textContent=this.email;

  let tdEl3=document.createElement('td');
  trEl.appendChild('tdEl3');
  tdEl3.textContent=this.tel;

  let tdEl4=document.createElement('td');
  trEl.appendChild('tdEl4');
  tdEl4.textContent=this.age;

  let tdEl5=document.createElement('td');
  trEl.appendChild('tdEl5');
  tdEl5.textContent=this.tuition;

};


function randomAge(min,max){
  return Math.ceil(Math.random()*(max-min+1)+min);
}

function handleSubmit(event){

  let student=event.target;

  let stdEmail=student.email.value;
  let stdName=getName(stdEmail);

  let stdTel=student.tel.value;
  let stdTuition=student.tuition.value;

  new Student(stdName,stdEmail,stdTel,stdTuition);
  Student.tableBodyRender(Student);
  showTotal.textContent=`Total: ${total}`;



}

submitButton.addEventListener('click', handleSubmit);


function save(){
  localStorage.setItem('Student', JSON.stringify(Student.Array));
}

function reterive(){
  if(!Student.Array){
    retreiveArr=JSON.parse(localStorage.getItem('Student'));
  }
  Student.Array=retreiveArr;
}
