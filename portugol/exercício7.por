programa
{
	
	funcao inicio()
	{
		real janeiro,fevereiro,marco,abril,media
		cadeia funcionario

		escreva("Digite o nome do funcionário:")
		leia(funcionario)
		escreva("Digite o valor de venda do mês de janeiro:")
		leia(janeiro)
		escreva("Digite o valor de venda do mês de fevereiro:")
		leia(fevereiro)
		escreva("Digite o valor de venda do mês março:")
		leia(marco)
		escreva("Digite o valor de venda do mês de abril:")
		leia(abril)

		media = (janeiro+fevereiro+marco+abril)/4

		escreva("O funcionário: " + funcionario + " obteve a média: " + media)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 517; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */