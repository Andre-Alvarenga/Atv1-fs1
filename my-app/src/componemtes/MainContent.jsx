import React from 'react';
import '../pasta de estilos/MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <h2>Oque é react</h2>
      <p>React é uma biblioteca JavaScript de código aberto amplamente utilizada para o desenvolvimento de interfaces de usuário interativas e reativas em aplicações web. Ela foi criada e mantida pelo Facebook, e é uma das tecnologias mais populares para a construção de interfaces de usuário modernas e eficientes. Aqui está um resumo do que é o React e como usá-lo:</p>
      <p>Componentes: React é baseado no conceito de componentes. Os componentes são blocos de construção reutilizáveis ​​que representam partes específicas da interface do usuário. Você pode criar componentes para botões, formulários, cabeçalhos ou qualquer elemento visual da sua aplicação.</p>
      <p>Virtual DOM: O React usa o Virtual DOM (DOM virtual) para melhorar o desempenho. Ele cria uma representação virtual da árvore de elementos de sua aplicação e compara com a versão real do DOM para minimizar as atualizações permitidas, tornando a atualização da interface mais eficiente.</p>
      <p>JSX: React utiliza JSX (JavaScript XML) para descrever a estrutura da interface do usuário. O JSX é uma extensão da linguagem JavaScript que permite escrever código HTML de forma declarativa no código JavaScript. Isso facilita a criação de componentes e a representação visual da interface.</p>
      <p>Estado (Estado) e Propriedades (Props): React gerencia o estado interno dos componentes e as propriedades que são passadas de um componente pai para um filho. O estado é usado para armazenar dados mutáveis ​​dentro de um componente, enquanto as propriedades são usadas para transmitir informações de um componente para outro.</p>
      <p>Ciclo de Vida dos Componentes: React fornece uma série de métodos de ciclo de vida que permitem que você controle o comportamento dos componentes em diferentes estágios, como montagem, atualização e desmontagem.</p>
      <p>Reconciliação: React atualiza a interface do usuário de forma eficiente, aplicando somente as alterações possíveis no DOM real. Isso resulta em um melhor desempenho e uma experiência de usuário mais rápida.</p>
      
    </main>
  );
}

export default MainContent;
