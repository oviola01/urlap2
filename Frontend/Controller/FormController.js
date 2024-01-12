import FormView from "../View/FormView.js";
import DataModel from "../View/DataModel.js";

class FormController{
    constructor(){
        new FormView($(".dataForm"));
        this.dataModel=new DataModel("api/filler_people", showForm());
        this.dataModel.getData();
        $(window).on("sendData",(event)=>{
            console.log(event.detail);
            this.dataModel.postData("api/filler_people", event.detail);
        })
        $(window).on("delData",(event)=>{
            console.log(event.detail);
            this.dataModel.deleteData("api/filler_people", event.detail, refresh());
        })
    }

    showForm(){
        new FormView($(".dataTable"));
    }

    refresh(){
        location.reload();
    }
}

export default FormController;