const convertKodeBarang = (id_alat) => {
  const id_string = String(id_alat);
  const kode_barang =
    id_string.slice(0, 3) +
    "-" +
    id_string.slice(id_string.length - 3, id_string.length);
  return kode_barang;
};

export default convertKodeBarang;
