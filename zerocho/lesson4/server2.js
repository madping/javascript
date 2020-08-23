const http=require('http');
const fs=require('fs').promises;

http.createServer(async(req,res)=>{
    try{
        const data=await fs.readFile('./server2.html');
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);
    }catch(err){
        console.error(err);
        //에러 메세지는 일반 문자열이기 때문에 text/plain을 사용
        res.writeHead(500,{'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})

.listen(8080,()=>{
   console.log("서버가 열렸다.");
});
