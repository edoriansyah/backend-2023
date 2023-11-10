<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
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

Route::middleware(['auth:sanctum'])->group(function () {
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
});

// otentikasi (register & login)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);