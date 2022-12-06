<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$id=trim($data['id']);
$nama=trim($data['nama']);
$alamat=trim($data['alamat']);
$noHP=trim($data['noHP']);

if($nama!='' and $alamat!='' and $noHP!=''){
$query = mysqli_query($koneksi,"update pelanggan set nama='$nama',alamat='$alamat',noHP='$noHP' where id='$id'");
}
echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-12-06 15:51:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */