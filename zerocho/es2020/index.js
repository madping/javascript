
    const a=document.querySelector('#first').value //input
    const b=document.querySelector('#second').value
    const r=document.querySelector('#result')

document.querySelector('#click').addEventListener('click',()=>{

    // const a=document.querySelector('#first').value //input
    // const b=document.querySelector('#second').value
    // const r=document.querySelector('#result')

    if(a){
        const r=document.querySelector('#result')
        if(b){
            const c=a*b
            r.textContent=c
            //document.querySelector('#result').textContent=a*b //span
        }else{
            r.textContent='두번째 값 입력'
            //document.querySelector('#result').textContent='두번째 값 입력'
        }
    }else{
            r.textContent='첫번째 값 입력'
            //document.querySelector('#result').textContent='첫번째 값 입력'
    }
})

