var myCar2 = {

    maxSpeed: 70,
    driver: "Mjcksp",
    drive: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);
    }
};

var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed,time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(70, "Maja");
var myCar2 = new Car(50, "MAdam");
var myCar3 = new Car(40, "Maciek");
var myCar4 = new Car(30, "Ludi");

myCar.drive(30,5);
myCar3.logDriver();
