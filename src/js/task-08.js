const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert(`Всі поля повинні бути заповнені!`);
    return;
  }

  const dataForm = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(dataForm);
  event.currentTarget.reset();
}
