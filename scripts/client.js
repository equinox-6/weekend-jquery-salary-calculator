console.log('TEST TEST, 1,2,3... you should be seeing this.')

$(document).ready(readyNow);

function readyNow (){
    console.log('ready now!'); 

    $('#employee-submit').on('click', addToTable);

    

    $('#remove-employee').on('click', removeEmployee);

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
        employeeID: employeeID,
        title: employeeJobTitle,
        annualSalary: employeeAnnualSalary
    }

    employee.push(addEmployeeToTable);
    // console.log(employee) // this works!
    
    displayEmployees(employee);

    // Clear input fields
    $('input').val('');
}

/**
 * display the employee in the table
 * @param {Array} employeeInput employees
 */
function displayEmployees(employeeInput) {
    $('#employee-table').empty();

    for(let employee of employeeInput){
        $('#employee-table').append(`
            <tr class="">
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.employeeID}</td>
                <td>${employee.title}</td>
                <td id="sum">${employee.annualSalary}</td>
                <td>
                    <button id="remove-Employee">Remove</button>
                </td>
            </tr>
        `)
    }
}

/**
 * Remove employee from table
 * @param {array} employeeTable employee
 */

function removeEmployee(employeeTable){
$('#employee-table').remove();

for(let employee of employeeTable){
    $('employee-table').prepend(`
    
    <tr class="">

`)
}
}

// function annualSalary(){
    
// }