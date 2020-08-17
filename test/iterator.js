var Beehives = (function(){
    function Beehives(hivelist){
        this.hivelist=hivelist;
        this.index=0;
    }
    Beehives.prototype.next=function(){
        console.log(this.hivelist[this.index++]+"번째 꿀");
    }
    Beehives.prototype.done=function(){
        return this.hivelist.length===this.index;
    }
    return Beehives;
})();

var beehives=new Beehives(["d","s","f","w","f","o","t","h"]);
beehives.next();
beehives.next();
beehives.next();
beehives.next();
beehives.next();
beehives.next();

