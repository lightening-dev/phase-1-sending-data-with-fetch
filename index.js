


function submitData(name, email) {

  const configurationObject = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({name, email}),
  }


  return fetch('http://localhost:3000/users', configurationObject)
  .then(response => response.json())
  .then(object => {
    document.querySelector("body").innerHTML = object.id;})
  .catch(error => { document.querySelector("body").innerHTML = error.message

  })
}
