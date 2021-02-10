fetch('http://localhost:3000/weather?address=hdbnfjsdlm').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }
        else {
            console.log(data) 
        }
    })
})

const weatherform=document.querySelector('form')

weatherform.addEventListener('submit',()=>{
    console.log('testing!!!')
})