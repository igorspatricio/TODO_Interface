export default function changeStatus(status){
        if(status){
            return{
                labelType : "label label-success",
                iconType : "icon icon-check"
            }
        }else{
            return{
                labelType : "label label-error teste",
                iconType : "icon"
            }
        }
    }



