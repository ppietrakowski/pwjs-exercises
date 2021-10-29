

let Stack = {
    top: null,
    stackElement: {
        next: null,
        value: null
    },
    push(value, b=1) {
        for (let i = 0; i < b - 1; i++) {
            this.push(null);
        }

        let temp = Object.create(this.stackElement);
        temp.next = this.top;
        temp.value = value;
        this.top = temp;
    },

    pop(a = 1) {
        for (let i = 0; i < a - 1; i++) {
            this.pop();
        }
        if (this.top === null)
            throw new Error("Cannot pop from stack(is empty)");
        
        temp = this.top
        this.top = this.top.next;

        return temp.value;
    }
};
