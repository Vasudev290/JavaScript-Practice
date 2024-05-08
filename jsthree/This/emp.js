//This sample statement...

class emp {
    Eid;
    Ename;
    constructor(Eid,Ename) {
        this.Eid = Eid;
        this.Ename = Ename;
    }
    getDetails() {
        console.log("Employee id: ", this.Eid);
        console.log("Employee Name: ", this.Ename);
    }
}
 let e1 = new emp(131, "Arjun")
 let e2 = new emp(132, "Aravind")
e1.getDetails();
e2.getDetails();

