<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\FerryController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get("/", function () {
    return view("test");
});

Route::post("/generateSegitiga", [FerryController::class, 'generateSegitiga']);
Route::post("/generateGanjil", [FerryController::class, 'generateGanjil']);
Route::post("/generatePrima", [FerryController::class, 'generatePrima']);

