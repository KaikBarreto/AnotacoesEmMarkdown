const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.innerText = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser(id) {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            userName.innerText = data.name
            userCity.innerText = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertAPI.innerText = data)
        .catch(error => console.error(error))
}

const newUser = {
    name: "Kaik Barreto",
    avatar: "https://avatars.githubusercontent.com/u/99971589?v=4",
    city: "Rio de Janeiro"
}

addUser(newUser)

getUsers()
getUser("1")