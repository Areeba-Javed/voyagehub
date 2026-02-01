export const saveAuth = (payload)=>{
    localStorage.setItem("auth",JSON.stringify(payload))
}
export const getAuth = ()=>{
    const raw = localStorage.getItem("auth")
    return raw? JSON.parse(raw):null
}
export const getToken =()=>{
    const auth = getAuth();
    return auth && auth.token ? auth.token : null;
}
export const getUser =()=>{
    const auth = getAuth();
    return auth && auth.user ? auth.user : null;
}
export const isLoggedIn=()=>{
    return !!getToken();
}

export const Logout =()=>localStorage.removeItem("auth")
