<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Autor;
use App\Http\Request\StoreAutorRequest;

class AutorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request){

        $page = $request->get('page', 1);
        $pageSize = $request->get('pageSize', 5);
        $dir = $request->get('dir', 'asc');
        $props = $request->get('props', 'id');
        $search = $request->get('search', '');

        $query = Autor::select('id', 'nome', 'email')
                 ->orderBy($props, $dir);

        //User::paginate(5);

        $total = $query->count();

        $data = $query->offset( ($page - 1) * $pageSize)
                      ->limit($pageSize)
                      ->get();

        $totalPages = ceil( $total / $pageSize );

        return response()->json([
            'message'=>'Relatório de autores',
            'status'=>200,
            'page'=>$page,
            'pageSize'=>$pageSize,
            'dir'=>$dir,
            'props'=>$props,
            'search'=>$search,
            'total'=>$total,
            'totalPages'=>$totalPages,
            'data'=>$data,
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */

    public function store(StoreAutorRequest $request)
    {

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
