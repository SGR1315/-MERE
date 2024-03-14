const takimlar = [
    { ad: "BEŞİKTAŞ", src: "images/besiktas.png",sampiyonluk: 16 , stad:"İnönü"},
    { ad: "FENERBAHÇE", src: "images/fenerbahce.png" ,sampiyonluk: 19,stad:"Saraçoğlu"},
    { ad: "GALATASARAY", src: "images/galatasaray.png", sampiyonluk: 23,stad:"Ali Sami Yen"},
    { ad: "TRABZONSPOR", src: "images/trabzonspor.png", sampiyonluk: 7, stad:"Avni Aker" },
];


const takim=document.getElementById("takim");
const btnBasla=document.getElementById("btnBasla");
const soru=document.getElementById("soru");
const secenekler=document.getElementById("secenekler");
const sonuc=document.getElementById("sonuc");


btnBasla.addEventListener("click",yaris);


function yaris(){
    soru.innerHTML="";
    secenekler.innerHTML="";

    let rastgeleTakim = Math.floor(Math.random() * takimlar.length);
    takim.src=takimlar[rastgeleTakim].src;
    soru.innerHTML=takimlar[rastgeleTakim].ad+" kaç kez şampiyon olmuştur?";
    
   
for (let i = 2; i <= 5; i++) {
    const secenek = document.createElement("button");
    secenekler.appendChild(secenek);
    secenek.setAttribute("id", "secenek" + i);
    secenek.classList.add("secenek");
    secenek.innerHTML = takimlar[rastgeleTakim].sampiyonluk;

    for (let i = 0; i < 16; i++) {
        let rastgeleSayi = Math.floor(Math.random() * 20);
        secenek.innerHTML = rastgeleSayi;
    }
}}