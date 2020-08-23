async function getUser(){
    try{
        const res=await axios.get('/users');
        const users=res.data;
        const list=document.getElementById('list');
        list.innerHTML='';
        
    }catch(err){
        console.error(err);
    }
}