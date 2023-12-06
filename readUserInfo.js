function readUserInfo() {
  let sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  let dataRange = sheet.getDataRange();
  let values = dataRange.getValues();

  const sheetHeaderIndex = {
    name: values[headerIndex].indexOf(myHeaders.name),
    dob: values[headerIndex].indexOf(myHeaders.dob),
    email: values[headerIndex].indexOf(myHeaders.email),
  };

  for (let i = 1; i < values.length; i++) {

    const userInfo = {
      name: values[i][sheetHeaderIndex.name],
      dob: values[i][sheetHeaderIndex.dob],
      email: values[i][sheetHeaderIndex.email],
    };

    if (isTodayBirthday(userInfo.dob, currentDate)) {
      sendEmail(userInfo.name, userInfo.email);
    }
  }
}
