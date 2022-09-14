export const POST = async({url,props})=>{
    try{
        
        let response = await fetch(url,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(props),
        });

        response = await response.json();
        return response;

    }catch(err){
        return{
            status: false,
            message: err.message,
        };
    }
};