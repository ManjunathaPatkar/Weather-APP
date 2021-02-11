const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const message1=document.querySelector('#message-1')
const message2=document.querySelector('#message-2')

message1.textContent=''
message2.textContent=''
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    message1.textContent = 'Loading...'
    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error)
                message1.textContent=data.error;
            }
            else if(data.minTemp===undefined){
                message1.textContent="Please enter a valid address!"
            }
            else {
                console.log(data)
                message1.textContent = ''
                const a=data.forecast+" maximum temperature is "+data.minTemp+" Maximum temperature is "+data.maxTemp+ " in "+data.place
                message2.textContent=a
            }
        })
    }) 
})