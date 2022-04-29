const url = "http://localhost:5500/api"

async function getUsers() {
    try {
        const response = await axios.get(url)
        apiResult.innerText = JSON.stringify(response.data)

    } catch (error) {
        console.error(error)
    }
}

async function getUser(id) {
    try {
        const response = await axios.get(`${url}/${id}`)
        const data = response.data
        userName.innerText = data.name
        userCity.innerText = data.city
        userAvatar.src = data.avatar
        userID.innerText = data.id
    } catch (error) {
        console.error(error)
    }
}

async function addNewUser(newUser) {
    try {
        const response = await axios.post(url, newUser)
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

async function updateUser(id, updatedUser) {
    try {
        const response = await axios.put(`${url}/${id}`, updatedUser)
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

async function deleteUser(id) {
    try {
        // const response = await axios.delete(`${url}/${id}`)
        // console.log(response)
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}
deleteUser(1)

getUsers()
getUser(2)



const newUser = {
    name: "Kaik Barreto",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

addNewUser(newUser)



// const updatedUser = {
//     name: "Marcelo Calvis",
//     avatar: "https://picsum.photos/200/300",
//     city: "Recife"

// }
// updateUser(1, updatedUser)