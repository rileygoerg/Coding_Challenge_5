// U14123683 Riley Goerg
// Part 1: Creating Employee Class
class Employee{
    constructor(name, salary){ // Adding name and salary properties
    this.name = name;
    this.salary = salary;
    console.log(this.name, "has a base monthly salary of $", this.salary); // Logs a message with the name and monthly salary
    }
    calcAnnualSalary(){ // Function to find annual salary
        return this.salary * 12; // Annual salary = monthly salary * 12
    }
}
// Part 2: Creating Manager Subclass
class Manager extends Employee{
    constructor(name, salary, department){ // Adding department property
    super(name, salary); // Inheriting name and salary from employee class
    this.department = department;
    }
    // Updating annual salary to include 15% bonus
    calcAnnualSalary(){ 
        const baseSalary = super.calcAnnualSalary(); // Inheriting base salary calculation
        const bonus = 0.15 * baseSalary; // Calculating bonus
        const totalSalary = baseSalary + bonus; // Calculating total salary with bonus
        console.log(this.name, "works in the", this.department, "department and is a manager, so they receive a 15% bonus. The bonus is: $", bonus); // Logging bonus
        console.log("Total Annual Salary (including bonus) for", this.name, ": $", totalSalary); // Logging total salary
    }
}
// Part 3: Adding manager objects from data set
const manager1 = new Manager("Bob Ross", 6600, "Digital Marketing"); // Adding Bob Ross data
manager1.calcAnnualSalary();
const manager2 = new Manager("Debbie Little", 7205, "Finance"); // Adding Debbie Little data
manager2.calcAnnualSalary();