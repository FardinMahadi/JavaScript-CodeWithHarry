class RailwayForm {
  constructor(givenname, trainNo, address, time) {
    console.log("Constructor Called... " + givenname + " " + trainNo);
    this.name = givenname;
    this.trainNo = trainNo;
    this.address = address;
    this.time = time;
  }
  preview() {
    console.log(
      this.name +
        ": your form is submitted for train number: " +
        this.trainNo +
        " and your address " +
        this.address
    );
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
    this.trainNo = 0;
  }
}

let fardinForm = new RailwayForm(
  "Fardin",
  32843,
  "Rayerbug, Dhaka, Bangladesh"
);

fardinForm.preview();
fardinForm.submit();
fardinForm.cancel();
fardinForm.preview();
