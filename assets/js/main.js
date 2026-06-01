const formNewPerson = document.getElementById("form-person");

const inputName  = formNewPerson.name;
const inputEmail = formNewPerson.email;
const inputPhone = formNewPerson.phone;
const inputDescription = formNewPerson.description;

const submitBt = formNewPerson.submitBt;

const elements = [
  {
    tag: inputName,
    name: 'name'
  },
  {
    tag: inputEmail,
    name: 'email'
  },
  {
    tag: inputPhone,
    name: 'phone'
  },
  {
    tag: inputDescription,
    name: 'description'
  }
]

function verificationValues({ name, email, phone, description }){
  if(!name){
    return {
      response: false,
      element: "name"
    }
  }

  if(!email){
    return {
      response: false,
      element: "email"
    }
  }

  if(!phone){
    return {
      response: false,
      element: "phone"
    }
  }

  if(!description){
    return {
      response: false,
      element: "description"
    }
  }

  return {
    response: true
  }
};

function warningInfo({ element, status }){

  if(!status){
      document.getElementById(`warning-${element}`).style.visibility = "visible";
      document.getElementById(element).style.borderColor= "red";
      return
  }

   document.getElementById(`warning-${element}`).style.visibility = "hidden";
   document.getElementById(element).style.borderColor= "lightgray";

};

elements.map(({ tag, name })=>{
  tag.addEventListener("keypress", ( { key }) => {
    if(key.length){
      warningInfo({ element: name, status: true })
      return
    }
    warningInfo({ element: name, status: false })
  })
});

submitBt.addEventListener("click", function () {

  const { name, email, phone, description } = formNewPerson;

  const existValues = verificationValues(
    { 
      name: name.value, 
      email: email.value, 
      phone: phone.value, 
      description: description.value 
    }
  );

  if(!existValues.response){
    warningInfo({ element: existValues.element, status: existValues.response });
  }

})