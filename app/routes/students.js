import Route from '@ember/routing/route';
import { computed } from '@ember/object';

export default Route.extend({
queryParams:{
    pageNumber: {
        refreshModel: true
      }
}, 

    async  model(params)
    {

        // console.log(params)
        
        let arrPromise=await fetch(`https://reqres.in/api/users?page=${params.pageNumber}&per_page=5`);
        console.log(params)
        return await arrPromise.json();
       
    },
    actions: {
     
            
        
        select(id)
        {
        //   console.log("::")  
          
          this.transitionTo(`/about/${id}`)
        }
    }

    

});
