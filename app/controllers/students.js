import Controller from '@ember/controller';

export default Controller.extend({
    // data:[{ id:1,name:"any",place:"xxxx",class:6,total:320 },{ id:2,name:"any",place:"xxxx",class:6,total:320 },{ id:3,name:"any",place:"xxxx",class:6,total:320 },{ id:4,name:"any",place:"xxxx",class:6,total:320 },{ id:5,name:"any",place:"xxxx",class:6,total:320 },{ id:6,name:"any",place:"xxxx",class:6,total:320 },{ id:7,name:"any",place:"xxxx",class:6,total:320 },{ id:8,name:"any",place:"xxxx",class:6,total:320 },{ id:9,name:"any",place:"xxxx",class:6,total:320 },{ id:10,name:"any",place:"xxxx",class:6,total:320 },{ id:11,name:"any",place:"xxxx",class:6,total:320 },{ id:12,name:"any",place:"xxxx",class:6,total:320 },{ id:13,name:"any",place:"xxxx",class:6,total:320 },{ id:14,name:"any",place:"xxxx",class:6,total:320 },{ id:15,name:"any",place:"xxxx",class:6,total:320 },],
queryParams:["pageNumber"],
 pageNumber:1,
actions:{
    three(){
        this.set("pageNumber",3);
        // this.transitionTo('about');
        // console.log("three")

    } ,
    two(){
        this.set("pageNumber",2);
    },
    one(){
        this.set("pageNumber",1);  
    }
   
}


});
