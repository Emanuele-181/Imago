var app=new Vue({
    el:'#app',
    data:{
        contcarr:0,
       
        prezzo2:0,
        iva:0,
        totale:0,  

        seleziona:0,
        
        modelli:[
            {id:1, prodotto:'OBIETTIVO PENTAX', lunghezza:'70-300', diaframma: 'F/4-5.6', peso:'458', prezzo: 250.00, immagine:'../../utility/Img/pentax.png', nome:'Pentax', sel:0, sel2:0, dispo:10,pezmaxpentax:5, maxpentax:0, dispoiniz:10,maxiniz:5},
            {id:2, prodotto:'OBIETTIVO CANON', lunghezza:'80-400', diaframma: 'F/4-5.7', peso:'512', prezzo: 180.00, immagine:'../../utility/Img/obiecanon.png', nome:'Canon', sel:0, sel2:0, dispo:10, pezmaxcanon:7, maxcanon:0, dispoiniz:10,maxiniz:7},
            {id:3, prodotto:'OBIETTIVO TAMRON', lunghezza:'70-300', diaframma: 'F/4-5.8', peso:'500', prezzo: 345.00, immagine:'../../utility/Img/tamron.png', nome:'Tamron', sel:0,sel2:0, dispo:10,dispoiniz:10},
            
        ]
    },
    methods:{
        caricaprodotto:function(i){
            this.seleziona=i;
        },
        aggiungi:function(){
            this.contcarr+=1;
            this.modelli[this.seleziona].dispo-=1;
            this.modelli[this.seleziona].sel+=1;
            this.modelli[this.seleziona].sel2+=1; 
            this.modelli[this.seleziona].maxpentax+=1;
            this.modelli[this.seleziona].maxcanon+=1; 
            this.modelli[this.seleziona].pezmaxpentax-=1;
            this.modelli[this.seleziona].pezmaxcanon-=1;
            this.prezzo2+=this.modelli[this.seleziona].prezzo; 
            this.iva=this.iva+Math.round(this.prezzo*0.22);
            this.totale=(this.prezzo2+this.iva);         
        },
        diminuisci:function(){
            this.contcarr-=1;
            this.modelli[this.seleziona].dispo+=1;
            this.modelli[this.seleziona].sel-=1;
            this.modelli[this.seleziona].sel2-=1;
            this.modelli[this.seleziona].maxpentax-=1;
            this.modelli[this.seleziona].maxcanon-=1; 
            this.modelli[this.seleziona].pezmaxpentax+=1;
            this.modelli[this.seleziona].pezmaxcanon+=1;
            this.prezzo2-=this.modelli[this.seleziona].prezzo;
            this.iva=this.iva-Math.round(this.prezzo*0.22);
            this.totale=(this.prezzo2+this.iva); 
        },
        // svuota:function(){
        //     this.contcarr=0;
        //     this.modelli[this.seleziona].sel=0;
        //     this.modelli[this.seleziona].dispo=this.modelli[this.seleziona].dispoiniz;
        //     this.modelli[this.seleziona].maxnikon=this.modelli[this.seleziona].maxnikon;
        //     this.modelli[this.seleziona].maxcanon=this.modelli[this.seleziona].maxcanon; 
        //     this.modelli[this.seleziona].maxfuji= this.modelli[this.seleziona].maxfuji;
        //     this.modelli[this.seleziona].pezmaxnikon=this.modelli[this.seleziona].pezmaxnikon;
        //     this.modelli[this.seleziona].pezmaxcanon=this.modelli[this.seleziona].pezmaxcanon; 
        //     this.modelli[this.seleziona].pezmaxfuji=this.modelli[this.seleziona].pezmaxfuji;
        // }
        paga(){
            this.contcarr=0;
            this.prezzo2=0;
            this.iva=0;
            this.totale=0;
            this.modelli[0].sel=0;
            this.modelli[1].sel=0;
            this.modelli[2].sel=0;
            this.modelli[this.seleziona].dispo=this.modelli[this.seleziona].dispoiniz-this.modelli[this.seleziona].sel2;
            this.modelli[0].pezmaxpentax=this.modelli[0].maxiniz;
            this.modelli[0].maxpentax=0;
            this.modelli[1].pezmaxcanon=this.modelli[1].maxiniz;
            this.modelli[1].maxcanon=0;
        }
    },
    computed:{
        id: function(){
            return this.modelli[this.seleziona].id;
        },
        immagine: function(){
            return this.modelli[this.seleziona].immagine;
        },
        prodotto: function(){
            return this.modelli[this.seleziona].prodotto;
        },
        lunghezza: function(){
            return this.modelli[this.seleziona].lunghezza;
        },
        diaframma: function(){
            return this.modelli[this.seleziona].diaframma;
        },
        peso: function(){
            return this.modelli[this.seleziona].peso;
        },
        sel: function(){
            return this.modelli[this.seleziona].sel;
        },
        sel2: function(){
            return this.modelli[this.seleziona].sel2;
        },
        dispo: function(){
            return this.modelli[this.seleziona].dispo;
        },
        prezzo: function(){
            return this.modelli[this.seleziona].prezzo;
        },
        pezmaxpentax: function(){
            return this.modelli[this.seleziona].pezmaxpentax;
        },
        pezmaxcanon: function(){
            return this.modelli[this.seleziona].pezmaxcanon;
        },
        maxpentax: function(){
            return this.modelli[this.seleziona].maxpentax;
        },
        maxcanon: function(){
            return this.modelli[this.seleziona].maxcanon;
        },
        dispoiniz: function(){
            return this.modelli[this.seleziona].dispoiniz;
        },
        maxiniz: function(){
            return this.modelli[this.seleziona].maxiniz;
        }
    }
});