const gajiKaryawan = () => {
  const namaKaryawan = prompt("Masukkan nama karyawan");
  const gajiPerHari = prompt("Gaji per hari");
  const totalMasukKerja = prompt("Total masuk kerja dalam 1 bulan");
  const totalGaji = gajiPerHari * totalMasukKerja;
  alert(`Halo ${namaKaryawan} total gaji anda bulan ini adalah Rp.${totalGaji}`);
};

gajiKaryawan();
