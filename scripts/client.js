console.log('TEST TEST, 1,2,3... you should be seeing this.')

$(document).ready(readyNow);

function readyNow (){
    console.log('ready now!'); 

    $('#employee-submit').on('click', addToTable);
}
// -- End of ReadyNow! -- //

console.log('End of client.js');

const employee = []
function addToTable() {
    console.log('Add To Table');
    let employeeFirstName = $('#firstName-input').val();
    let employeeLastName = $('#lastName-input').val();
    let employeeID = $('#employeeID-input').val();
    let employeeJobTitle = $('#jobTitle-input').val();
    let employeeAnnualSalary = $('#annualSalary-input').val();
    console.log(employeeFirstName, employeeLastName, employeeID, employeeJobTitle, employeeAnnualSalary);

    let addEmployeeToTable = {
        firstName: employeeFirstName,
        lastName: employeeLastName,
        ID: employeeID,
        title: employeeJobTitle,
        annualSalary: employeeAnnualSalary
    }

    employee.push(addEmployeeToTable);
    // console.log(employee) // this works!
    
    displayEmployees(employee);

    // Clear input fields
    $('input').val('');
}

function displayEmployees() {
    
}