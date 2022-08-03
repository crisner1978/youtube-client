import axios from "axios";


export const client = axios.create({
    baseURL: "/api/v1"
})

export function authenticate(response) {
    console.log(response)
    client({
        method: "POST",
        url: "/auth/google-login",
        data: { idToken: response.credential }
    }).then((res) => {
        console.log("Sign in success :", res)
        window.location.assign(window.location.href)
    }).catch((error) => {
        console.group("Sign in error", error.response)
    })
}

export async function signoutUser() {
    await client.get("/auth/signout");
    window.location.pathname = '/'
}