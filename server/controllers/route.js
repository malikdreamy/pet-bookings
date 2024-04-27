const router = require('express').Router();
const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('');






router.get('/', async(req,res)=>{
    try {

        res.render('homepage.ejs');
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
});


router.get('/contact-me', async(req,res)=>{
    try {

        res.render('contact-me.ejs');
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
});



router.get('/about-me', async(req,res)=>{
    try {
        res.render('about-me.ejs');
        
    } catch (error) {
        console.log(error);
    }
})




router.post('/book-appointment', async(req,res)=>{
    try {
        const {name, email, phoneNumber, bookingTime, dogAmount} = req.body;
console.log(req.body)
        // const msg = {
        //     to: ``, 
        //     from: ``, // Change to your verified sender
        //     subject: `New Booking Request!`,
        //     html: ` <h1>New Booking Request From ${name}! </h1>
        //     <h2> Email: ${email}</h2>
        //     <h2> Phone Number: ${phoneNumber}</h2>
        //     <h2> Booking Time Requested: ${bookingTime}</h2>
        //     <h2>Number Of Dogs: ${dogAmount}</h2>
        //     <h6>Please Email Or Text/Call Them To Confirm The Appointment</h6>
        //     `
        //   };
          
        //   sgMail.send(msg).then(() => {console.log('Email sent')})
        //     .catch((error) => {
        //       console.error(error)
        //     });
            res.status(200).json({message: "Appointment Requested"})
      



    } catch (error) {
        console.log(error);
    }
})





module.exports = router;