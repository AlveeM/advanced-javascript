// new binding this
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Xavier', '50');
console.log(person1);

// implicit binding
const person2 = {
    name: 'John',
    age: 30,
    hi () {
        console.log('hi' + this.name);
    }
}

// explicit binding
const person3 = {
    name: 'James',
    age: 30,
    hi: function() {
        console.log('hi' + this.setTimeout);
    }.bind(window)
}

// arrow function (lexically scoped)
const person4 = {
    name: 'Mike',
    age: 60,
    hi: function() {
        var inner = () => {
            console.log('hi ' + this.name)
        }
        return inner()
    }
}

person4.hi();