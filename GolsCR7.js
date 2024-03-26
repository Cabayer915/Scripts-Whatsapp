async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Marcelo pro Cristiano
Olha ihh ihh
Olha o Cristiano
Buffon desesperado
Rolou pra trás
Lucas Vázquez
Buffooooooooooooon

Cristiano de bicicleta
Minha nossa, minha nossa
Goooooooooooooooooool

Receba
Os aplausos
Do torcedor rival
Esta de pé
O torcedor em Turim para aplaudir
Para reverenciar essa máquina
Esse monstro
Esse jogador inexplicável
Chamado
Cristiano Ronaldo

O Cristiano Ronaldo, 
ele ta carregando Solskjaer, 
ele ta carregando Pogba, 
ele ta carregando Rashford, 
ele ta carregando a família Gleizer, 
o Cristiano Ronaldo ta carregando o Old Trafford, 
ele ta carregando tudo sozinho. 

ELE TA BOTANDO ESSA CHAMPIONS NO BOLSO! 
Essa Champions é de Cristiano Ronaldo, 
ele pegou a fase de grupos da Champions e colocou no bolso. 
"EU RESOLVO." 
"SE NINGUÉM FAZ NADA, 
SE NÃO TEM TRABALHO TÁTICO, 
SE NÃO TEM COLETIVO, 
SE NÃO TEM FUTEBOL, 
EU RESOLVO." 
"EU SOU O SENHOR CHAMPIONS" 
"UEFA, CRISTIANO RONALDO LEAGUE". 
É isso e acabou!

É de um protagonista que o Time do Povo precisa? 
Aí está, Yuri Alberto. 
Sem se esconder. 
Sem se omitir. 
Pegou a bola
Botou debaixo do braço e foi pra cobrança de pênalti. 
É gol do Corinthians!

Incrível e horrível cobrança. 
Uma das piores cobranças que eu já vi de pênalti na minha vida. 
Uma cobrança simplesmente lamentável. 
Uma cobrança absurda, ridícula. 
Uma cobrança simplesmente horrorosa desse jogador tão experiente. 
Ele recuou a bola para o goleiro Thiago Couto. 
E ele que já tinha perdido um gol na frente do goleiro do Juventude. 
Agora cobra de forma ridícula, 
absurda, 
inexplicável e simplesmente absurda cobrança 
Desse tão experiente jogador Vagner Love.

"Esses negros maravilhosos, 
que saem tabelando, 
tocando".

E lá vem eles de novo! 
Olha só que absurdo!
Ih lá vem mais... E LÁ VEM MAIS... olha a bola tocada... 
VIROU PASSEIO!!!!
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)