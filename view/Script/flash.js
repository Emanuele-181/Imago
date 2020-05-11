var app=new Vue({
    el:'#app',
    data:{
        contcarr:0,
       
        prezzo2:0,
        iva:0,
        totale:0,

        seleziona:0,
        
        modelli:[
            {id:1, prodotto:'FLASH NIKON', modalità:'E-TTL / M/ Master / Slave / S1 / S2/HSS', taglia: '6 x 20,5 x 7,5 cm', connettività:'wireless 2.4G', peso:'550', prezzo:  70.00, immagine:'../../utility/Img/nikonflash.png', nome:'Nikon', sel:0, sel2:0, dispo:10,pezmaxnikon:2, maxnikon:0, dispoiniz:10,maxiniz:2},
            {id:2, prodotto:'FLASH CANON', modalità:'I-TTL / M / S2/HSS / Master / S1 / Slave', taglia: '5 x 10,5 x 8,5 cm', connettività:'wireless 2.4G', peso:'500', prezzo: 65.00, immagine:'../../utility/Img/canonflash.png', nome:'Canon', sel:0, sel2:0, dispo:10, pezmaxcanon:7, maxcanon:0, dispoiniz:10,maxiniz:7},
            {id:3, prodotto:'FLASH NISSIN', modalità:'M, S1, S2', taglia: '6 x 20,5 x 7,5 cm', connettività:'wireless 2.4G', peso:'475', prezzo: 110.00,prezzo2: 110.00,immagine:'../../utility/Img/nissin.png', nome:'Nissin', sel:0,sel2:0, dispo:10,dispoiniz:10},
            {id:4, prodotto:'FLASH YONGNUO', modalità:'E-TTL / M/ Master / Slave / S1 / S2/HSS', taglia: '8 x 25,5 x 9,5 cm', connettività:'wireless 2.4G', peso:'82,32', prezzo: 350.00,immagine:'../../utility/Img/yongnuo.png', nome:'Yongnuo', sel:0,sel2:0, dispo:10,dispoiniz:10},
            
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
            this.modelli[this.seleziona].maxnikon+=1;
            this.modelli[this.seleziona].maxcanon+=1; 
            this.modelli[this.seleziona].pezmaxnikon-=1;
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
            this.modelli[this.seleziona].maxnikon-=1;
            this.modelli[this.seleziona].maxcanon-=1; 
            this.modelli[this.seleziona].pezmaxnikon+=1;
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
            this.modelli[3].sel=0;
            this.modelli[this.seleziona].dispo=this.modelli[this.seleziona].dispoiniz-this.modelli[this.seleziona].sel2;
            this.modelli[0].pezmaxnikon=this.modelli[0].maxiniz;
            this.modelli[0].maxnikon=0;
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
        modalità: function(){
            return this.modelli[this.seleziona].modalità;
        },
        taglia: function(){
            return this.modelli[this.seleziona].taglia;
        },
        connettività: function(){
            return this.modelli[this.seleziona].connettività;
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
        pezmaxnikon: function(){
            return this.modelli[this.seleziona].pezmaxnikon;
        },
        pezmaxcanon: function(){
            return this.modelli[this.seleziona].pezmaxcanon;
        },
        maxnikon: function(){
            return this.modelli[this.seleziona].maxnikon;
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