import React, { Component } from 'react'
import EmployeesChild from './EmployeesChild'

const employees = [
    { empId: 1, empName: "dian", salary: 45 },
    { empId: 2, empName: "asep", salary: 35 },
    { empId: 3, empName: "budi", salary: 25 }
]

export default class ParentEmployee extends Component {
    state = {
        employee: employees,
    }
    upSalary = (id)=>{
        this.setState({employee: [...this.state.employee.map(em => {
            if (em.empId === id) {
                    em.salary += 10
                }
            return em
            })]
        })
    }
    downSalary = (id)=>{
        this.setState({employee: [...this.state.employee.map(em => {
            if (em.empId === id) {
                    em.salary -= 10
                }
            return em
            })]
        })
    }
    render() {
        return (
            <div>
                {this.state.employee.map((em, index) => {
                    return (
                        <li key={index}>
                            <EmployeesChild
                                empId ={em.empId}
                                empName = {em.empName}
                                salary={em.salary}
                                upSalary={this.upSalary}
                                downSalary={this.downSalary}
                            />
                        </li>
                    )
                })} 
            </div>
        )
    }
}