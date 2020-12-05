class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "Hercule t'encule !"
            ,"On se croirait chez les Romains"
            ,"Bouuh, retournez en Egypte !"
            ,"..."
            ,"On dirait pas le Pong du prof ?"
            ,"Tu frappe comme Aristote !"
            ,"Quels Anoïtos"
            ,"500 ans de philosophie pour ça"
            ,"Nom de Zeus !"
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },1500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}