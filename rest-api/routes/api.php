<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// method get
Route::get('/animals', [AnimalController::class, 'index']);

// method post
Route::post('/animals', [AnimalController::class, 'store']);

// method put
Route::put('/animals/{id}', [AnimalController::class, 'update']);

// method delete
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);


// student get all
Route::get('/students', [StudentController::class, 'index']);

// menambahkan data student
Route::post('/students', [StudentController::class, 'store']);

// mengupdate data student
Route::put('/students/{id}', [StudentController::class, 'update']);

// menghapus data student
Route::delete('/students/{id}', [StudentController::class, 'destroy']);

// mendapatkan detail data student
Route::get('/students/{id}', [StudentController::class, 'show']);