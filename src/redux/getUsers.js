import Parse from 'parse/dist/parse.min'

export async function fetchUsers() {
  const app_id = process.env.REACT_APP_PARSE_APP_ID
  const host_url = process.env.REACT_APP_PARSE_HOST_URL
  const javascript_key = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
  const master_key = process.env.REACT_APP_PARSE_MASTER_KEY

  const getEmployee = (object) => {
    const employee = {}
    const keyValues = [
      'Name',
      'LastName',
      'Birthday',
      'Email',
      'Position',
      'PlanedHours',
      'ReportedHours',
    ]
    keyValues.forEach((key) => {
      employee[key] = object.get(key)
    })
    return employee
  }

  Parse.serverURL = host_url
  Parse.initialize(app_id, javascript_key, master_key)
  const Employees = Parse.Object.extend('Employees')
  const query = new Parse.Query(Employees)
  let employees = []

  try {
    const results = await query.find()
    for (const object of results) {
      const employee = getEmployee(object)

      employees.push(employee)
    }
  } catch (error) {
    console.error('Error while fetching Employees', error)
  }

  return employees
}
