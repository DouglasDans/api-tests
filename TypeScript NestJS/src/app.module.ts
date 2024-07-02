import { Module } from '@nestjs/common';
import { AutorModule } from './autor/autor.module';
import { EditoraModule } from './editora/editora.module';
import { LivroModule } from './livro/livro.module';

@Module({
  imports: [AutorModule, EditoraModule, LivroModule],
})
export class AppModule {}
