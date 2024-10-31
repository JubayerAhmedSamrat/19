
//api ............................
fetch(' https://randomuser.me/api/?resu1ts=50')
.then(res => res.json())
.then(data => console.log(data));