<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class SystemPageController extends Controller
{
    public function index()
    {
        return Inertia::render('System/Index');
    }

    public function info()
    {
        return Inertia::render('System/pages/Info');
    }
}
