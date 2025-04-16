# GPro_VF
<!DOCTYPE html>
<link rel="manifest" href="manifest.json">

<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Gestor Pro – Maria</title>
  <link rel="manifest" href="manifest.json">
  <style>
    :root {
      --bg: #121212; --fg: #e0e0e0;
      --primary: #2196F3; --card: #1e1e1e;
      --accent: #64b5f6;
    }
    * { box-sizing: border-box; margin:0; padding:0 }
    body { background: var(--bg); color: var(--fg); font-family: 'Orbitron', sans-serif; }
    nav { display:flex; background:var(--card); position:sticky; top:0; }
    nav button {
      flex:1; padding:1em; background:none; border:none;
      color:var(--fg); font-size:1em; cursor:pointer;
    }
    nav button.active { background:var(--primary); color:#fff; }
    main { padding:1em; }
    .section { display:none; }
    .section.active { display:block; }
    .card {
      background: var(--card); padding:1em; margin-bottom:1em;
      border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.5);
    }
    .btn {
      padding:.5em 1em; background:var(--accent);
      color:#000; border:none; border-radius:4px; cursor:pointer;
    }
    input, select, textarea {
      width:100%; padding:.5em; margin-top:.5em;
      background:#333; color:#fff; border:1px solid #555; border-radius:4px;
    }
    .chat-container {
      position:fixed; bottom:1em; right:1em;
      width:280px; background:var(--card); border-radius:8px;
      padding:.5em; box-shadow:0 2px 6px rgba(0,0,0,0.7);
    }
    .chat-header { font-weight:bold; margin-bottom:.5em; }
    .chat-messages { max-height:150px; overflow-y:auto; margin-bottom:.5em; }
    .chat-input { display:flex; }
    .chat-input input {
      flex:1; padding:.5em; border-radius:4px 0 0 4px;
      border:1px solid #555; background:#333; color:#fff;
    }
    .chat-input button {
      padding:.5em; background:var(--accent);
      border:none; border-radius:0 4px 4px 0; cursor:pointer;
    }
  </style>
</head>
<body>
  <nav>
    <button class="active" onclick="show('dash')">Dashboard</button>
    <button onclick="show('new')">Nova Tarefa</button>
    <button onclick="show('listas')">Listas</button>
    <button onclick="show('cal')">Calendário</button>
    <button onclick="show('short')">Atalhos</button>
  </nav>
  <main>
    <div id="dash" class="section active">
      <h1>Gestor Pro – Maria</h1>
      <div class="card">
        <h2>Resumo Geral</h2>
        <p>Total de Tarefas: <strong>5</strong></p>
        <p>Concluídas: <strong>2</strong></p>
      </div>
    </div>
    <div id="new" class="section">
      <h1>Criar Nova Tarefa</h1>
      <input type="text" placeholder="Título da tarefa"/>
      <textarea rows="3" placeholder="Descrição"></textarea>
      <select>
        <option>Prioridade: Alta</option>
        <option>Prioridade: Média</option>
        <option>Prioridade: Baixa</option>
      </select>
      <input type="date"/>
      <button class="btn">Criar</button>
    </div>
    <div id="listas" class="section">
      <h1>Listas & Objetivos</h1>
      <!-- Insira aqui as listas detalhadas -->
    </div>
    <div id="cal" class="section">
      <h1>Calendário</h1>
      <p>(Placeholder para calendário interativo.)</p>
    </div>
    <div id="short" class="section">
      <h1>Atalhos & Recursos</h1>
      <ul>
        <li><a href="https://multicaixaexpress.ao" target="_blank">Multicaixa Express</a></li>
        <li><a href="https://drive.google.com" target="_blank">Google Drive</a></li>
        <li><a href="https://maps.google.com" target="_blank">Google Maps</a></li>
        <li><a href="#" onclick="alert('ChatGPT integrado!')">ChatGPT</a></li>
      </ul>
    </div>
  </main>
  <div class="chat-container">
    <div class="chat-header">Assistente Maria</div>
    <div class="chat-messages">
      <div><strong>Maria:</strong> Olá! Como posso ajudar?</div>
    </div>
    <div class="chat-input">
      <input type="text" placeholder="Digite sua mensagem..."/>
      <button>Enviar</button>
    </div>
  </div>
  <script>
    function show(id) {
      document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
      document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      document.querySelector(`nav button[onclick="show('${id}')"]`).classList.add('active');
    }
  </script>
</body>
</html>


