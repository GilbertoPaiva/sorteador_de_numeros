# 🎲 Sorteador de Números

Um projeto simples de sorteador de números construído com HTML, CSS (LESS) e JavaScript, utilizando **Grunt.js** como automatizador de tarefas.

## 📋 Sobre o Projeto

Este é um aplicativo web que permite ao usuário definir um número máximo e sortear um número aleatório entre 1 e o valor definido. O projeto foi desenvolvido com foco em aprendizado de automação de tarefas front-end.

## 🚀 Tecnologias Utilizadas

### Linguagens e Pré-processadores
- **HTML5** - Estrutura da aplicação
- **JavaScript (ES6)** - Lógica de sorteio
- **LESS** - Pré-processador CSS para estilização

### Ferramentas de Build
- **Grunt.js** - Automatizador de tarefas
- **Node.js** - Ambiente de execução

### Plugins Grunt
- **grunt-contrib-less** - Compilação de arquivos LESS para CSS
- **grunt-contrib-watch** - Monitora alterações em arquivos
- **grunt-replace** - Substitui padrões em arquivos (paths dinâmicos)
- **grunt-contrib-htmlmin** - Minificação de HTML
- **grunt-contrib-uglify** - Minificação e ofuscação de JavaScript
- **grunt-contrib-clean** - Limpeza de diretórios temporários

## 📂 Estrutura do Projeto

```
gruntJs/
├── src/                    # Código fonte
│   ├── index.html         # HTML principal com placeholders
│   ├── scripts/
│   │   └── main.js        # Lógica do sorteador
│   └── styles/
│       └── main.less      # Estilos em LESS
├── dev/                   # Build de desenvolvimento (gerado)
│   ├── index.html
│   └── styles/
│       └── main.css
├── dist/                  # Build de produção (gerado)
│   ├── index.html
│   ├── scripts/
│   │   └── main.min.js
│   └── styles/
│       └── main.min.css
├── prebuild/              # Diretório temporário (gerado)
├── Gruntfile.js          # Configuração do Grunt
└── package.json          # Dependências do projeto
```

## 🔧 Conceitos Aplicados

### 1. **Automação de Tarefas**
O Grunt.js automatiza processos repetitivos:
- Compilação de LESS para CSS
- Minificação de arquivos
- Substituição dinâmica de caminhos
- Watch para desenvolvimento contínuo

### 2. **Ambientes de Build**
- **Desenvolvimento (dev/)**: Código não minificado, fácil debug
- **Produção (dist/)**: Código otimizado e minificado

### 3. **Pré-processamento CSS**
Uso de LESS com variáveis para facilitar manutenção:
```less
@fontePrincipal: Roboto, sans-serif;
@corDeFundo: #eb3b5a;
```

### 4. **Substituição de Padrões**
Uso de placeholders (`@@ENDERECO_DO_CSS`, `@@ENDERECO_DO_JS`) substituídos automaticamente conforme o ambiente.

### 5. **Otimização para Produção**
- Minificação de HTML (remoção de comentários e espaços)
- Uglify do JavaScript (redução de tamanho)
- Compressão de CSS

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd gruntJs
```

2. Instale as dependências:
```bash
npm install
```

## 🎮 Como Usar

### Modo Desenvolvimento
Inicia o watch que monitora alterações e compila automaticamente:
```bash
npm run grunt
# ou
grunt
```

### Build de Produção
Gera versão otimizada na pasta `dist/`:
```bash
npm run build
# ou
grunt build
```

## 🎯 Funcionalidades

- ✅ Sorteio de números aleatórios
- ✅ Validação de entrada (mínimo: 2)
- ✅ Interface responsiva
- ✅ Design personalizado com fontes do Google Fonts
- ✅ Build automatizado para desenvolvimento e produção

## 📝 Tarefas Grunt Disponíveis

### `grunt` (default)
Executa o watch para desenvolvimento contínuo

### `grunt build`
Executa a sequência completa de build para produção:
1. Compila e comprime LESS
2. Minifica HTML
3. Substitui placeholders
4. Limpa arquivos temporários
5. Minifica JavaScript

## 🎨 Paleta de Cores

- **Fundo**: #eb3b5a (vermelho coral)
- **Botão**: #f7b731 (amarelo dourado)
- **Texto**: #FFF (branco)

## 📄 Licença

ISC

---

Desenvolvido como projeto de estudo em automação front-end com Grunt.js
