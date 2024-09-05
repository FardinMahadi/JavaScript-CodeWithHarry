class RailwayForm {
  constructor(givenname, trainNo) {
    console.log("Constructor Called... " + givenname + " " + trainNo);
    this.name = givenname;
    this.trainNo = trainNo;
  }
  submit() {
    console.log(
      this.name + ": your form is submitted for train number: " + this.trainNo
    );
  }
  cancel() {
    console.log(
      this.name + ": This form is cancelled for train number: " + this.trainNo
    );
  }
}

// Create & fill a form for Fardin
let fardinForm = new RailwayForm("Fardin", 1234);
// No need to Fill the form with Fardin's details
// fardinForm.fill();

// Create & fill a form for Rohan
let rohanForm1 = new RailwayForm("Rohan", 3243);
let rohanForm2 = new RailwayForm("Rohan", 5423);

fardinForm.submit();
rohanForm1.submit();
rohanForm2.submit();
rohanForm1.cancel();
