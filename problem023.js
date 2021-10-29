let Vectors = {
    sum(a, b) {
        let c = [];
        if (a.length != b.length)
            return false;
        
        for (let i = 0; i < a.length; i++) {
            c[i] = a[i] + b[i];
        }

        return c;
    },

    mulByScalar(a, b) {
        let c = [];

        if (!(Array.isArray(a)) || !(typeof b == 'number'))
            return false;
        
        for (let i = 0; i < a.length; i++) {
            c.push(a[i] * b);
        }
        return c;
    }
    

}
