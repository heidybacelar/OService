<?php

require_once 'config.php';

$sql = "SELECT * FROM os";

$resultado = $db ->query($sql);

$lista = $resultado->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($lista);

