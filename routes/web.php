<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainPageController;
use App\Http\Controllers\SystemPageController;

Route::get('/', [MainPageController::class, 'index']);
Route::get('/system', [SystemPageController::class, 'index']);
