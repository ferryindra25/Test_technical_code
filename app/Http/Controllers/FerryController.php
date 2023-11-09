<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FerryController extends Controller
{
    //
    public function generateSegitiga(Request $request) {
        $num = $request->input('num');
        if ($num == "") {
            return response()->json("invalid input", 400);
        }
        $len = strlen($num);
        $result = "";
        for ($i=0; $i < $len; $i++) {

            $first = substr($num, $i, 1);
            for ($j=0; $j < ($i + 1); $j++) {
                $first .= "0";
            }

            $result .= "$first <br>";
        }

        return response()->json($result, 200);
    }

    public function generateGanjil(Request $request) {
        $num = $request->input('num');
        if ($num == "") {
            return response()->json("invalid input", 400);
        }
        $result = "";
        for ($i=0; $i <= $num; $i++) {
            if (fmod($i, 2) != 0) {
                $result .= "$i ";
            }
        }
        return response()->json($result, 200);
    }

    public function generatePrima(Request $request) {
        $num = $request->input('num');
        if ($num == "") {
            return response()->json("invalid input", 400);
        }
        $result = "";

        for ($i=2; $i <= $num; $i++) {
            $isPrime = true;

            for ($j=2; $j < $i; $j++) {
                if (fmod($i, $j) == 0) {
                    $isPrime = false;
                }
            }
            if ($isPrime) {
                $result .= "$i ";
            }
        }

        return response()->json($result, 200);
    }
}
