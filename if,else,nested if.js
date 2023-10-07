// Program JavaScript untuk mengecek apakah siswwa dinyatakan lulus suatu ujian.
const minimalNilai = 75; // Ubah minimal nilai usia sesuai kebutuhan
const nilaiSiswa = 32; // Ubah nilai siswa sesuai kebutuhan

if (nilaiSiswa >= 90) { // Menentukan nilai siswa berdasarkan hasil nilai yang diperoleh
  console.log("Nilai siswa: A");
} else if (nilaiSiswa >= 80) {
  console.log("Nilai siswa: B");
} else if (nilaiSiswa >= 70) {
  console.log("Nilai siswa: C");
} else if (nilaiSiswa >= 60) {
  console.log("Nilai siswa: D");
} else {
  console.log("Nilai siswa: E");
}

if (nilaiSiswa >= minimalNilai) { // Menentukan apakah siswa memenuhi syarat lolos ujian
  console.log("Anda lulus dari ujian.");
} else {
  console.log("Mohon maaf, anda belum memenuhi syarat nilai yang ditentukan.");
  const nilai = minimalNilai - nilaiSiswa;
  if (nilai != 1) {
    console.log(`Anda perlu ${nilai} lagi untuk memenuhi syarat.`);
  }
}
