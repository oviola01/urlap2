class LineView{
    #obj={};
    constructor(index, obj, parentItem){
        this.index=index;
        this.#obj=obj;
        this.parentItem=parentItem;
        this.showLines();
        this.modifyItem=this.parentItem.find(".modify:last");
        this.delItem=this.parentItem.find(".delete:last");

        this.modifyItem.on("click", ()=>{
          this.objectTrigger("modifyData");
        })
        this.delItem.on("click", ()=>{
            this.trigger("delData");
          });
}

    showLines() {
        let txt="<tr>";
        for(const key in this.#obj) {
          txt+=`<td>${this.#obj[key]}</td>`;
        }
        txt+=`<td><button class="modify">✍️</button></td>`;
        txt+=`<td><button class="delete">🗑</button></td>`;
        txt+="</tr>";
        this.parentItem.append(txt);
      }

    trigger(delData){
        const eventDel=new CustomEvent(delData, {detail:this.#obj.index});
        window.dispatchEvent(eventDel);
      }

    objectTrigger(modifyData){
        const eventModify=new CustomEvent(modifyData, {detail: this.#obj})
        window.dispatchEvent(eventModify)
    }
}

export default LineView;