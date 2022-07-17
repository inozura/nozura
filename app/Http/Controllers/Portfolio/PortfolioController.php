<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display the portfolio view.
     *
     * @return \Inertia\Response
     */
    public function show()
    {
        return Inertia::render('Portfolio/Index', [
            'status' => session('status'),
        ]);
    }
}
