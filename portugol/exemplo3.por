programa
{
	
	funcao inicio()
	{
		inteiro contador,limite,resultado,tabuada

		contador = 1
		limite = 0
		tabuada = 0

		escreva("Escolha tabuada para resolver:")
		leia(tabuada)

		escreva("Até que número limite a ser multiplicado?")
		leia(limite)

		faca{
			resultado = tabuada * contador
			escreva("\n" + "taboada x " + contador + " = " + resultado + "\n")
			contador++
		}enquanto(contador<=limite)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 117; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */