class FormView{
    #formData={};
    constructor(parentItem){
        parentItem.append("<form>");
        this.formItem=parentItem.find("<form>");
        this.htmlBuild();
        this.submitItem=formItem.find("#submit");
        this.nameItem=formItem.find("#nev");
        this.bornItem=formItem.find("#szulev");

        this.submitItem.on("click",(event)=>{
                            event.preventDefault();
                            this.#formData.nev=this.nameItem.val();
                            this.#formData.szulev=this.bornItem.val();
                            this.trigger(sendData);
                        })
    }

    htmlBuild(){
        let txt="";
        txt+=`<div class="mb-3">
                <label for="nev" class="form-label">Név: </label>
                <input type="nev" class="form-control" 
                                        id="nev"
                                        placeholder="Gipsz Jakab"
                                        name="nev">
            </div>`;
        txt+=`<div class="mb-3">
                <label for="szulev" class="form-label">Név: </label>
                <input type="szulev" class="form-control" 
                                        id="szulev"
                                        value="1975"
                                        min="1900"
                                        max="2200"
                                        name="szulev">
            </div>`;
        txt+=`<div class="mb-3">
                <input type="submit"
                     id="submit"
                     value="Küldés">
            </div>`;
        this.formItem.append(txt);
    }

    trigger(sendData){
        const eventSend=new CustomEvent(sendData, {detail:this.#formData});
        window.dispatchEvent(eventSend);
    }
}

export default FormView;