// Program JavaScript menggunakan pernyataan for untuk menampilkan nilai siswa
const nilaiSiswa = [32, 76, 62, 100, 99, 50, 100, 78]; // Himpunan nilai array yang disimpan pada variabel nilaiSiswa
const jumlahNilai = nilaiSiswa.length; // Menyimpan panjang nilai variabel nilaiSiswa kedalam variabel jumlahNilai
let totalNilai = 0; // Menyimpan hasil perulangan

for (let i = 0; i < jumlahNilai; i++) { // Program membaca panjang nilai dari variabel jumlahNilai dan setiap nilai akan ditambahkan 
  totalNilai += nilaiSiswa[i];
}

const rataRata = totalNilai / jumlahNilai;
console.log(`Jumlah nilai siswa: ${totalNilai}`);
console.log(`Rata-rata nilai siswa: ${rataRata.toFixed(2)}`);
