import axios from 'axios'

const serviceurl = "http://localhost:5000"

export async function userlogin(username,password)
{
    return await axios.post(serviceurl + "/api/user/login",{username,password})
}

export async function getsidebar(role)
{
    return await axios.get(serviceurl + "/api/sidebar",{params:{role}})
}