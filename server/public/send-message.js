const customerName = document.querySelector(".name").value;
const email = document.querySelector(".email").value;
const phoneNumber = document.querySelector(".phone-number").value;
const bookingTime = document.querySelector('.booking-time').value;
const dogAmount = document.querySelector('.dog-amount').value;
const sendBtn = document.querySelector(".send-btn");

let digitReg = /^\d-+$/;
const emailReg = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



sendBtn.addEventListener("click", async()=>{
    alert(email)

if(email === "" || !emailReg.test(email)){
alert("Please Enter Valid Email");
return;
}

if(customerName === ""){
alert("Please Enter Your Name");
return;
}

if(phoneNumber === ""){
alert("Please Enter Phone Number");
return;
}

if(bookingTime === ""){
alert("Please Enter A Booking Time");
return;
}

if(dogAmount === ""){
alert("Please Enter Dog Amount");
return;
};


const obj= {
    name: customerName,
    email: email,
    phoneNumber: phoneNumber,
    bookingTime: bookingTime,
    dogAmount: dogAmount
}


const sendFetch = await fetch('/book-appointment', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(obj)
})

const response = await sendFetch.json();

if(response.message === "Appointment Requested"){
    alert("Appointment Requested. We Will Text Or Email You Back Soon");

}else {
    alert("Error Sending Message, Please Try Again..");
}






})






