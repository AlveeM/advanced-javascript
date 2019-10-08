// Test 1
const a = function() {
    console.log('a', this)
    const b = function() {
        console.log('b', this) // window.a(b())
        const c = {
            hi: function() {
                console.log('c', this)
            }
        }
        c.hi()
    }
    b()
}
a()

// Test 2
const obj = {
    name: 'Billy',
    sing() {
        console.log('d', this);
        var anotherFunc = function() {
            console.log('e', this)
        }
        anotherFunc();
    }
}

// Test 3
// using arrow function
const obj = {
    name: 'Billy',
    sing() {
        console.log('d', this);
        var anotherFunc = () => {
            console.log('e', this)
        }
        anotherFunc();
    }
}

// Test 4
// using bind(this)
const obj = {
    name: 'Billy',
    sing() {
        console.log('d', this);
        var anotherFunc = function() {
            console.log('e', this)
        }
        return anotherFunc().bind(this);
    }
}

// Test 5
// using self
const obj = {
    name: 'Billy',
    sing() {
        console.log('d', this);
        var self = this;
        var anotherFunc = function() {
            console.log('e', self)
        }
        return anotherFunc()
    }
}