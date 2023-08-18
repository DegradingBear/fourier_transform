class Complex{
    //complex numbers pog
    constructor(re, im){
        this.re = re;
        this.im = im;
    }

    mag(){
        return(sqrt(this.im * this.im + this.re * this.re));
    }

    phase(){
        return(atan2(this.im, this.re));
    }

    add(c){
        this.im = this.im + c.im;
        this.re = this.re + c.re;
    }

    mult(c){
        let re = this.re * c.re - this.im * c.im;
        let im = this.re *c.im + this.im * c.re;
        return new Complex(re, im);
    }

    copy(){
        return new Complex(this.re, this.im);
    }
}