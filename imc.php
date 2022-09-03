$peso = $_POST['peso'];
$altura - $_POST['altura'];

function imc($altura, $peso){
    $altura - str_replace(',', '.' $altura');
    $result = $peso/$altura**2;
    return $result;
}

echo "seu imc é: " .imc($altura, $peso);
