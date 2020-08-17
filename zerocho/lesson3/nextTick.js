setImmediate(()=>{
    console.log('immediate');
});

process.nextTick(()=>{    //항상 가장 먼저 실행 ...마이크로 태스크
    console.log("nextTick");
});

setTimeout(()=>{
    console.log("timeout");
},0);

Promise.resolve().then(()=>console.log("promise"));

