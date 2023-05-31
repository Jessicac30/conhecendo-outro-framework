import { Component, OnInit } from '@angular/core';
import { Livro } from '../model/livro';
import { Editora } from '../model/editora';
import { ControleEditoraService } from '../services/controle-editora.service';
import { ControleLivrosService } from '../services/controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public editoras: Editora[] = [];
  public livros: Livro[] = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number) => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome = (codEditora: number) => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
