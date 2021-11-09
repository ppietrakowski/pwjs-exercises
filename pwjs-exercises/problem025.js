let Square = function(a) {
    this.a = a;

    this.getArea = function() {
        return a * a;
    }
    
    this.getPerimeter = function() {
        return 4 * this.a;
    }
}