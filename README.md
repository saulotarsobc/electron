# Saulo Costa - electron

**Clone e corra para ver o Electron em ação rapidamente.**

Este é um aplicativo Electron mínimo baseado no [Guia de início rápido](https://electronjs.org/docs/latest/tutorial/quick-start) na documentação do Electron.

Um aplicativo básico do Electron precisa apenas destes arquivos:

- `package.json` - Aponta para o arquivo principal do aplicativo e lista seus detalhes e dependências.
- `main.js` - Inicia o aplicativo e cria uma janela do navegador para renderizar HTML. Este é o **processo principal** do aplicativo.
- `index.html` - Uma página da web para renderizar. Este é o **processo de renderização** do aplicativo.
- `preload.js` - Um script de conteúdo que é executado antes do carregamento do processo de renderização.

Você pode aprender mais sobre cada um desses componentes em profundidade no [Tutorial](https://electronjs.org/docs/latest/tutorial/tutorial-prerequisites).

## Usar

Para clonar e executar este repositório, você precisará do [Git](https://git-scm.com) e do [Node.js](https://nodejs.org/en/download/) (que vem com [npm](http://npmjs.com)) instalado em seu computador. Da sua linha de comando:

```bash
# Clonar este repositório
git clone https://github.com/saulotarsobc/electron.git
# Entra no repositório
cd electron
#Instala dependências
npm install
#Executa o aplicativo
npm start
```

Observação: se você estiver usando o Linux Bash para Windows, [consulte este guia](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s- bash-shell/) ou use `node` no prompt de comando.

## Recursos para aprender Electron

- [electronjs.org/docs](https://electronjs.org/docs) - toda a documentação do Electron
- [Electron Fiddle](https://electronjs.org/fiddle) - Electron Fiddle, um aplicativo para testar pequenos experimentos de elétrons

## Licença

[CC0 1.0 (Domínio Público)](LICENSE.md)

## eletron
