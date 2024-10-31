const randomUser = () =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => console.log(data))
}

const showUser = (values)=>{
    const mainDiv = document.getElementById('main-div')
    const result = values.forEach(value =>{
        console.log(value)
        const div = document.createElement('div')
        div.innerHTML ="<p>hi</p>"
        mainDiv.appendChid(div)
    })
}
randomUser();