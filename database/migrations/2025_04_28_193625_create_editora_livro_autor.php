<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('editora_livro_autor', function (Blueprint $table) {
            $table->id();

            $table->foreignId('autor_id')
                ->constrained('autors')
                ->onDelete('cascade');

            $table->foreignId('editora_id')
                ->constrained('editoras')
                ->onDelete('cascade');

            $table->foreignId('livro_id')
                ->constrained('livros')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
    */
    public function down(): void
    {
        Schema::dropIfExists('editora_livro_autor');
    }
};
