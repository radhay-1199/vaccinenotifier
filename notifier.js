let nodemailer = require('nodemailer');

let nodemailerTransporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: String(process.env.EMAIL),
        pass: String(process.env.APPLICATION_PASSWORD)
    }
});

function buildBody(slotDetails){
    let body = `<h1><mark>Centre Details</mark></h1></br>`

    for(const detail of slotDetails){
        let slotBody = `Center Name: ${detail.name}<br/>
        Address: ${detail.block_name}, ${detail.state_name}, ${detail.pincode} <br/>
        Timing: ${detail.from} to ${detail.to} <br/>
        Fee Type: ${detail.fee_type} <br/>
        Fee: ₹${detail.fee} <br/>
        Available Capacity: ${detail.available_capacity} doses <br/>
        Vaccine: ${detail.vaccine} <br/>
        Slots Available: <br/>`
        for(const slots of detail.slots){
            slotBody = `${slotBody} ${slots} <br/>`
        }
        slotBody = `${slotBody} <br/>`
        body = `${body} ${slotBody}`
    }

    return body
}

exports.sendEmail = function (email, subjectLine, slotDetails, callback) {
    let options = {
        from: String('Vaccine Checker ' + process.env.EMAIL),
        to: email,
        subject: subjectLine,
        html: buildBody(slotDetails)
    };
    nodemailerTransporter.sendMail(options, (error, info) => {
        if (error) {
            return callback(error);
        }
        callback(error, info);
    });
};
