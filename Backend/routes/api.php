<?php

use App\Http\Controllers\FillerPersonController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get("/filler_people", [FillerPersonController::class, "index"]);
Route::post("/filler_people", [FillerPersonController::class, "store"]);
Route::put("/filler_people", [FillerPersonController::class, "update"]);
Route::delete("/filler_people", [FillerPersonController::class, "destroy"]);
