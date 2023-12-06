const senderInfo = {
  name: "YOUR_NAME",
};

const sheetId = "";
const myHeaders = {
  name: "Name",
  dob: "DOB",
  email: "Email",
};

const headerIndex = 0; // Assuming the first row contains headers

let currentDate = new Date();

function processAction (){
    readUserInfo();
}
