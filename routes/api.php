<?php

use App\Http\Controllers\CoursesController;
use App\Http\Controllers\RequestsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/courses",[CoursesController::class,"index"]);
Route::post("/courses",[CoursesController::class,"store"]);

Route::get("/requests",[RequestsController::class,"index"]);
Route::post("/requests",[RequestsController::class,"store"]);
Route::post("/requests/{id}",[RequestsController::class,"destroy"]);
