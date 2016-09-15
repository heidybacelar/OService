<?php

require_once 'config.php';

$solicitante = $_SESSION['usuario']['nome'];

$sql = "SELECT * FROM os "
       . "WHERE solicitante = '$solicitante'" 
       . "ORDER BY data DESC";

$resultado = $db ->query($sql);

$lista = $resultado->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($lista);

