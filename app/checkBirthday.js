function isTodayBirthday(birthday, today) {
  let birthdayDate = new Date(birthday);
  birthdayDate.setFullYear(today.getFullYear()); // Set the year of the birthday to the current year

  return birthdayDate.toDateString() === today.toDateString();
}
