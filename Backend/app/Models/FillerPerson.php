<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FillerPerson extends Model
{
    use HasFactory;

    protected $fillable = [
        'Név',
        'Születési év',
    ];
}
