class RailwayForm {
  submit() {
    alert(
      this.name + ": your form is submitted for train number: " + this.trainNo
    );
  }
  cancel() {
    alert(
      this.name + ": This form is cancelled for train number: " + this.trainNo
    );
  }
  fill(givenname, trainNo) {
    this.name = givenname;
    this.trainNo = trainNo;
  }
}

// Create a form for Fardin
let fardinForm = new RailwayForm();
// Fill the form with Fardin's details
fardinForm.fill("Fardin", 1234);

// Create a form for Rohan
let rohanForm1 = new RailwayForm();
let rohanForm2 = new RailwayForm();
// Fill the form with Rohan's details
rohanForm1.fill("Rohan", 3243);
rohanForm2.fill("Rohan", 5423);

fardinForm.submit();
rohanForm1.submit();
rohanForm2.submit();
rohanForm1.cancel();
