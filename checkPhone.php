<?php

if (isset($_POST['phone'])) {

    $phoneNumber = preg_replace('/[^\d]+/', '', $_POST['phone']);
    $phoneCodesData = file_get_contents('https://cdn.jsdelivr.net/gh/andr-04/inputmask-multi@master/data/phone-codes.json');
    $phoneCodes = json_decode($phoneCodesData, true);
    $result = " ";

    foreach ($phoneCodes as $code) {
        $cleanedMask = preg_replace('/[^\d]+/', '', $code['mask']);
        $maskLength = strlen(preg_replace('/[^0-9#]/', '', $code['mask']));

        if (strlen($phoneNumber) === $maskLength  && strpos($phoneNumber, $cleanedMask) === 0) {
            $result = "Номер телефона принадлежит: " . $code['name_ru'];
            break;
        } else {
            $result = 'Номер телефона указан неверно!';
        }
    }
    echo $result;
} else {
    echo "Номер телефона не указан!";
}
