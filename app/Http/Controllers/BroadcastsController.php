<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\BoardSlotsUpdated;

class BroadcastsController extends Controller
{
     public function BoardSlots(Request $request){
    	event(new BoardSlotsUpdated(
    		[
    			'boardSlots' => $request->boardSlots,
    			'currentPlayer' => $request->currentPlayer,
    			'moves' => $request->moves,
    			'undoneMoves' => $request->undoneMoves,
    		]
    	));
    }
}
