// Part 1: Creating Employee Class
class Employee{
    constructor(name, salary){ // Adding name and salary properties
    this.name = name;
    this.salary = salary;
    console.log(this.name, "has a monthly salary of $", this.salary, "."); // Logs a message with the name and monthly salary
    }
    annualSalary(){ // Function to find annual salary
        return this.salary * 12; // Annual salary = monthly salary * 12
    }
}