// Program JavaScript menggunakan pernyataan while untuk menghitung dan menampilkan nilai siswa
const nilaiSiswa = [32, 76, 62, 100, 99, 50, 100, 78]; // Himpunan nilai array yang disimpan pada variabel nilaiSiswa
const jumlahNilai = nilaiSiswa.length; // Menyimpan panjang nilai variabel nilaiSiswa kedalam variabel jumlahNilai
let totalNilai = 0; // Menyimpan hasil perulangan
let i = 0; // Membaca nilai jumlahNilai dari index ke 0 terlebih dahulu

while (i < jumlahNilai) { // Program akan membaca nilai dari index ke 0 terlebih dahulu, dikarenakan nilai variabel i adalah 0
  totalNilai += nilaiSiswa[i];
  i++;
}

const rataRata = totalNilai / jumlahNilai;
console.log(`Jumlah nilai siswa (while): ${totalNilai}`);
console.log(`Rata-rata nilai siswa (while): ${rataRata.toFixed(2)}`);
