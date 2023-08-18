class eCirc{
    //eulers identity: E^(ik) = cos(k) + isin(k)
    //returns a complex number -> the real component of which can be represented as the x cordinate and the imaginary the y
    constructor(freq, phase, amp){
        this.freq = freq;
        this.phase = phase;
        this.amp = amp;
    }

    pos(time){
        //returns a complex number describing the 'rotation' around the representative circle that is E^i
        //basically the current position relative to the center of the circle?
        //time is the total time elapsed - in radians (because time is rotation)

        let re = this.amp * cos(this.freq*time + this.phase);
        let im = this.amp * sin(this.freq*time + this.phase);

        return new Complex(re, im);
    }


}

function eulerID(k){
    //e^ik = cos(k) + i sin(k) (best identity EVERRRR)
    let re = cos(k);
    let im = sin(k);
    return new Complex(re, im);
}