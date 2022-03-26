// Copyright (c) 2022 Anita Kay All rights reserved
//
// Created by: Anita Kay
// Created on: Mar 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get first name from text field
  let firstName = document.getElementById("first-name").value
	// get age from text field and cast it to integer
  let userAge = parseInt(document.getElementById("age-entered").value)
  // get sign name from text field
  let zodiacSign = document.getElementById("zodiac-sign").value
  // display name, age, and sigb back to user
  document.getElementById('user-info').innerHTML = "Your first name is " + firstName + ", you are " + userAge + " years old, and your zodiac sign is " + zodiacSign + "."
}
