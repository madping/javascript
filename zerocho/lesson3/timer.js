const timeout=setTimeout(()=>{    //1.5ch gndpsms xkdladkdntdml zhfqordl tlfgod
    console.log('1.5초 후 실행');
},1500);

const interval=setInterval(()=>{  //1초 후에는 인터벌의 콜백이 실행
    console.log("1초마다 실행");     //인터벌의 콜백은 1초마다 실행 되므로 코드 실행후 2초가 지났을때도 콜백이 실행 
},1000);

const timeout2=setTimeout(()=>{
    console.log("실행되지 않습니다.");
},3000);

setTimeout(()=>{                   //2,5초가 지났을때 클리어 타임아웃과 클이어 인터벌이 각각 타임아웃2와 인터벌을 취소
    clearTimeout(timeout2);        //따라서 3초후에는 로그가 아무것도 남지 않음
    clearInterval(interval);
},2500);

const immediate=setImmediate(()=>{   // 제일 먼저 실행
    console.log('즉시실행');           //setTimeout(콜백,0) 보다 먼저 실행됨 일반적으로....되도록이면 셋타임아웃 0는 사용말자...
});

const immediate2=setImmediate(()=>{
    console.log('실행되지 않습니다.');
});

clearImmediate(immediate2); //바로 클리어 했기 때문에 실행 되지 않음.

