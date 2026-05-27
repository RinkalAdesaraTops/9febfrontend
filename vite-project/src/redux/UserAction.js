export const ins = "INSERT"
export const upd = "UPDATE"
export const del = "DELETE"
export const insFun = (data)=>{
    return {
        type:ins,
        payload:data
    }
}
export const delFun = (id)=>{
    return {
        type:del,
        payload:id
    }
}
export const updFun = (id,data)=>{
    return {
        type:upd,
        payload:{id,data}
    }
}

