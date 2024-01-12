class TitleView{
    #obj;
    constructor(obj, parentItem){
        this.#obj=obj;
        this.parentItem=parentItem;
        this.buildHtml();
    }

    buildHtml(){
        let txt="<tr>";
        for(const key in this.#obj) {
            txt+=`<th>${this.key}</th>`//ez itt valószínűleg nem jó
        }
        txt+="</tr>";
        this.parentItem.append(txt);
    }
}

export default TitleView;