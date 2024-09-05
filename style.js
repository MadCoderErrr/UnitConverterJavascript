const lengthBtn = document.getElementById("length-btn"); //not yet needed
const weightBtn = document.getElementById("weight-btn"); //not yet needed
const timeBtn = document.getElementById("time-btn"); //not yet needed
const temperatureBtn = document.getElementById("temperature-btn"); //not yet needed
const areaBtn = document.getElementById("area-btn"); //not yet needed
const volumeBtn = document.getElementById("volume-btn"); //not yet needed

const buttons = document.querySelectorAll(".unit-btn");
const buttonsUnitLengthFrom = document.querySelectorAll(".length-unit-btn-f");
const buttonsUnitLengthTo = document.querySelectorAll(".length-unit-btn-t");

const buttonsUnitWeightFrom = document.querySelectorAll(".weight-unit-btn-f");
const buttonsUnitWeightTo = document.querySelectorAll(".weight-unit-btn-t");

const buttonsUnitTimeFrom = document.querySelectorAll(".time-unit-btn-f");
const buttonsUnitTimeTo = document.querySelectorAll(".time-unit-btn-t");

const buttonsUnitTemperatureFrom = document.querySelectorAll(".temperature-unit-btn-f");
const buttonsUnitTemperatureTo = document.querySelectorAll(".temperature-unit-btn-t");

let lengthActiveUnitFrom = document.getElementsByClassName("active-unit-btn-f");
let lengthActiveUnitTo = document.getElementsByClassName("active-unit-btn-t");

const fromUnits = document.querySelectorAll(".from");
const toUnits = document.querySelectorAll(".to");

let inputFrom = document.getElementById("input-from").value;
let inputTo = document.getElementById("result-to");
let buttonLengthFrom = "";
let buttonLengthTo = "";
let buttonWeightFrom = "";
let buttonWeightTo = "";
let buttonTimeFrom = "";
let buttonTimeTo = "";
let buttonTemperatureFrom = "";
let buttonTemperatureTo = "";

function start() {
    buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            fromUnits.forEach(fromU => {
                fromU.classList.remove("active-units")
            })
            toUnits.forEach(toU => {
                toU.classList.remove("active-units")
            })
            buttons.forEach(btn => 
                btn.classList.remove("active-btn"));
                fromUnits[index].classList.add("active-units");
                toUnits[index].classList.add("active-units")
            this.classList.add("active-btn");
        })
    });

    buttonsUnitLengthFrom.forEach(button => {
        button.addEventListener("click", function() {
            buttonsUnitLengthFrom.forEach(btn => btn.classList.remove("active-unit-btn-f"));
            this.classList.add("active-unit-btn-f");
            buttonLengthFrom = button.value;
            inputFrom = document.getElementById("input-from").value;
            checkLengthBtn(buttonLengthFrom, buttonLengthTo);
        });
    });

    buttonsUnitLengthTo.forEach(button => {
        button.addEventListener("click", function() {
            buttonsUnitLengthTo.forEach(btn => btn.classList.remove("active-unit-btn-t"));
            this.classList.add("active-unit-btn-t");
            buttonLengthTo = button.value;
            inputFrom = document.getElementById("input-from").value;
            checkLengthBtn(buttonLengthFrom, buttonLengthTo);
        });
    });

    buttonsUnitWeightFrom.forEach(button => {
        button.addEventListener("click", function() {
            buttonsUnitWeightFrom.forEach(btn => btn.classList.remove("active-unit-btn-f"));
            this.classList.add("active-unit-btn-f");
            buttonWeightFrom = button.value;
            inputFrom = document.getElementById("input-from").value;
            checkWeightBtn(buttonWeightFrom, buttonWeightTo)
        });
    });

    buttonsUnitWeightTo.forEach(button => {
        button.addEventListener("click", function() {
            buttonsUnitWeightTo.forEach(btn => btn.classList.remove("active-unit-btn-t"));
            this.classList.add("active-unit-btn-t");
            buttonWeightTo = button.value;
            inputFrom = document.getElementById("input-from").value;
            checkWeightBtn(buttonWeightFrom, buttonWeightTo)
        });
    });

    buttonsUnitTimeFrom.forEach(button => {
        button.addEventListener("click", function() {
            buttonsUnitTimeFrom.forEach(btn => btn.classList.remove("active-unit-btn-t"));
            this.classList.add("active-unit-btn-t");
            buttonTimeFrom = button.value;
            inputFrom = document.getElementById("input-from").value;
            checkTimeBtn(buttonTimeFrom, buttonTimeTo)
        });
    });

    buttonsUnitTimeTo.forEach(button => {
        button.addEventListener("click", function() {
            buttonsUnitTimeTo.forEach(btn => btn.classList.remove("active-unit-btn-t"));
            this.classList.add("active-unit-btn-t");
            buttonTimeTo = button.value;
            inputFrom = document.getElementById("input-from").value;
            checkTimeBtn(buttonTimeFrom, buttonTimeTo)
        });
    });

    buttonsUnitTemperatureFrom.forEach(button => {
        button.addEventListener("click", function() {
            buttonsUnitTemperatureFrom.forEach(btn => btn.classList.remove("active-unit-btn-t"));
            this.classList.add("active-unit-btn-t");
            buttonTemperatureFrom = button.value;
            inputFrom = document.getElementById("input-from").value;
            checkTemperatureBtn(buttonTemperatureFrom, buttonTemperatureTo)
        });
    });

    buttonsUnitTemperatureTo.forEach(button => {
        button.addEventListener("click", function() {
            buttonsUnitTemperatureTo.forEach(btn => btn.classList.remove("active-unit-btn-t"));
            this.classList.add("active-unit-btn-t");
            buttonTemperatureTo = button.value;
            inputFrom = document.getElementById("input-from").value;
            checkTemperatureBtn(buttonTemperatureFrom, buttonTemperatureTo)
        });
    });
}

//All length-related functions here
//All length-related functions here
//All length-related functions here

function checkLengthBtn(button1, button2) {
    if (button1 === "Meter") {
        if (button2 ==="Meter") {
            meterToMeter(inputFrom, inputTo)
        } else if (button2 === "Kilometer") {
            meterToKilometer(inputFrom, inputTo)
        } else if (button2 === "Centimeter") {
            meterToCentimeter(inputFrom, inputTo)
        } else if (button2 === "Millimeter") {
            meterToMillimeter(inputFrom, inputTo)
        } else if (button2 === "Micrometer") {
            meterToMicrometer(inputFrom, inputTo)
        } else if (button2 === "Nanometer") {
            meterToNanometer(inputFrom, inputTo)
        } else if (button2 === "Mile") {
            meterToMile(inputFrom, inputTo)
        } else if (button2 === "Yard") {
            meterToYard(inputFrom, inputTo)
        } else if (button2 === "Foot") {
            meterToFoot(inputFrom, inputTo)
        } else if (button2 === "Inch") {
            meterToInch(inputFrom, inputTo) 
        }
    } else if (button1 === "Kilometer") {
        if (button2 === "Meter") {
            kilometerToMeter(inputFrom, inputTo)
        } else if (button2 === "Kilometer") {
            kilometerToKilometer(inputFrom, inputTo)
        } else if (button2 === "Centimeter") {
            kilometerToCentimeter(inputFrom, inputTo)
        } else if (button2 === "Millimeter") {
            kilometerToMillimeter(inputFrom, inputTo)
        } else if (button2 === "Micrometer") {
            kilometerToMicrometer(inputFrom, inputTo)
        } else if (button2 === "Nanometer") {
            kilometerToNanometer(inputFrom, inputTo)
        } else if (button2 === "Mile") {
            kilometerToMile(inputFrom, inputTo)
        } else if (button2 === "Yard") {
            kilometerToYard(inputFrom, inputTo)
        } else if (button2 === "Foot") {
            kilometerToFoot(inputFrom, inputTo)
        } else if (button2 === "Inch") {
            kilometerToInch(inputFrom, inputTo)
        }
    } else if (button1 === "Centimeter") {
        if (button2 === "Meter") {
            centimeterToMeter(inputFrom, inputTo)
        } else if (button2 === "Kilometer") {
            centimeterToKilometer(inputFrom, inputTo)
        } else if (button2 === "Centimeter") {
            centimeterToCentimeter(inputFrom, inputTo)
        } else if (button2 === "Millimeter") {
            centimeterToMillimeter(inputFrom, inputTo)
        } else if (button2 === "Micrometer") {
            centimeterToMicrometer(inputFrom, inputTo)
        } else if (button2 === "Nanometer") {
            centimeterToNanometer(inputFrom, inputTo)
        } else if (button2 === "Mile") {
            centimeterToMile(inputFrom, inputTo)
        } else if (button2 === "Yard") {
            centimeterToYard(inputFrom, inputTo)
        } else if (button2 === "Foot") {
            centimeterToFoot(inputFrom, inputTo)
        } else if (button2 === "Inch") {
            centimeterToInch(inputFrom, inputTo)
        }
    } else if (button1 === "Millimeter") {
        if (button2 === "Meter") {
            millimeterToMeter(inputFrom, inputTo)
        } else if (button2 === "Kilometer") {
            millimeterToKilometer(inputFrom, inputTo)
        } else if (button2 === "Centimeter") {
            millimeterToCentimeter(inputFrom, inputTo)
        } else if (button2 === "Millimeter") {
            millimeterToMillimeter(inputFrom, inputTo)
        } else if (button2 === "Micrometer") {
            millimeterToMicrometer(inputFrom, inputTo)
        } else if (button2 === "Nanometer") {
            millimeterToNanometer(inputFrom, inputTo)
        } else if (button2 === "Mile") {
            millimeterToMile(inputFrom, inputTo)
        } else if (button2 === "Yard") {
            millimeterToYard(inputFrom, inputTo)
        } else if (button2 === "Foot") {
            millimeterToFoot(inputFrom, inputTo)
        } else if (button2 === "Inch") {
            millimeterToInch(inputFrom, inputTo)
        }
    } else if (button1 === "Micrometer") {
        if (button2 === "Meter") {
            micrometerToMeter(inputFrom, inputTo)
        } else if (button2 === "Kilometer") {
            micrometerToKilometer(inputFrom, inputTo)
        } else if (button2 === "Centimeter") {
            micrometerToCentimeter(inputFrom, inputTo)
        } else if (button2 === "Millimeter") {
            micrometerToMillimeter(inputFrom, inputTo)
        } else if (button2 === "Micrometer") {
            micrometerToMicrometer(inputFrom, inputTo)
        } else if (button2 === "Nanometer") {
            micrometerToNanometer(inputFrom, inputTo)
        } else if (button2 === "Mile") {
            micrometerToMile(inputFrom, inputTo)
        } else if (button2 === "Yard") {
            micrometerToYard(inputFrom, inputTo)
        } else if (button2 === "Foot") {
            micrometerToFoot(inputFrom, inputTo)
        } else if (button2 === "Inch") {
            micrometerToInch(inputFrom, inputTo)
        }
    } else if (button1 === "Nanometer") {
        if (button2 === "Meter") {
            nanometerToMeter(inputFrom, inputTo)
        } else if (button2 === "Kilometer") {
            nanometerToKilometer(inputFrom, inputTo)
        } else if (button2 === "Centimeter") {
            nanometerToCentimeter(inputFrom, inputTo)
        } else if (button2 === "Millimeter") {
            nanometerToMillimeter(inputFrom, inputTo)
        } else if (button2 === "Micrometer") {
            nanometerToMicrometer(inputFrom, inputTo)
        } else if (button2 === "Nanometer") {
            nanometerToNanometer(inputFrom, inputTo)
        } else if (button2 === "Mile") {
            nanometerToMile(inputFrom, inputTo)
        } else if (button2 === "Yard") {
            nanometerToYard(inputFrom, inputTo)
        } else if (button2 === "Foot") {
            nanometerToFoot(inputFrom, inputTo)
        } else if (button2 === "Inch") {
            nanometerToInch(inputFrom, inputTo)
        }
    } else if (button1 === "Mile") {
        if (button2 === "Meter") {
            mileToMeter(inputFrom, inputTo)
        } else if (button2 === "Kilometer") {
            mileToKilometer(inputFrom, inputTo)
        } else if (button2 === "Centimeter") {
            mileToCentimeter(inputFrom, inputTo)
        } else if (button2 === "Millimeter") {
            mileToMillimeter(inputFrom, inputTo)
        } else if (button2 === "Micrometer") {
            mileToMicrometer(inputFrom, inputTo)
        } else if (button2 === "Nanometer") {
            mileToNanometer(inputFrom, inputTo)
        } else if (button2 === "Mile") {
            mileToMile(inputFrom, inputTo)
        } else if (button2 === "Yard") {
            mileToYard(inputFrom, inputTo)
        } else if (button2 === "Foot") {
            mileToFoot(inputFrom, inputTo)
        } else if (button2 === "Inch") {
            mileToInch(inputFrom, inputTo)
        }
    } else if (button1 === "Yard") {
        if (button2 === "Meter") {
            yardToMeter(inputFrom, inputTo)
        } else if (button2 === "Kilometer") {
            yardToKilometer(inputFrom, inputTo)
        } else if (button2 === "Centimeter") {
            yardToCentimeter(inputFrom, inputTo)
        } else if (button2 === "Millimeter") {
            yardToMillimeter(inputFrom, inputTo)
        } else if (button2 === "Micrometer") {
            yardToMicrometer(inputFrom, inputTo)
        } else if (button2 === "Nanometer") {
            yardToNanometer(inputFrom, inputTo)
        } else if (button2 === "Mile") {
            yardToMile(inputFrom, inputTo)
        } else if (button2 === "Yard") {
            yardToYard(inputFrom, inputTo)
        } else if (button2 === "Foot") {
            yardToFoot(inputFrom, inputTo)
        } else if (button2 === "Inch") {
            yardToInch(inputFrom, inputTo)
        }
    } else if (button1 === "Foot") {
        if (button2 === "Meter") {
            footToMeter(inputFrom, inputTo)
        } else if (button2 === "Kilometer") {
            footToKilometer(inputFrom, inputTo)
        } else if (button2 === "Centimeter") {
            footToCentimeter(inputFrom, inputTo)
        } else if (button2 === "Millimeter") {
            footToMillimeter(inputFrom, inputTo)
        } else if (button2 === "Micrometer") {
            footToMicrometer(inputFrom, inputTo)
        } else if (button2 === "Nanometer") {
            footToNanometer(inputFrom, inputTo)
        } else if (button2 === "Mile") {
            footToMile(inputFrom, inputTo)
        } else if (button2 === "Yard") {
            footToYard(inputFrom, inputTo)
        } else if (button2 === "Foot") {
            footToFoot(inputFrom, inputTo)
        } else if (button2 === "Inch") {
            footToInch(inputFrom, inputTo)
        }
    } else if (button1 === "Inch") {
        if (button2 === "Meter") {
            inchToMeter(inputFrom, inputTo)
        } else if (button2 === "Kilometer") {
            inchToKilometer(inputFrom, inputTo)
        } else if (button2 === "Centimeter") {
            inchToCentimeter(inputFrom, inputTo)
        } else if (button2 === "Millimeter") {
            inchToMillimeter(inputFrom, inputTo)
        } else if (button2 === "Micrometer") {
            inchToMicrometer(inputFrom, inputTo)
        } else if (button2 === "Nanometer") {
            inchToNanometer(inputFrom, inputTo)
        } else if (button2 === "Mile") {
            inchToMile(inputFrom, inputTo)
        } else if (button2 === "Yard") {
            inchToYard(inputFrom, inputTo)
        } else if (button2 === "Foot") {
            inchToFoot(inputFrom, inputTo)
        } else if (button2 === "Inch") {
            inchToInch(inputFrom, inputTo)
        }
    }
};

//from: Meter

function meterToMeter(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function meterToKilometer(inputF, inputT) {
    let a = inputF / 1000;
    inputT.value = a;
}

function meterToCentimeter(inputF, inputT) {
    let a = inputF * 100;
    inputT.value = a;
}

function meterToMillimeter(inputF, inputT) {
    let a = inputF * 1000;
    inputT.value = a;
}

function meterToMicrometer(inputF, inputT) {
    let a = inputF * 1000000;
    inputT.value = a;
}

function meterToNanometer(inputF, inputT) {
    let a = inputF * 1000000000;
    inputT.value = a;
}

function meterToMile(inputF, inputT) {
    let a = inputF / 1609.34;
    inputT.value = a;
}

function meterToYard(inputF, inputT) {
    let a = inputF / 0.9144;
    inputT.value = a;
}

function meterToFoot(inputF, inputT) {
    let a = inputF * 3.28084;
    inputT.value = a;
}

function meterToInch(inputF, inputT) {
    let a = inputF / 0.0254;
    inputT.value = a;
}

//from: Kilometer

function kilometerToMeter(inputF, inputT) {
    let a = inputF * 1000;
    inputT.value = a;
}

function kilometerToKilometer(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function kilometerToCentimeter(inputF, inputT) {
    let a = inputF * 100000;
    inputT.value = a;
}

function kilometerToMillimeter(inputF, inputT) {
    let a = inputF * 1000000;
    inputT.value = a;
}

function kilometerToMicrometer(inputF, inputT) {
    let a = inputF * 1000000000;
    inputT.value = a;
}

function kilometerToNanometer(inputF, inputT) {
    let a = inputF * 1000000000000;
    inputT.value = a;
}

function kilometerToMile(inputF, inputT) {
    let a = inputF / 1.60934;
    inputT.value = a;
}

function kilometerToYard(inputF, inputT) {
    let a = inputF * 1093.61;
    inputT.value = a;
}

function kilometerToFoot(inputF, inputT) {
    let a = inputF * 3280.84;
    inputT.value = a;
}

function kilometerToInch(inputF, inputT) {
    let a = inputF * 39370.1;
    inputT.value = a;
}

//from: Centimeter

function centimeterToMeter(inputF, inputT) {
    let a = inputF / 100;
    inputT.value = a;
}

function centimeterToKilometer(inputF, inputT) {
    let a = inputF / 100000;
    inputT.value = a;
}

function centimeterToCentimeter(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function centimeterToMillimeter(inputF, inputT) {
    let a = inputF * 10;
    inputT.value = a;
}

function centimeterToMicrometer(inputF, inputT) {
    let a = inputF * 10000;
    inputT.value = a;
}

function centimeterToNanometer(inputF, inputT) {
    let a = inputF * 10000000;
    inputT.value = a;
}

function centimeterToMile(inputF, inputT) {
    let a = inputF / 160934;
    inputT.value = a;
}

function centimeterToYard(inputF, inputT) {
    let a = inputF / 91.44;
    inputT.value = a;
}

function centimeterToFoot(inputF, inputT) {
    let a = inputF / 30.48;
    inputT.value = a;
}

function centimeterToInch(inputF, inputT) {
    let a = inputF / 2.54;
    inputT.value = a;
}

//from: Millimeter

function millimeterToMeter(inputF, inputT) {
    let a = inputF / 1000;
    inputT.value = a;
}

function millimeterToKilometer(inputF, inputT) {
    let a = inputF / 1000000;
    inputT.value = a;
}

function millimeterToCentimeter(inputF, inputT) {
    let a = inputF / 10;
    inputT.value = a;
}

function millimeterToMillimeter(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function millimeterToMicrometer(inputF, inputT) {
    let a = inputF * 1000;
    inputT.value = a;
}

function millimeterToNanometer(inputF, inputT) {
    let a = inputF * 1000000;
    inputT.value = a;
}

function millimeterToMile(inputF, inputT) {
    let a = inputF / 1609000;
    inputT.value = a;
}

function millimeterToYard(inputF, inputT) {
    let a = inputF / 914.4;
    inputT.value = a;
}

function millimeterToFoot(inputF, inputT) {
    let a = inputF / 304.8;
    inputT.value = a;
}

function millimeterToInch(inputF, inputT) {
    let a = inputF / 25.4;
    inputT.value = a;
}

//from: Micrometer

function micrometerToMeter(inputF, inputT) {
    let a = inputF / 1000000;
    inputT.value = a;
}

function micrometerToKilometer(inputF, inputT) {
    let a = inputF / 1000000000;
    inputT.value = a;
}

function micrometerToCentimeter(inputF, inputT) {
    let a = inputF / 10000;
    inputT.value = a;
}

function micrometerToMillimeter(inputF, inputT) {
    let a = inputF / 1000;
    inputT.value = a;
}

function micrometerToMicrometer(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function micrometerToNanometer(inputF, inputT) {
    let a = inputF * 1000;
    inputT.value = a;
}

function micrometerToMile(inputF, inputT) {
    let a = inputF / 1609000000;
    inputT.value = a;
}

function micrometerToYard(inputF, inputT) {
    let a = inputF / 914400;
    inputT.value = a;
}

function micrometerToFoot(inputF, inputT) {
    let a = inputF / 304800;
    inputT.value = a;
}

function micrometerToInch(inputF, inputT) {
    let a = inputF / 25400;
    inputT.value = a;
}

//from: Nanometer

function nanometerToMeter(inputF, inputT) {
    let a = inputF / 1000000000;
    inputT.value = a;
}

function nanometerToKilometer(inputF, inputT) {
    let a = inputF / 1000000000000;
    inputT.value = a;
}

function nanometerToCentimeter(inputF, inputT) {
    let a = inputF / 10000000;
    inputT.value = a;
}

function nanometerToMillimeter(inputF, inputT) {
    let a = inputF / 1000000;
    inputT.value = a;
}

function nanometerToMicrometer(inputF, inputT) {
    let a = inputF / 1000;
    inputT.value = a;
}

function nanometerToNanometer(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function nanometerToMile(inputF, inputT) {
    let a = inputF / 1609000000000;
    inputT.value = a;
}

function nanometerToYard(inputF, inputT) {
    let a = inputF / 914400000;
    inputT.value = a;
}

function nanometerToFoot(inputF, inputT) {
    let a = inputF / 304800000;
    inputT.value = a;
}

function nanometerToInch(inputF, inputT) {
    let a = inputF / 25400000;
    inputT.value = a;
}

//from: Mile

function mileToMeter(inputF, inputT) {
    let a = inputF * 1609.34;
    inputT.value = a;
}

function mileToKilometer(inputF, inputT) {
    let a = inputF * 1.60934;
    inputT.value = a;
}

function mileToCentimeter(inputF, inputT) {
    let a = inputF * 160934;
    inputT.value = a;
}

function mileToMillimeter(inputF, inputT) {
    let a = inputF * 1609000;
    inputT.value = a;
}

function mileToMicrometer(inputF, inputT) {
    let a = inputF * 1609000000;
    inputT.value = a;
}

function mileToNanometer(inputF, inputT) {
    let a = inputF * 1609000000000;
    inputT.value = a;
}

function mileToMile(inputF, inputT) {
    let a = inputF * 1;
    inputT.value = a;
}

function mileToYard(inputF, inputT) {
    let a = inputF * 1760;
    inputT.value = a;
}

function mileToFoot(inputF, inputT) {
    let a = inputF * 5280;
    inputT.value = a;
}

function mileToInch(inputF, inputT) {
    let a = inputF * 63360;
    inputT.value = a;
}

//from: Yard

function yardToMeter(inputF, inputT) {
    let a = inputF / 1.09361;
    inputT.value = a;
}

function yardToKilometer(inputF, inputT) {
    let a = inputF / 1093.61;
    inputT.value = a;
}

function yardToCentimeter(inputF, inputT) {
    let a = inputF * 91.44;
    inputT.value = a;
}

function yardToMillimeter(inputF, inputT) {
    let a = inputF * 914.4;
    inputT.value = a;
}

function yardToMicrometer(inputF, inputT) {
    let a = inputF * 914400;
    inputT.value = a;
}

function yardToNanometer(inputF, inputT) {
    let a = inputF * 914400000;
    inputT.value = a;
}

function yardToMile(inputF, inputT) {
    let a = inputF / 1760;
    inputT.value = a;
}

function yardToYard(inputF, inputT) {
    let a = inputF * 1;
    inputT.value = a;
}

function yardToFoot(inputF, inputT) {
    let a = inputF * 3;
    inputT.value = a;
}

function yardToInch(inputF, inputT) {
    let a = inputF * 36;
    inputT.value = a;
}

//from: Foot 

function footToMeter(inputF, inputT) {
    let a = inputF / 3.28084;
    inputT.value = a
}

function footToKilometer(inputF, inputT) {
    let a = inputF / 3280.84;
    inputT.value = a
}

function footToCentimeter(inputF, inputT) {
    let a = inputF * 30.48;
    inputT.value = a
}

function footToMillimeter(inputF, inputT) {
    let a = inputF * 304.8;
    inputT.value = a
}

function footToMicrometer(inputF, inputT) {
    let a = inputF * 304800;
    inputT.value = a
}

function footToNanometer(inputF, inputT) {
    let a = inputF * 304800000;
    inputT.value = a
}

function footToMile(inputF, inputT) {
    let a = inputF / 5280;
    inputT.value = a
}

function footToYard(inputF, inputT) {
    let a = inputF / 3;
    inputT.value = a
}

function footToFoot(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a
}

function footToInch(inputF, inputT) {
    let a = inputF * 12;
    inputT.value = a
}

//from: Inch

function inchToMeter(inputF, inputT) {
    let a = inputF / 39.3701;
    inputT.value = a;
}

function inchToKilometer(inputF, inputT) {
    let a = inputF / 39370.1;
    inputT.value = a;
}

function inchToCentimeter(inputF, inputT) {
    let a = inputF * 2.54;
    inputT.value = a;
}

function inchToMillimeter(inputF, inputT) {
    let a = inputF * 25.4;
    inputT.value = a;
}

function inchToMicrometer(inputF, inputT) {
    let a = inputF * 25400;
    inputT.value = a;
}

function inchToNanometer(inputF, inputT) {
    let a = inputF * 25400000;
    inputT.value = a;
}

function inchToMile(inputF, inputT) {
    let a = inputF / 63360;
    inputT.value = a;
}

function inchToYard(inputF, inputT) {
    let a = inputF / 36;
    inputT.value = a;
}

function inchToFoot(inputF, inputT) {
    let a = inputF / 12;
    inputT.value = a;
}

function inchToInch(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

//All weight-related functions here
//All weight-related functions here
//All weight-related functions here

function checkWeightBtn(button1, button2) {
    if (button1 === "Kilogram") {
        if (button2 === "Kilogram") {
            kilogramToKilogram(inputFrom, inputTo)
        } else if (button2 === "Gram") {
            kilogramToGram(inputFrom, inputTo)
        } else if (button2 === "Milligram") {
            kilogramToMilligram(inputFrom, inputTo)
        } else if (button2 === "Metric Ton") {
            kilogramToMetricTon(inputFrom, inputTo)
        } else if (button2 === "Long Ton") {
            kilogramToLongTon(inputFrom, inputTo)
        } else if (button2 === "Short Ton") {
            kilogramToShortTon(inputFrom, inputTo)
        } else if (button2 === "Pound") {
            kilogramToPound(inputFrom, inputTo)
        } else if (button2 === "Ounce") {
            kilogramToOunce(inputFrom, inputTo)
        } else if (button2 === "Stone") {
            kilogramToStone(inputFrom, inputTo)
        }
    } else if (button1 === "Gram") {
        if (button2 === "Kilogram") {
            gramToKilogram(inputFrom, inputTo)
        } else if (button2 === "Gram") {
            gramToGram(inputFrom, inputTo)
        } else if (button2 === "Milligram") {
            gramToMilligram(inputFrom, inputTo)
        } else if (button2 === "Metric Ton") {
            gramToMetricTon(inputFrom, inputTo)
        } else if (button2 === "Long Ton") {
            gramToLongTon(inputFrom, inputTo)
        } else if (button2 === "Short Ton") {
            gramToShortTon(inputFrom, inputTo)
        } else if (button2 === "Pound") {
            gramToPound(inputFrom, inputTo)
        } else if (button2 === "Ounce") {
            gramToOunce(inputFrom, inputTo)
        } else if (button2 === "Stone") {
            gramToStone(inputFrom, inputTo)
        }
    } else if (button1 === "Milligram") {
        if (button2 === "Kilogram") {
            milligramToKilogram(inputFrom, inputTo)
        } else if (button2 === "Gram") {
            milligramToGram(inputFrom, inputTo)
        } else if (button2 === "Milligram") {
            milligramToMilligram(inputFrom, inputTo)
        } else if (button2 === "Metric Ton") {
            milligramToMetricTon(inputFrom, inputTo)
        } else if (button2 === "Long Ton") {
            milligramToLongTon(inputFrom, inputTo)
        } else if (button2 === "Short Ton") {
            milligramToShortTon(inputFrom, inputTo)
        } else if (button2 === "Pound") {
            milligramToPound(inputFrom, inputTo)
        } else if (button2 === "Ounce") {
            milligramToOunce(inputFrom, inputTo)
        } else if (button2 === "Stone") {
            milligramToStone(inputFrom, inputTo)
        }
    } else if (button1 === "Metric Ton") {
        if (button2 === "Kilogram") {
            metrictonToKilogram(inputFrom, inputTo)
        } else if (button2 === "Gram") {
            metrictonToGram(inputFrom, inputTo)
        } else if (button2 === "Milligram") {
            metrictonToMilligram(inputFrom, inputTo)
        } else if (button2 === "Metric Ton") {
            metrictonToMetricTon(inputFrom, inputTo)
        } else if (button2 === "Long Ton") {
            metrictonToLongTon(inputFrom, inputTo)
        } else if (button2 === "Short Ton") {
            metrictonToShortTon(inputFrom, inputTo)
        } else if (button2 === "Pound") {
            metrictonToPound(inputFrom, inputTo)
        } else if (button2 === "Ounce") {
            metrictonToOunce(inputFrom, inputTo)
        } else if (button2 === "Stone") {
            metrictonToStone(inputFrom, inputTo)
        }
    } else if (button1 === "Long Ton") {
        if (button2 === "Kilogram") {
            longtonToKilogram(inputFrom, inputTo)
        } else if (button2 === "Gram") {
            longtonToGram(inputFrom, inputTo)
        } else if (button2 === "Milligram") {
            longtonToMilligram(inputFrom, inputTo)
        } else if (button2 === "Metric Ton") {
            longtonToMetricTon(inputFrom, inputTo)
        } else if (button2 === "Long Ton") {
            longtonToLongTon(inputFrom, inputTo)
        } else if (button2 === "Short Ton") {
            longtonToShortTon(inputFrom, inputTo)
        } else if (button2 === "Pound") {
            longtonToPound(inputFrom, inputTo)
        } else if (button2 === "Ounce") {
            longtonToOunce(inputFrom, inputTo)
        } else if (button2 === "Stone") {
            longtonToStone(inputFrom, inputTo)
        }
    } else if (button1 === "Short Ton") {
        if (button2 === "Kilogram") {
            shorttonToKilogram(inputFrom, inputTo)
        } else if (button2 === "Gram") {
            shorttonToGram(inputFrom, inputTo)
        } else if (button2 === "Milligram") {
            shorttonToMilligram(inputFrom, inputTo)
        } else if (button2 === "Metric Ton") {
            shorttonToMetricTon(inputFrom, inputTo)
        } else if (button2 === "Long Ton") {
            shorttonToLongTon(inputFrom, inputTo)
        } else if (button2 === "Short Ton") {
            shorttonToShortTon(inputFrom, inputTo)
        } else if (button2 === "Pound") {
            shorttonToPound(inputFrom, inputTo)
        } else if (button2 === "Ounce") {
            shorttonToOunce(inputFrom, inputTo)
        } else if (button2 === "Stone") {

        }
    } else if (button1 === "Pound") {
        if (button2 === "Kilogram") {
            poundToKilogram(inputFrom, inputTo)
        } else if (button2 === "Gram") {
            poundToGram(inputFrom, inputTo)
        } else if (button2 === "Milligram") {
            poundToMilligram(inputFrom, inputTo)
        } else if (button2 === "Metric Ton") {
            poundToMetricTon(inputFrom, inputTo)
        } else if (button2 === "Long Ton") {
            poundToLongTon(inputFrom, inputTo)
        } else if (button2 === "Short Ton") {
            poundToShortTon(inputFrom, inputTo)
        } else if (button2 === "Pound") {
            poundToPound(inputFrom, inputTo)
        } else if (button2 === "Ounce") {
            poundToOunce(inputFrom, inputTo)
        } else if (button2 === "Stone") {
            poundToStone(inputFrom, inputTo)
        }
    } else if (button1 === "Ounce") {
        if (button2 === "Kilogram") {
            ounceToKilogram(inputFrom, inputTo)
        } else if (button2 === "Gram") {
            ounceToGram(inputFrom, inputTo)
        } else if (button2 === "Milligram") {
            ounceToMilligram(inputFrom, inputTo)
        } else if (button2 === "Metric Ton") {
            ounceToMetricTon(inputFrom, inputTo)
        } else if (button2 === "Long Ton") {
            ounceToLongTon(inputFrom, inputTo)
        } else if (button2 === "Short Ton") {
            ounceToShortTon(inputFrom, inputTo)
        } else if (button2 === "Pound") {
            ounceToPound(inputFrom, inputTo)
        } else if (button2 === "Ounce") {
            ounceToOunce(inputFrom, inputTo)
        } else if (button2 === "Stone") {
            ounceToStone(inputFrom, inputTo)
        }
    } else if (button1 === "Stone") {
        if (button2 === "Kilogram") {
            stoneToKilogram(inputFrom, inputTo)
        } else if (button2 === "Gram") {
            stoneToGram(inputFrom, inputTo)
        } else if (button2 === "Milligram") {
            stoneToMilligram(inputFrom, inputTo)
        } else if (button2 === "Metric Ton") {
            stoneToMetricTon(inputFrom, inputTo)
        } else if (button2 === "Long Ton") {
            stoneToLongTon(inputFrom, inputTo)
        } else if (button2 === "Short Ton") {
            stoneToShortTon(inputFrom, inputTo)
        } else if (button2 === "Pound") {
            stoneToPound(inputFrom, inputTo)
        } else if (button2 === "Ounce") {
            stoneToOunce(inputFrom, inputTo)
        } else if (button2 === "Stone") {
            stoneToStone(inputFrom, inputTo)
        }
    }
}

//from: Kilogram

function kilogramToKilogram(inputF, inputT) {
    let a = inputF * 1;
    inputT.value = a;
}

function kilogramToGram(inputF, inputT) {
    let a = inputF * 1000;
    inputT.value = a;
}

function kilogramToMilligram(inputF, inputT) {
    let a = inputF * 1000000;
    inputT.value = a;
}

function kilogramToMetricTon(inputF, inputT) {
    let a = inputF / 1000;
    inputT.value = a;
}

function kilogramToLongTon(inputF, inputT) {
    let a = inputF / 1016.05;
    inputT.value = a;
}

function kilogramToShortTon(inputF, inputT) {
    let a = inputF / 907.18473999999;
    inputT.value = a;
}

function kilogramToPound(inputF, inputT) {
    let a = inputF * 2.20462;
    inputT.value = a;
}

function kilogramToOunce(inputF, inputT) {
    let a = inputF * 35.274;
    inputT.value = a;
}

function kilogramToStone(inputF, inputT) {
    let a = inputF / 6.35029;
    inputT.value = a;
}

//from: Gram

function gramToKilogram(inputF, inputT) {
    let a = inputF / 1000;
    inputT.value = a;
}

function gramToGram(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function gramToMilligram(inputF, inputT) {
    let a = inputF * 1000;
    inputT.value = a;
}

function gramToMetricTon(inputF, inputT) {
    let a = inputF / 1000000;
    inputT.value = a;
}

function gramToLongTon(inputF, inputT) {
    let a = inputF / 1016000;
    inputT.value = a;
}

function gramToShortTon(inputF, inputT) {
    let a = inputF / 907185;
    inputT.value = a;
}

function gramToPound(inputF, inputT) {
    let a = inputF / 453.592;
    inputT.value = a;
}

function gramToOunce(inputF, inputT) {
    let a = inputF / 28.3495;
    inputT.value = a;
}

function gramToStone(inputF, inputT) {
    let a = inputF / 6350.29;
    inputT.value = a;
}

//from: Milligram

function milligramToKilogram(inputF, inputT) {
    let a = inputF / 1000000;
    inputT.value = a;
}

function milligramToGram(inputF, inputT) {
    let a = inputF / 1000;
    inputT.value = a;
}

function milligramToMilligram(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function milligramToMetricTon(inputF, inputT) {
    let a = inputF / 1000000000;
    inputT.value = a;
}

function milligramToLongTon(inputF, inputT) {
    let a = inputF / 1016000000;
    inputT.value = a;
}

function milligramToShortTon(inputF, inputT) {
    let a = inputF / 907200000;
    inputT.value = a;
}

function milligramToPound(inputF, inputT) {
    let a = inputF / 453592;
    inputT.value = a;
}

function milligramToOunce(inputF, inputT) {
    let a = inputF / 28349.5;
    inputT.value = a;
}

function milligramToStone(inputF, inputT) {
    let a = inputF / 6350000;
    inputT.value = a;
}

 //from Metric Ton

function metrictonToKilogram(inputF, inputT) {
    let a = inputF * 1000;
    inputT.value = a;
}

function metrictonToGram(inputF, inputT) {
    let a = inputF * 1000000;
    inputT.value = a;
}

function metrictonToMilligram(inputF, inputT) {
    let a = inputF * 1000000000;
    inputT.value = a;
}

function metrictonToMetricTon(inputF, inputT) {
    let a = inputF * 1;
    inputT.value = a;
}

function metrictonToLongTon(inputF, inputT) {
    let a = inputF / 1.01605;
    inputT.value = a;
}

function metrictonToShortTon(inputF, inputT) {
    let a = inputF * 1.10231;
    inputT.value = a;
}

function metrictonToPound(inputF, inputT) {
    let a = inputF * 2204.62;
    inputT.value = a;
}

function metrictonToOunce(inputF, inputT) {
    let a = inputF * 35274;
    inputT.value = a;
}

function metrictonToStone(inputF, inputT) {
    let a = inputF * 157.473;
    inputT.value = a;
}

//from: Long Ton

function longtonToKilogram(inputF, inputT) {
    let a = inputF * 1016.05;
    inputT.value = a;
}

function longtonToGram(inputF, inputT) {
    let a = inputF * 1016050;
    inputT.value = a;
}

function longtonToMilligram(inputF, inputT) {
    let a = inputF * 1016050000;
    inputT.value = a;
}

function longtonToMetricTon(inputF, inputT) {
    let a = inputF * 1.01605;
    inputT.value = a;
}

function longtonToLongTon(inputF, inputT) {
    let a = inputF * 1;
    inputT.value = a;
}

function longtonToShortTon(inputF, inputT) {
    let a = inputF * 1.12;
    inputT.value = a;
}

function longtonToPound(inputF, inputT) {
    let a = inputF * 2240;
    inputT.value = a;
}

function longtonToOunce(inputF, inputT) {
    let a = inputF * 35840;
    inputT.value = a;
}

function longtonToStone(inputF, inputT) {
    let a = inputF * 160;
    inputT.value = a;
}

//from: Short Ton

function shorttonToKilogram(inputF, inputT) {
    let a = inputF * 907.185;
    inputT.value = a;
}

function shorttonToGram(inputF, inputT) {
    let a = inputF * 907185;
    inputT.value = a;
}

function shorttonToMilligram(inputF, inputT) {
    let a = inputF * 907185000;
    inputT.value = a;
}

function shorttonToMetricTon(inputF, inputT) {
    let a = inputF / 1.10231;
    inputT.value = a;
}

function shorttonToLongTon(inputF, inputT) {
    let a = inputF / 1.12;
    inputT.value = a;
}

function shorttonToShortTon(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function shorttonToPound(inputF, inputT) {
    let a = inputF * 2000;
    inputT.value = a;
}

function shorttonToOunce(inputF, inputT) {
    let a = inputF * 32000;
    inputT.value = a;
}

function shorttonToStone(inputF, inputT) {
    let a = inputF * 142.857;
    inputT.value = a;
}

//from: Pound

function poundToKilogram(inputF, inputT) {
    let a = inputF / 2.20462;
    inputT.value = a;
}

function poundToGram(inputF, inputT) {
    let a = inputF * 453.592;
    inputT.value = a;
}

function poundToMilligram(inputF, inputT) {
    let a = inputF * 453592;
    inputT.value = a;
}

function poundToMetricTon(inputF, inputT) {
    let a = inputF / 2204.62;
    inputT.value = a;
}

function poundToLongTon(inputF, inputT) {
    let a = inputF / 2240;
    inputT.value = a;
}

function poundToShortTon(inputF, inputT) {
    let a = inputF / 2000;
    inputT.value = a;
}

function poundToPound(inputF, inputT) {
    let a = inputF * 1;
    inputT.value = a;
}

function poundToOunce(inputF, inputT) {
    let a = inputF * 16;
    inputT.value = a;
}

function poundToStone(inputF, inputT) {
    let a = inputF / 14;
    inputT.value = a;
}

//from: Ounce 

function ounceToKilogram(inputF, inputT) {
    let a = inputF / 35.274;
    inputT.value = a;
}

function ounceToGram(inputF, inputT) {
    let a = inputF * 28.3495;
    inputT.value = a;
}

function ounceToMilligram(inputF, inputT) {
    let a = inputF * 28349.5;
    inputT.value = a;
}

function ounceToMetricTon(inputF, inputT) {
    let a = inputF / 35274;
    inputT.value = a;
}

function ounceToLongTon(inputF, inputT) {
    let a = inputF / 35840;
    inputT.value = a;
}

function ounceToShortTon(inputF, inputT) {
    let a = inputF / 32000;
    inputT.value = a;
}

function ounceToPound(inputF, inputT) {
    let a = inputF / 16;
    inputT.value = a;
}

function ounceToOunce(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function ounceToStone(inputF, inputT) {
    let a = inputF / 224;
    inputT.value = a;
}

//from: Stone

function stoneToKilogram(inputF, inputT) {
    let a = inputF * 6.35029;
    inputT.value = a;
}

function stoneToGram(inputF, inputT) {
    let a = inputF * 6350.29;
    inputT.value = a;
}

function stoneToMilligram(inputF, inputT) {
    let a = inputF * 6350290;
    inputT.value = a;
}

function stoneToMetricTon(inputF, inputT) {
    let a = inputF / 157.473;
    inputT.value = a;
}

function stoneToLongTon(inputF, inputT) {
    let a = inputF / 160;
    inputT.value = a;
}

function stoneToShortTon(inputF, inputT) {
    let a = inputF / 142.857;
    inputT.value = a;
}

function stoneToPound(inputF, inputT) {
    let a = inputF * 14;
    inputT.value = a;
}

function stoneToOunce(inputF, inputT) {
    let a = inputF * 224;
    inputT.value = a;
}

function stoneToStone(inputF, inputT) {
    let a = inputF * 224;
    inputT.value = a;
}

//All time-related functions here
//All time-related functions here
//All time-related functions here

function checkTimeBtn(button1, button2) {
    if (button1 === "Second") {
        if (button2 === "Second") {
            secondToSecond(inputFrom, inputTo)
        } else if (button2 === "Millisecond") {
            secondToMillisecond(inputFrom, inputTo)
        } else if (button2 === "Microsecond") {
            secondToMicrosecond(inputFrom, inputTo)
        } else if (button2 === "Nanosecond") {
            secondToNanosecond(inputFrom, inputTo)
        } else if (button2 === "Picosecond") {
            secondToPicosecond(inputFrom, inputTo)
        } else if (button2 === "Minute") {
            secondToMinute(inputFrom, inputTo)
        } else if (button2 === "Hour") {
            secondToHour(inputFrom, inputTo)
        } else if (button2 === "Day") {
            secondToDay(inputFrom, inputTo)
        } else if (button2 === "Week") {
            secondToWeek(inputFrom, inputTo)
        } else if (button2 === "Month") {
            secondToMonth(inputFrom, inputTo)
        } else if (button2 === "Year") {
            secondToYear(inputFrom, inputTo)
        }
    } else if (button1 === "Millisecond") {
        if (button2 === "Second") {
            millisecondToSecond(inputFrom, inputTo)
        } else if (button2 === "Millisecond") {
            millisecondToMillisecond(inputFrom, inputTo)
        } else if (button2 === "Microsecond") {
            millisecondToMicrosecond(inputFrom, inputTo)
        } else if (button2 === "Nanosecond") {
            millisecondToNanosecond(inputFrom, inputTo)
        } else if (button2 === "Picosecond") {
            millisecondToPicosecond(inputFrom, inputTo)
        } else if (button2 === "Minute") {
            millisecondToMinute(inputFrom, inputTo)
        } else if (button2 === "Hour") {
            millisecondToHour(inputFrom, inputTo)
        } else if (button2 === "Day") {
            millisecondToDay(inputFrom, inputTo)
        } else if (button2 === "Week") {
            millisecondToWeek(inputFrom, inputTo)
        } else if (button2 === "Month") {
            millisecondToMonth(inputFrom, inputTo)
        } else if (button2 === "Year") {
            millisecondToYear(inputFrom, inputTo)
        }
    } else if (button1 === "Microsecond") {
        if (button2 === "Second") {
            microsecondToSecond(inputFrom, inputTo)
        } else if (button2 === "Millisecond") {
            microsecondToMillisecond(inputFrom, inputTo)
        } else if (button2 === "Microsecond") {
            microsecondToMicrosecond(inputFrom, inputTo)
        } else if (button2 === "Nanosecond") {
            microsecondToNanosecond(inputFrom, inputTo)
        } else if (button2 === "Picosecond") {
            microsecondToPicosecond(inputFrom, inputTo)
        } else if (button2 === "Minute") {
            microsecondToMinute(inputFrom, inputTo)
        } else if (button2 === "Hour") {
            microsecondToHour(inputFrom, inputTo)
        } else if (button2 === "Day") {
            microsecondToDay(inputFrom, inputTo)
        } else if (button2 === "Week") {
            microsecondToWeek(inputFrom, inputTo)
        } else if (button2 === "Month") {
            microsecondToMonth(inputFrom, inputTo)
        } else if (button2 === "Year") {
            microsecondToYear(inputFrom, inputTo)
        }
    } else if (button1 === "Nanosecond") {
        if (button2 === "Second") {
            nanosecondToSecond(inputFrom, inputTo)
        } else if (button2 === "Millisecond") {
            nanosecondToMillisecond(inputFrom, inputTo)
        } else if (button2 === "Microsecond") {
            nanosecondToMicrosecond(inputFrom, inputTo)
        } else if (button2 === "Nanosecond") {
            nanosecondToNanosecond(inputFrom, inputTo)
        } else if (button2 === "Picosecond") {
            nanosecondToPicosecond(inputFrom, inputTo)
        } else if (button2 === "Minute") {
            nanosecondToMinute(inputFrom, inputTo)
        } else if (button2 === "Hour") {
            nanosecondToHour(inputFrom, inputTo)
        } else if (button2 === "Day") {
            nanosecondToDay(inputFrom, inputTo)
        } else if (button2 === "Week") {
            nanosecondToWeek(inputFrom, inputTo)
        } else if (button2 === "Month") {
            nanosecondToMonth(inputFrom, inputTo)
        } else if (button2 === "Year") {
            nanosecondToYear(inputFrom, inputTo)
        }
    } else if (button1 === "Picosecond") {
        if (button2 === "Second") {
            picosecondToSecond(inputFrom, inputTo)
        } else if (button2 === "Millisecond") {
            picosecondToMillisecond(inputFrom, inputTo)
        } else if (button2 === "Microsecond") {
            picosecondToMicrosecond(inputFrom, inputTo)
        } else if (button2 === "Nanosecond") {
            picosecondToNanosecond(inputFrom, inputTo)
        } else if (button2 === "Picosecond") {
            picosecondToPicosecond(inputFrom, inputTo)
        } else if (button2 === "Minute") {
            picosecondToMinute(inputFrom, inputTo)
        } else if (button2 === "Hour") {
            picosecondToHour(inputFrom, inputTo)
        } else if (button2 === "Day") {
            picosecondToDay(inputFrom, inputTo)
        } else if (button2 === "Week") {
            picosecondToWeek(inputFrom, inputTo)
        } else if (button2 === "Month") {
            picosecondToMonth(inputFrom, inputTo)
        } else if (button2 === "Year") {
            picosecondToYear(inputFrom, inputTo)
        }
    } else if (button1 === "Minute") {
        if (button2 === "Second") {
            minuteToSecond(inputFrom, inputTo)
        } else if (button2 === "Millisecond") {
            minuteToMillisecond(inputFrom, inputTo)
        } else if (button2 === "Microsecond") {
            minuteToMicrosecond(inputFrom, inputTo)
        } else if (button2 === "Nanosecond") {
            minuteToNanosecond(inputFrom, inputTo)
        } else if (button2 === "Picosecond") {
            minuteToPicosecond(inputFrom, inputTo)
        } else if (button2 === "Minute") {
            minuteToMinute(inputFrom, inputTo)
        } else if (button2 === "Hour") {
            minuteToHour(inputFrom, inputTo)
        } else if (button2 === "Day") {
            minuteToDay(inputFrom, inputTo)
        } else if (button2 === "Week") {
            minuteToWeek(inputFrom, inputTo)
        } else if (button2 === "Month") {
            minuteToMonth(inputFrom, inputTo)
        } else if (button2 === "Year") {
            minuteToYear(inputFrom, inputTo)
        }
    } else if (button1 === "Hour") {
        if (button2 === "Second") {
            hourToSecond(inputFrom, inputTo)
        } else if (button2 === "Millisecond") {
            hourToMillisecond(inputFrom, inputTo)
        } else if (button2 === "Microsecond") {
            hourToMicrosecond(inputFrom, inputTo)
        } else if (button2 === "Nanosecond") {
            hourToNanosecond(inputFrom, inputTo)
        } else if (button2 === "Picosecond") {
            hourToPicosecond(inputFrom, inputTo)
        } else if (button2 === "Minute") {
            hourToMinute(inputFrom, inputTo)
        } else if (button2 === "Hour") {
            hourToHour(inputFrom, inputTo)
        } else if (button2 === "Day") {
            hourToDay(inputFrom, inputTo)
        } else if (button2 === "Week") {
            hourToWeek(inputFrom, inputTo)
        } else if (button2 === "Month") {
            hourToMonth(inputFrom, inputTo)
        } else if (button2 === "Year") {
            hourToYear(inputFrom, inputTo)
        }
    } else if (button1 === "Day") {
        if (button2 === "Second") {
            dayToSecond(inputFrom, inputTo)
        } else if (button2 === "Millisecond") {
            dayToMillisecond(inputFrom, inputTo)
        } else if (button2 === "Microsecond") {
            dayToMicrosecond(inputFrom, inputTo)
        } else if (button2 === "Nanosecond") {
            dayToNanosecond(inputFrom, inputTo)
        } else if (button2 === "Picosecond") {
            dayToPicosecond(inputFrom, inputTo)
        } else if (button2 === "Minute") {
            dayToMinute(inputFrom, inputTo)
        } else if (button2 === "Hour") {
            dayToHour(inputFrom, inputTo)
        } else if (button2 === "Day") {
            dayToDay(inputFrom, inputTo)
        } else if (button2 === "Week") {
            dayToWeek(inputFrom, inputTo)
        } else if (button2 === "Month") {
            dayToMonth(inputFrom, inputTo)
        } else if (button2 === "Year") {
            dayToYear(inputFrom, inputTo)
        }
    } else if (button1 === "Week") {
        if (button2 === "Second") {
            weekToSecond(inputFrom, inputTo)
        } else if (button2 === "Millisecond") {
            weekToMillisecond(inputFrom, inputTo)
        } else if (button2 === "Microsecond") {
            weekToMicrosecond(inputFrom, inputTo)
        } else if (button2 === "Nanosecond") {
            weekToNanosecond(inputFrom, inputTo)
        } else if (button2 === "Picosecond") {
            weekToPicosecond(inputFrom, inputTo)
        } else if (button2 === "Minute") {
            weekToMinute(inputFrom, inputTo)
        } else if (button2 === "Hour") {
            weekToHour(inputFrom, inputTo)
        } else if (button2 === "Day") {
            weekToDay(inputFrom, inputTo)
        } else if (button2 === "Week") {
            weekToWeek(inputFrom, inputTo)
        } else if (button2 === "Month") {
            weekToMonth(inputFrom, inputTo)
        } else if (button2 === "Year") {
            weekToYear(inputFrom, inputTo)
        }
    } else if (button1 === "Month") {
        if (button2 === "Second") {
            monthToSecond(inputFrom, inputTo)
        } else if (button2 === "Millisecond") {
            monthToMillisecond(inputFrom, inputTo)
        } else if (button2 === "Microsecond") {
            monthToMicrosecond(inputFrom, inputTo)
        } else if (button2 === "Nanosecond") {
            monthToNanosecond(inputFrom, inputTo)
        } else if (button2 === "Picosecond") {
            monthToPicosecond(inputFrom, inputTo)
        } else if (button2 === "Minute") {
            monthToMinute(inputFrom, inputTo)
        } else if (button2 === "Hour") {
            monthToHour(inputFrom, inputTo)
        } else if (button2 === "Day") {
            monthToDay(inputFrom, inputTo)
        } else if (button2 === "Week") {
            monthToWeek(inputFrom, inputTo)
        } else if (button2 === "Month") {
            monthToMonth(inputFrom, inputTo)
        } else if (button2 === "Year") {
            monthToYear(inputFrom, inputTo)
        }
    } else if (button1 === "Year") {
        if (button2 === "Second") {
            yearToSecond(inputFrom, inputTo)
        } else if (button2 === "Millisecond") {
            yearToMillisecond(inputFrom, inputTo)
        } else if (button2 === "Microsecond") {
            yearToMicrosecond(inputFrom, inputTo)
        } else if (button2 === "Nanosecond") {
            yearToNanosecond(inputFrom, inputTo)
        } else if (button2 === "Picosecond") {
            yearToPicosecond(inputFrom, inputTo)
        } else if (button2 === "Minute") {
            yearToMinute(inputFrom, inputTo)
        } else if (button2 === "Hour") {
            yearToHour(inputFrom, inputTo)
        } else if (button2 === "Day") {
            yearToDay(inputFrom, inputTo)
        } else if (button2 === "Week") {
            yearToWeek(inputFrom, inputTo)
        } else if (button2 === "Month") {
            yearToMonth(inputFrom, inputTo)
        } else if (button2 === "Year") {
            yearToYear(inputFrom, inputTo)
        }
    }
}

//from: Second
function secondToSecond(inputF, inputT) {
    let a = inputF * 1;
    inputT.value = a;
}

function secondToMillisecond(inputF, inputT) {
    let a = inputF * 1000;
    inputT.value = a;
}

function secondToMicrosecond(inputF, inputT) {
    let a = inputF * 1000000;
    inputT.value = a;
}

function secondToNanosecond(inputF, inputT) {
    let a = inputF * 1000000000;
    inputT.value = a;
}

function secondToPicosecond(inputF, inputT) {
    let a = inputF * 1000000000000;
    inputT.value = a;
}

function secondToMinute(inputF, inputT) {
    let a = inputF / 60;
    inputT.value = a;
}

function secondToHour(inputF, inputT) {
    let a = inputF / 3600;
    inputT.value = a;
}

function secondToDay(inputF, inputT) {
    let a = inputF / 86400;
    inputT.value = a;
}

function secondToWeek(inputF, inputT) {
    let a = inputF / 604800;
    inputT.value = a;
}

function secondToMonth(inputF, inputT) {
    let a = inputF / 2628000;
    inputT.value = a;
}

function secondToYear(inputF, inputT) {
    let a = inputF / 31540000;
    inputT.value = a;
}

//from: Millisecond

function millisecondToSecond(inputF, inputT) {
    let a = inputF / 1000;
    inputT.value = a;
}

function millisecondToMillisecond(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function millisecondToMicrosecond(inputF, inputT) {
    let a = inputF * 1000;
    inputT.value = a;
}

function millisecondToNanosecond(inputF, inputT) {
    let a = inputF * 1000000;
    inputT.value = a;
}
function millisecondToPicosecond(inputF, inputT) {
    let a = inputF * 1000000000;
    inputT.value = a;
}

function millisecondToMinute(inputF, inputT) {
    let a = inputF / 60000;
    inputT.value = a;
}

function millisecondToHour(inputF, inputT) {
    let a = inputF / 3600000;
    inputT.value = a;
}

function millisecondToDay(inputF, inputT) {
    let a = inputF / 86400000;
    inputT.value = a;
}

function millisecondToWeek(inputF, inputT) {
    let a = inputF / 604800000;
    inputT.value = a;
}

function millisecondToMonth(inputF, inputT) {
    let a = inputF / 2628000000;
    inputT.value = a;
}

function millisecondToYear(inputF, inputT) {
    let a = inputF / 31540000000;
    inputT.value = a;
}

//from: Microsecond

function microsecondToSecond(inputF, inputT) {
    let a = inputF / 1000000;
    inputT.value = a;
}

function microsecondToMillisecond(inputF, inputT) {
    let a = inputF / 1000;
    inputT.value = a;
}

function microsecondToMicrosecond(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function microsecondToNanosecond(inputF, inputT) {
    let a = inputF * 1000;
    inputT.value = a;
}

function microsecondToPicosecond(inputF, inputT) {
    let a = inputF * 1000000;
    inputT.value = a;
}

function microsecondToMinute(inputF, inputT) {
    let a = inputF / 60000000;
    inputT.value = a;
}

function microsecondToHour(inputF, inputT) {
    let a = inputF / 3600000000;
    inputT.value = a;
}

function microsecondToDay(inputF, inputT) {
    let a = inputF / 86400000000;
    inputT.value = a;
}

function microsecondToWeek(inputF, inputT) {
    let a = inputF / 604800000000;
    inputT.value = a;
}

function microsecondToMonth(inputF, inputT) {
    let a = inputF / 2628000000000;
    inputT.value = a;
}

function microsecondToYear(inputF, inputT) {
    let a = inputF / 31540000000000;
    inputT.value = a;
}

//from: Nanosecond

function nanosecondToSecond(inputF, inputT) {
    let a = inputF / 1000000000;
    inputT.value = a;
}

function nanosecondToMillisecond(inputF, inputT) {
    let a = inputF / 1000000;
    inputT.value = a;
}

function nanosecondToMicrosecond(inputF, inputT) {
    let a = inputF / 1000;
    inputT.value = a;
}

function nanosecondToNanosecond(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function nanosecondToPicosecond(inputF, inputT) {
    let a = inputF * 1000;
    inputT.value = a;
}

function nanosecondToMinute(inputF, inputT) {
    let a = inputF / 60000000000;
    inputT.value = a;
}

function nanosecondToHour(inputF, inputT) {
    let a = inputF / 3600000000000;
    inputT.value = a;
}

function nanosecondToDay(inputF, inputT) {
    let a = inputF / 86400000000000;
    inputT.value = a;
}

function nanosecondToWeek(inputF, inputT) {
    let a = inputF / 604800000000000;
    inputT.value = a;
}

function nanosecondToMonth(inputF, inputT) {
    let a = inputF / 2628000000000000;
    inputT.value = a;
}

function nanosecondToYear(inputF, inputT) {
    let a = inputF / (3.154 * 10**16);
    inputT.value = a;
}

//From: Picosecond

function picosecondToSecond(inputF, inputT) {
    let a = inputF / (1 * 10**12);
    inputT.value = a;
}

function picosecondToMillisecond(inputF, inputT) {
    let a = inputF / (1 * 10**9);
    inputT.value = a;
}

function picosecondToMicrosecond(inputF, inputT) {
    let a = inputF / (1 * 10**6);
    inputT.value = a;
}

function picosecondToNanosecond(inputF, inputT) {
    let a = inputF / (1 * 10**3);
    inputT.value = a;
}

function picosecondToPicosecond(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function picosecondToMinute(inputF, inputT) {
    let a = inputF / (6 * 10**13);
    inputT.value = a;
}

function picosecondToHour(inputF, inputT) {
    let a = inputF / (3.6 * 10**15);
    inputT.value = a;
}

function picosecondToDay(inputF, inputT) {
    let a = inputF / (8.64 * 10**16);
    inputT.value = a;
}

function picosecondToWeek(inputF, inputT) {
    let a = inputF / (6.048 * 10**17);
    inputT.value = a;
}

function picosecondToMonth(inputF, inputT) {
    let a = inputF / (2.628 * 10**18);
    inputT.value = a;
}

function picosecondToYear(inputF, inputT) {
    let a = inputF / (3.154 * 10**19);
    inputT.value = a;
}

//from: Minute

function minuteToSecond(inputF, inputT) {
    let a = inputF * 60;
    inputT.value = a;
}

function minuteToMillisecond(inputF, inputT) {
    let a = inputF * 60000;
    inputT.value = a;
}

function minuteToMicrosecond(inputF, inputT) {
    let a = inputF * (6 * 10**7);
    inputT.value = a;
}

function minuteToNanosecond(inputF, inputT) {
    let a = inputF * (6 * 10**10);
    inputT.value = a;
}

function minuteToPicosecond(inputF, inputT) {
    let a = inputF * (6 * 10**13);
    inputT.value = a;
}

function minuteToMinute(inputF, inputT) {
    let a = inputF * 1;
    inputT.value = a;
}

function minuteToHour(inputF, inputT) {
    let a = inputF / 60;
    inputT.value = a;
}

function minuteToDay(inputF, inputT) {
    let a = inputF / 1440;
    inputT.value = a;
}

function minuteToWeek(inputF, inputT) {
    let a = inputF / 10080;
    inputT.value = a;
}

function minuteToMonth(inputF, inputT) {
    let a = inputF / 43800;
    inputT.value = a;
}

function minuteToYear(inputF, inputT) {
    let a = inputF / 525600;
    inputT.value = a;
}

//from: Hour

function hourToSecond(inputF, inputT) {
    let a = inputF * 3600;
    inputT.value = a;
}

function hourToMillisecond(inputF, inputT) {
    let a = inputF * 3600000;
    inputT.value = a;
}

function hourToMicrosecond(inputF, inputT) {
    let a = inputF * (3.6 * 10**9);
    inputT.value = a;
}

function hourToNanosecond(inputF, inputT) {
    let a = inputF * (3.6 * 10**12);
    inputT.value = a;
}

function hourToPicosecond(inputF, inputT) {
    let a = inputF * (3.6 * 10**15);
    inputT.value = a;
}

function hourToMinute(inputF, inputT) {
    let a = inputF * 60;
    inputT.value = a;
}

function hourToHour(inputF, inputT) {
    let a = inputF * 1;
    inputT.value = a;
}

function hourToDay(inputF, inputT) {
    let a = inputF / 24;
    inputT.value = a;
}

function hourToWeek(inputF, inputT) {
    let a = inputF / 168;
    inputT.value = a;
}

function hourToMonth(inputF, inputT) {
    let a = inputF / 730.001;
    inputT.value = a;
}

function hourToYear(inputF, inputT) {
    let a = inputF / 8760;
    inputT.value = a;
}

//from: Day

function dayToSecond(inputF, inputT) {
    let a = inputF * 86400;
    inputT.value = a;
}

function dayToMillisecond(inputF, inputT) {
    let a = inputF * (8.64 * 10**7);
    inputT.value = a;
}

function dayToMicrosecond(inputF, inputT) {
    let a = inputF * (8.64 * 10**10);
    inputT.value = a;
}

function dayToNanosecond(inputF, inputT) {
    let a = inputF * (8.64 * 10**13);
    inputT.value = a;
}

function dayToPicosecond(inputF, inputT) {
    let a = inputF * (8.64 * 10**16);
    inputT.value = a;
}

function dayToMinute(inputF, inputT) {
    let a = inputF * 1440;
    inputT.value = a;
}

function dayToHour(inputF, inputT) {
    let a = inputF * 24;
    inputT.value = a;
}

function dayToDay(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function dayToWeek(inputF, inputT) {
    let a = inputF / 7;
    inputT.value = a;
}

function dayToMonth(inputF, inputT) {
    let a = inputF / 30.4167;
    inputT.value = a;
}

function dayToYear(inputF, inputT) {
    let a = inputF / 365;
    inputT.value = a;
}

//from: Week

function weekToSecond(inputF, inputT) {
    let a = inputF * 604800;
    inputT.value = a;
}

function weekToMillisecond(inputF, inputT) {
    let a = inputF * (6.048 * 10**8);
    inputT.value = a;
}

function weekToMicrosecond(inputF, inputT) {
    let a = inputF * (6.048 * 10**11);
    inputT.value = a;
}

function weekToNanosecond(inputF, inputT) {
    let a = inputF * (6.048 * 10**14);
    inputT.value = a;
}

function weekToPicosecond(inputF, inputT) {
    let a = inputF * (6.048 * 10**17);
    inputT.value = a;
}

function weekToMinute(inputF, inputT) {
    let a = inputF * 10080;
    inputT.value = a;
}

function weekToHour(inputF, inputT) {
    let a = inputF * 168;
    inputT.value = a;
}

function weekToDay(inputF, inputT) {
    let a = inputF * 7;
    inputT.value = a;
}

function weekToWeek(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function weekToMonth(inputF, inputT) {
    let a = inputF / 4.34524;
    inputT.value = a;
}

function weekToYear(inputF, inputT) {
    let a = inputF / 52.1429;
    inputT.value = a;
}

//from: Month

function monthToSecond(inputF, inputT) {
    let a = inputF * 2.628e+6;
    inputT.value = a;
}

function monthToMillisecond(inputF, inputT) {
    let a = inputF * 2.628e+9;
    inputT.value = a;
}

function monthToMicrosecond(inputF, inputT) {
    let a = inputF * 2.628e+12;
    inputT.value = a;
}

function monthToNanosecond(inputF, inputT) {
    let a = inputF * 2.628e+15;
    inputT.value = a;
}

function monthToPicosecond(inputF, inputT) {
    let a = inputF * 2.628e+18;
    inputT.value = a;
}

function monthToMinute(inputF, inputT) {
    let a = inputF * 43800;
    inputT.value = a;
}

function monthToHour(inputF, inputT) {
    let a = inputF * 730.001;
    inputT.value = a;
}

function monthToDay(inputF, inputT) {
    let a = inputF * 30.4167;
    inputT.value = a;
}

function monthToWeek(inputF, inputT) {
    let a = inputF * 4.34524;
    inputT.value = a;
}

function monthToMonth(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

function monthToYear(inputF, inputT) {
    let a = inputF / 12;
    inputT.value = a;
}

//from: Year

function yearToSecond(inputF, inputT) {
    let a = inputF * 3.154e+7;
    inputT.value = a;
}

function yearToMillisecond(inputF, inputT) {
    let a = inputF * 3.154e+10;
    inputT.value = a;
}

function yearToMicrosecond(inputF, inputT) {
    let a = inputF * 3.154e+13;
    inputT.value = a;
}

function yearToNanosecond(inputF, inputT) {
    let a = inputF * 3.154e+16;
    inputT.value = a;
}

function yearToPicosecond(inputF, inputT) {
    let a = inputF * 3.154e+19;
    inputT.value = a;
}

function yearToMinute(inputF, inputT) {
    let a = inputF * 525600;
    inputT.value = a;
}

function yearToHour(inputF, inputT) {
    let a = inputF * 8760;
    inputT.value = a;
}

function yearToDay(inputF, inputT) {
    let a = inputF * 365;
    inputT.value = a;
}

function yearToWeek(inputF, inputT) {
    let a = inputF * 52.1429;
    inputT.value = a;
}

function yearToMonth(inputF, inputT) {
    let a = inputF * 12;
    inputT.value = a;
}

function yearToYear(inputF, inputT) {
    let a = inputF / 1;
    inputT.value = a;
}

// All temperature-related stuff here
// All temperature-related stuff here
// All temperature-related stuff here

function checkTemperatureBtn(button1, button2) {
    if (button1 === "Celsius") {
        if (button2 === "Celsius") {
            celsiusToCelsius(inputFrom, inputTo)
        } else if (button2 === "Kelvin") {
            celsiusToKelvin(inputFrom, inputTo)
        } else if (button2 === "Farenheit") {
            celsiusToFarenheit(inputFrom, inputTo)
        }
    } else if (button1 === "Kelvin") {
        if (button2 === "Celsius") {
            kelvinToCelsius(inputFrom, inputTo)
        } else if (button2 === "Kelvin") {
            kelvinToKelvin(inputFrom, inputTo)
        } else if (button2 === "Farenheit") {
            kelvinToFarenheit(inputFrom, inputTo)
        }
    } else if (button1 === "Farenheit") {
        if (button2 === "Celsius") {
            farenheitToCelsius(inputFrom, inputTo)
        } else if (button2 === "Kelvin") {
            farenheitToKelvin(inputFrom, inputTo)
        } else if (button2 === "Farenheit") {
            farenheitToFarenheit(inputFrom, inputTo)
        }
    }
}

//from: Celsius

function celsiusToCelsius(inputF, inputT) {
    let a = inputF * 1;
    inputT.value = a
}

function celsiusToKelvin(inputF, inputT) {
    let a = Number(inputF) + 273.15;
    inputT.value = a
}

function celsiusToFarenheit(inputF, inputT) {
    let a = (inputF * 9/5) + 32;
    inputT.value = a
}

//from: Kelvin

function kelvinToCelsius(inputF, inputT) {
    let a = Number(inputF) - 273.15;
    inputT.value = a
}

function kelvinToKelvin(inputF, inputT) {
    let a = inputF * 1;
    inputT.value = a
}

function kelvinToFarenheit(inputF, inputT) {
    let a = (Number(inputF) - 273.15) * 9/5 + 32;
    inputT.value = a
}

//from: Kelvin

function farenheitToCelsius(inputF, inputT) {
    let a = (Number(inputF) - 32) * 5/9;
    inputT.value = a
}

function farenheitToKelvin(inputF, inputT) {
    let a = (Number(inputF) - 32) * 5/9 + 273.15;
    inputT.value = a
}

function farenheitToFarenheit(inputF, inputT) {
    let a = inputF * 1;
    inputT.value = a
}

start()