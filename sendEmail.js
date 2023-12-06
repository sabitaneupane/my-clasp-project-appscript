function sendEmail(employeeName, recipientEmail) {
  let subject = `Happy Birthday! - ${employeeName}`;
  let birthdayMessage = `Wishing you a fantastic birthday filled with joy and happiness! 🎉🎂`;
  let regardsInfo = `Best Regards, \n ${senderInfo.name}`;

  let body = `Dear ${employeeName}, \n\n ${birthdayMessage} \n\n ${regardsInfo}`;

  MailApp.sendEmail({
    to: recipientEmail,
    subject: subject,
    body: body,
    name: senderInfo.name,
  });
}
