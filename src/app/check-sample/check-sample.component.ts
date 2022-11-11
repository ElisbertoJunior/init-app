import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements OnInit,
					 DoCheck,
					 AfterContentChecked,
					 AfterContentInit,
					 AfterViewChecked,
					 AfterViewInit,
					 OnDestroy {

quantity: number = 0;

  constructor() {}


	add() {
		this.quantity += 1
	}

	decrement() {
		this.quantity -= 1
	}

	//ciclos de vida DoCheck

	//checked -> content -> view

	//quando o primeiro conteudo e iniciado
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit')
	}

	// depois da inicializacao da view
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit')
	}

	//apos alguma alteracao, verifica o conteudo
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked')
	}

	//apos alguma alteracao verifica a view
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked')
	}

	ngOnDestroy(): void {
		console.log('goodbye my friend!')
	}

	ngDoCheck(): void {
		console.log('ngDoCheck')
	}

  ngOnInit(): void {
  }

}
