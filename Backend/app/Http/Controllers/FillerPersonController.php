<?php

namespace App\Http\Controllers;

use App\Models\FillerPerson;
use Illuminate\Http\Request;

class FillerPersonController extends Controller
{
    public function index(){
        $filler_people=FillerPerson::all();
        return response()->json($filler_people);
    }

    public function store(Request $request){
        $record=new FillerPerson();
        $record->nev=$request->nev;
        $record->szulev=$request->szulev;
        $record->save();
        return FillerPerson::find($record->id);
    }

    public function destroy($id){
        $toDestroy=FillerPerson::find($id)->delete();
        return response()->json(["message"=>"Sikeres törlés!"]);
    }

    public function update(Request $request, $id){
        $modify=FillerPerson::find($id);
        $modify->nev=$request->nev;
        $modify->szulev=$request->szulev;
        $modify->save();
        return redirect("/filler_people");
    }
}
