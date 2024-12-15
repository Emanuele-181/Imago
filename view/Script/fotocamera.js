var app=new Vue({
    el:'#app',
    data:{
        contcarr:0,
       
        prezzo2:0,
        iva:0,
        totale:0, 

        seleziona:0,
        
        modelli:[
            {id:1, prodotto:'FOTOCAMERA NIKON', funzioni:'Funzioni 4K Photo e 4K Video', zoom: 'ottico 50x', connettività:'Wi-fi, USB, HDMI Mini (Type C)', formati:'RAW; JPEG; PNG', prezzo: 450.00, immagine:'../../utility/Img/nikon.png', nome:'Nikon', sel:0, sel2:0, dispo:10,pezmaxnikon:2, maxnikon:0, dispoiniz:10,maxiniz:2},
            {id:2, prodotto:'FOTOCAMERA CANON', funzioni:'Photo e Video FHD', zoom: 'ottico 30x', connettività:'Wi-fi, USB, HDMI', formati:'RAW; JPEG', prezzo: 400.00, immagine:'../../utility/Img/canon.png', nome:'Canon', sel:0, sel2:0, dispo:10, pezmaxcanon:7, maxcanon:0, dispoiniz:10,maxiniz:7},
            {id:3, prodotto:'FOTOCAMERA SONY', funzioni:'Funzioni 4K Photo e 4K Video', zoom: 'ottico 60x', connettività:'Wi-fi, USB, HDMI Mini (Type C)', formati:'RAW; JPEG; PNG', prezzo: 550.00, immagine:'../../utility/Img/sony.png', nome:'Sony', sel:0,sel2:0, dispo:10,dispoiniz:10},
            {id:4, prodotto:'FOTOCAMERA LEICA', funzioni:'Photo e Video FHD', zoom: 'ottico 20x', connettività:'Wi-fi, USB', formati:'JPEG', prezzo: 350.00, immagine:'../../utility/Img/leica.png', nome:'Leica', sel:0,sel2:0, dispo:10,dispoiniz:10},
            {id:5, prodotto:'FOTOCAMERA FUJI', funzioni:'Funzioni 4K Photo e 4K Video', zoom: 'ottico 40x', connettività:'Wi-fi, USB, HDMI Mini (Type C)', formati:'RAW; JPEG; PNG', prezzo: 500.00, immagine:'../../utility/Img/fuji.png', nome:'Fuji', sel:0,sel2:0, dispo:32,pezmaxfuji:5, maxfuji:0, dispoiniz:32,maxiniz:5},
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
            this.modelli[this.seleziona].maxfuji+=1; 
            this.modelli[this.seleziona].pezmaxnikon-=1;
            this.modelli[this.seleziona].pezmaxcanon-=1; 
            this.modelli[this.seleziona].pezmaxfuji-=1;
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
            this.modelli[this.seleziona].maxfuji-=1;
            this.modelli[this.seleziona].pezmaxnikon+=1;
            this.modelli[this.seleziona].pezmaxcanon+=1; 
            this.modelli[this.seleziona].pezmaxfuji+=1;
            this.prezzo2-=this.modelli[this.seleziona].prezzo;
            this.iva=this.iva-Math.round(this.prezzo*0.22);
            this.totale=(this.prezzo2+this.iva);
        
        },
        
        paga(){
            this.contcarr=0;
            this.prezzo2=0;
            this.iva=0;
            this.totale=0;
            this.modelli[0].sel=0;
            this.modelli[1].sel=0;
            this.modelli[2].sel=0;
            this.modelli[3].sel=0;
            this.modelli[4].sel=0;
            this.modelli[this.seleziona].dispo=this.modelli[this.seleziona].dispoiniz-this.modelli[this.seleziona].sel2;
            this.modelli[0].pezmaxnikon=this.modelli[0].maxiniz;
            this.modelli[0].maxnikon=0;
            this.modelli[1].pezmaxcanon=this.modelli[1].maxiniz;
            this.modelli[1].maxcanon=0;
            this.modelli[4].pezmaxfuji=this.modelli[4].maxiniz;
            this.modelli[4].maxfuji=0;
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
        funzioni: function(){
            return this.modelli[this.seleziona].funzioni;
        },
        zoom: function(){
            return this.modelli[this.seleziona].zoom;
        },
        connettività: function(){
            return this.modelli[this.seleziona].connettività;
        },
        formati: function(){
            return this.modelli[this.seleziona].formati;
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
        pezmaxfuji: function(){
            return this.modelli[this.seleziona].pezmaxfuji;
        },
        maxnikon: function(){
            return this.modelli[this.seleziona].maxnikon;
        },
        maxcanon: function(){
            return this.modelli[this.seleziona].maxcanon;
        },
        maxfuji: function(){
            return this.modelli[this.seleziona].maxfuji;
        },
        dispoiniz: function(){
            return this.modelli[this.seleziona].dispoiniz;
        },
        maxiniz: function(){
            return this.modelli[this.seleziona].maxiniz;
        }
    }
});