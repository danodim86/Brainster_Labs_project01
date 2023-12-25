const form = document.getElementById('form-hiring');
const full_name = document.getElementById('full-name');
const company_name = document.getElementById('company-name');
const email = document.getElementById('company-email');
const telephone = document.getElementById('phone-contact');
const student_type = document.getElementById('selectedStudentType');

var full_name_check = false;
var company_name_check = false;
var email_check = false;
var telephone_check = false;
var student_type_check = false;

form.addEventListener('submit', e => {
  if((full_name_check==true)&&(company_name_check==true)&&(email_check==true)&&(telephone_check==true)&&(student_type_check==true)){
    form.submit();
    full_name_check = false;
    company_name_check = false;
    email_check = false;
    telephone_check = false;
    student_type_check = false;
  }
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  
  const full_nameValue = full_name.value.trim();
  const emailValue = email.value.trim();
  const company_nameValue = company_name.value.trim();
  const telephoneValue = telephone.value.trim();
  const student_typeValue = student_type.value.trim();

  if(full_nameValue === '') {
    setError(full_name, 'Внеси име и презиме');
  } else {
    setSuccess(full_name);
    full_name_check=true;
  }


  if(company_nameValue === '') {
    setError(company_name, 'Внеси име на компанија');
  } else {
    setSuccess(company_name);
    company_name_check=true;
  }

  if(emailValue === '') {
    setError(email, 'Внеси емајл адреса');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Внеси валидна емајл адреса (да содржи @ и .com)');
  } else {
    setSuccess(email);
    email_check=true;
  }

  if(telephoneValue === '') {
    setError(telephone, 'Внеси валиден телефонски број');
  } else {
    setSuccess(telephone);
    telephone_check=true;
  }


  if(student_typeValue === ''){
    const input_student_type_control = document.getElementById("selectField");
    const student_type_error = document.getElementById('dropdown-id').querySelector('.error');

    student_type_error.innerText = 'Избери една од опциите';
    input_student_type_control.classList.add('error_student_type');
    input_student_type_control.classList.remove('success_student_type')
  }else{
    const input_student_type_control = document.getElementById("selectField");
    const student_type_error = document.getElementById('dropdown-id').querySelector('.error');
  
    student_type_error.innerText = '';
    input_student_type_control.classList.remove('error_student_type');
    input_student_type_control.classList.add('success_student_type')

    student_type_check = true;

  }

}; 


