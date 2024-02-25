const url = "https://dev.jobkhuzi.com/api/user/login";
const data = () => {
  const myData = {
    moin: "hello",
  };
  console.log(myData);
  return myData;
};

const methods = {
  submitForm(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const parson = {
      username: username,
      email: email,
      password: password,
    };
    console.log({ username, email, password });
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(parson),
    })
      .then((parson) => {
        return parson.json();
      })
      .then((data) => {
        console.log(data);
      });
  },
};

const allInformation = {
  methods,
};
const app = Vue.createApp(allInformation);

app.mount("#app");
