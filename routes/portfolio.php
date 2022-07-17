<?php

use App\Http\Controllers\Portfolio\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('portfolio', [PortfolioController::class, 'show'])
        ->name('portfolio');
});
