// Program JavaScript untuk menentukan nilai siswa
const nilai = 90; // Ubah nilai siswa sesuai kebutuhan

let kategori_nilai; // Menampung kategori nilai pada setiap case

switch (true) { // Program akan mnenentukan kategori nilai yang didapat berdasarkan variabel nilai 
  case nilai >= 90:
    kategori_nilai = "A";
    break;
  case nilai >= 80:
    kategori_nilai = "B";
    break;
  case nilai >= 70:
    kategori_nilai = "C";
    break;
  case nilai >= 60:
    kategori_nilai = "D";
    break;
  default:
    kategori_nilai = "E";
    break;
}

console.log(`Anda mendapatkan nilai ${kategori_nilai}.`);