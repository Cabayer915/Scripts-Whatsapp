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
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)