// Tạo đối tượng cho Mark
const mark = {
    fullName: 'Mark Miller',
    mass: 78, // kg
    height: 1.69, // meters
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

// Tạo đối tượng cho John
const john = {
    fullName: 'John Smith',
    mass: 92, // kg
    height: 1.95, // meters
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

// Tính BMI cho cả hai
mark.calcBMI();
john.calcBMI();

// So sánh và in kết quả ra console
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
}
