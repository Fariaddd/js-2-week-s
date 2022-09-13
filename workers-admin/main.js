import './style.css'

//make an API call to 
// https://dummy.restapiexample.com/api/v1/employees


// Use map()

// use the destructing syntex

function getEmployees(){
  fetch("https://dummy.restapiexample.com/api/v1/employees")
  .then (data => {
    return data.json()
  })
  // destructing API ({})
  .then(({data: employeesData}) => {
    console.log("employeesData", employeesData);
    // return the employeesData by using Map()
    const newEmployeesData = employeesData.map(({employee_name, employee_age, employee_salary
    }) => {
      return {employee_name, employee_age, employee_salary
      }
    } ) 
    console.log(newEmployeesData);
  })
}

getEmployees();