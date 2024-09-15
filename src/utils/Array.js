class Array {
    constructor() {
        this.list = [];
    }

    // Insert an element
    insert(data) {
        this.list.push(data);
    }

    // Update an element
    update(oldValue, newValue) {
        const index = this.list.indexOf(oldValue);
        if (index !== -1) {
            this.list[index] = newValue;
        } else {
            console.log("Element not found");
        }
    }

    // Search for an element
    search(value) {
        let flag = 0;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] === value) {
                flag = 1;
                alert("Element found");
                break;
            }
        }
        if (flag === 0) {
            alert("Element not present");
        }
    }
    

    // Delete an element
    delete(value) {
        const originalLength = this.list.length;
        this.list = this.list.filter(item => item !== value);
        if (this.list.length === originalLength) {
            alert("Element not found");
        }
    }

    // Display the array elements
    display() {
        if (this.list.length === 0) {
            console.log("Array is empty");
        } else {
            console.log(this.list.join("\n"));
        }
    }
}

module.exports = Array;
