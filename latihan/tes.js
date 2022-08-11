function SeleksiNilai(nilaiAwal, nilaiAkhir, numbers)
{      
    let rangeResult = numbers.filter(function(currentElement){
        return currentElement > nilaiAwal && currentElement < nilaiAkhir;
    });
    
    try{
        if(nilaiAwal >= nilaiAkhir) throw "Nilai akhir harus lebih besar dari nilai awal";

        if(numbers.length <= 5) throw "Jumlah angka dalam array harus lebih dari 5";

        if(rangeResult.length < 1) throw "Data tidak ditemukan";

    }catch(error){
        console.log(error);
        return false;
    }

    let urutanAngka = rangeResult.sort((a,b) => a > b ? 1 : -1);
    console.log(urutanAngka);

}

SeleksiNilai(1, 10, [11, 12, 13, 14, 15, 16, 17]);
// SeleksiNilai(1, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);