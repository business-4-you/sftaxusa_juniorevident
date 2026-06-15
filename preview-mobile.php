<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>SF TAX USA — Preview Mobile</title>
<style>
  body { margin:0; background:#0e1f4a; display:flex; gap:28px; padding:28px; font-family:system-ui,sans-serif; align-items:flex-start; justify-content:center; flex-wrap:wrap; }
  .phone { width:390px; height:844px; border-radius:42px; background:#000; padding:12px; box-shadow:0 30px 70px -20px rgba(0,0,0,.6); flex:none; }
  .phone iframe { width:100%; height:100%; border:0; border-radius:30px; background:#fff; }
  .cap { text-align:center; color:#cdd9ee; font-size:13px; font-weight:600; margin-top:12px; letter-spacing:.04em; }
  .col { display:flex; flex-direction:column; align-items:center; }
</style>
</head>
<body>
  <div class="col"><div class="phone"><iframe src="index.php" title="Home"></iframe></div><div class="cap">Home</div></div>
  <div class="col"><div class="phone"><iframe src="servico.php?s=fbar" title="Serviço"></iframe></div><div class="cap">Página de serviço</div></div>
  <div class="col"><div class="phone"><iframe src="contato.php" title="Contato"></iframe></div><div class="cap">Contato</div></div>
</body>
</html>
