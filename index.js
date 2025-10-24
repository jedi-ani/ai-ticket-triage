
       
document.getElementById("test").addEventListener("submit", function(event) {
        event.preventDefault();
            const userId = document.getElementById("userId").value.trim();
            if (userId !== "") {
                checkRecipient();
            } else {
                alert("ID empty");
            }
            sessionStorage.setItem("userId",userId);
        });

function checkRecipient(){
    fetch('https://68f88065deff18f212b64b85.mockapi.io/Recipient', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      //return res.json();
  }
  // handle error
}).then(tasks => {
   
}).catch(error => {
  // handle error
})
    }

    /* setTimeout(() =>{
  sessionStorage.setItem("userId",userId);},5000); */