const signupPage = document.getElementById('signup__page');
const signinPage = document.getElementById('signin__page');
const front__page__signin__button = document.getElementById('front__signin__btn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const onpage__signup__button = document.getElementById('onpage__signup__btn');
const onpage__signin__button = document.getElementById('onpage__signin__btn');
const userData = [];

const signup = () => {
    let email__input = email.value;
    let password__input = password.value;
    const userInfo = {email: email__input, password: password__input};
    userData.push(userInfo);
    email.value = '';
    password.value = '';
    alert(JSON.stringify(userData));
}

const signin = () => {
    alert('signin!');
}

onpage__signup__button.addEventListener('click', signup);
onpage__signin__button.addEventListener('click', signin);
