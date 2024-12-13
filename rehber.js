rehber=[
     { 
        ad:"Yağmur",
        soyad: "Başaran",
        no: 530258798 
},

{       ad:"Sevde",
        soyad: "Genç",
        no: 530258996

},

{
        ad:"Furkan",
        soyad:"Özay",
        no: 537947653
}



]

let karar= Number(prompt("Yapmak istediğiniz işlem nedir? 1-Kişi Bulmak, 2-Kişi Eklemek, 3-Kişi Silmek"));

if(karar===1){
     let kisibul= prompt("Bulmak istediğiniz kişinin adını girin").toLowerCase;
    for(kisiler of rehber){
        if(kisibul===kisiler.ad){
          console.log(kisibul);
        }
            
    }
}

else if(karar===2){
    let Yeniad = prompt("Eklemek istediğiniz kişinin adını giriniz");
    let Yenisoyad = prompt("Eklemek istediğiniz kişinin soyadını giriniz");
    let Yenino = prompt("Eklemek istediğiniz kişinin numarasını giriniz");

    let YeniKisi =[Yeniad, Yenisoyad,Yenino];
    rehber.push(YeniKisi);
    

   
}
else if(karar===3){
    let kisiSil = prompt("Silmek istediğiniz kişi kim?").toLowerCase();
    let bulundu= false;
    for( let i=0; i<rehber.length; i++){
        if(rehber[i].ad.toLowerCase()===kisiSil.toLowerCase()){
            console.log(`${rehber[i].ad} rehberden silindi.`)
            rehber.splice(i,1);
            bulundu=true;
            break;
            
        }
    }
    if(!bulundu){
        console.log("kişi bulunamadı");
    }

}
else{
    console.log("Geçersiz işlem");
}
console.log(rehber);