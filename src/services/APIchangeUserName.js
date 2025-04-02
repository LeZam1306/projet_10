export const changeUsernameAPI = async (userName, token) => {
    try{
        const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userName)
            }
        )
        if(!response){
            throw new Error("Echec à la mise a jour de l'userName")
        }else{
            return await response.json()
        }
    }catch(err){
        // console.log(err.message)
    }
}