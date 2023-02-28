function Employee(name, email, password){
    this.name=name;
    this.email=email;
    this.password=password;
    return {userName: this.name, email:this.email, password:this.password};
}

let newEmployee;

function createUser(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                newEmployee = new Employee('ABC', 'abc@yopmail.com', '12345');
                console.log('Employee created with email '+ newEmployee.email);
                resolve(newEmployee);
            
        }, 5000)
    })
}

function loginUser(email, password){
    return new Promise((resolve, reject)=>{
        if(!validateUser(email, password)){
            reject(new Error('Invalid credentials'))
        }
        setTimeout(()=>{
            resolve('User logged in!')
        }, 1000)
    })
}

function validateUser(email, password){
    return !!(email==newEmployee.email && password==newEmployee.password);
}

async function user(){
    const newEmp= await createUser();
    const loggedUser=await loginUser(newEmp.email, newEmp.password);
    console.log(loggedUser);
}

user()