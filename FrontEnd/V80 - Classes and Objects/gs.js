class User{
    constructor(name){
        // invoke setter
        this.name = name
    }

    // get
    get name(){
        return this._name;
    }

    // set
    set name(value){    
        if(value.length < 4){
            alert("Name is too short!")
            return;
        }
        this._name = value;
    }
}

let user = new User("John")
alert(user.name); //John

user.name = ""; // Name is too short