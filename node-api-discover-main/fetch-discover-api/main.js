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

function updateUser(id, updatedUser) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertAPI.innerText = data)
        .catch(error => console.error(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
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

const updatedUser = {
    name: "Mayk Brito",
    avatar: "https://picsum.photos/200/300",
    city: "Florianópolis"
}
// updateUser("1", updatedUser)

deleteUser(1)

getUsers()
getUser(2)
