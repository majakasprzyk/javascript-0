var myCar2 = {

    maxSpeed: 70,
    driver: "Mjcksp",
    drive: function(speed, time){
        console.log(speed * time);
    },
    test: function(){
        console.log(this);
    }
};

myCar2.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);