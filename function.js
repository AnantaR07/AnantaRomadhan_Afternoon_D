// Fungsi untuk menentukan kategori nilai siswa
function tentukanKategoriNilai(nilaiSiswa) { // variabel nilaiSiswa pada parameter memilki fungsi untuk menampung hasil variabel nilai1, nilai2, dan nilai3
  if (nilaiSiswa >= 90) {
    return "A";
  } else if (nilaiSiswa >= 80) {
    return "B";
  } else if (nilaiSiswa >= 70) {
    return "C";
  } else if (nilaiSiswa >= 60) {
    return "D";
  } else {
    return "E";
  }
}

// variabel nilai dibawah ini berfungsi memberikan nilai kedalam method "tentukanKategoriNilai" dan akan disimpan kedalam parameter nilaiSiswa
const nilai1 = 85;
const nilai2 = 92;
const nilai3 = 52;

console.log(`Nilai siswa 1: ${nilai1} (Kategori: ${tentukanKategoriNilai(nilai1)})`);
console.log(`Nilai siswa 2: ${nilai2} (Kategori: ${tentukanKategoriNilai(nilai2)})`);
console.log(`Nilai siswa 3: ${nilai3} (Kategori: ${tentukanKategoriNilai(nilai3)})`);