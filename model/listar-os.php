<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

$db = new PDO('sqlite:banco.sqlite');

$sql = "SELECT * FROM os";

$resultado = $db ->query($sql);

$lista = $resultado->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($lista);

