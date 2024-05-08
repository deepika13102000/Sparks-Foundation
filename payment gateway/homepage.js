let savefile = () => {
  let payment = document.getElementById("paymentInput");
  let amount = document.getElementById("amountInput");
  let name = document.getElementById("nameInput").value;
  let email = document.getElementById("emailInput");
  let mobile = document.getElementById("mobileInput");

  let data =
    "\rName : " +
    name +"\n" +
    "\rEmail : " +
    email.value +"\n" +
    "\rMobile : " +
    mobile.value +"\n" +
    "\rPaymenttype : " +
    payment.value +"\n" +
    "\rAmount" +
    amount.value ;
    
    Email.send({
        Host:'smtp.elasticemail.com',
        Username:'deepika.timple@gmail.com',
        Password:"DCA4B8BB23530B51A8BABCFD067CCF7E4A26",
        Port:2525,
        To : email.value,
        From:"deepika.timple@gmail.com",
        Subject: "Payment Status",
        Body: data,
    })
    .then(function(message){
        alert('Mail sent successfully')

    });

};
