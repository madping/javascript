const http=require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Nodeja</h1>');
    res.end('<p>Hello Server</p>');
})
.listen(8080)

.on('listening', ()=>{
    console.log('8080번 포트에서 서버 대기중');
})

.on('error', err=>{
    console.error(err);
});

