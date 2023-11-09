<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index(Request $request) {
        return view("view");
    }

    public function test(Request $request) {
        return response()->json("success", 200);
    }
}
