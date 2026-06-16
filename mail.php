<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Método não permitido.']);
    exit;
}

require_once __DIR__ . '/smtp2go.php';

$body = file_get_contents('php://input');
$data = json_decode($body, true);

if (!is_array($data)) {
    $data = $_POST;
}

$name    = trim($data['name']    ?? '');
$phone   = trim($data['phone']   ?? '');
$email   = trim($data['email']   ?? '');
$lang    = trim($data['lang']    ?? '');
$service = trim($data['service'] ?? '');
$message = trim($data['message'] ?? '');

$errors = [];
if ($name    === '') { $errors[] = 'Nome é obrigatório.'; }
if ($phone   === '') { $errors[] = 'Telefone é obrigatório.'; }
if ($email   === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'E-mail inválido.';
}
if ($message === '') { $errors[] = 'Mensagem é obrigatória.'; }

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => implode(' ', $errors)]);
    exit;
}

function e(string $v): string
{
    return htmlspecialchars($v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$subject = 'Novo contato pelo site — ' . ($service ?: 'SF TAX USA');

$html = '<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>' . e($subject) . '</title>
  <style>
    body { margin:0; padding:0; background:#f4f6fb; font-family: Arial, sans-serif; color:#101a2e; }
    .wrap { max-width:600px; margin:32px auto; background:#fff; border-radius:10px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,.08); }
    .header { background:#234390; padding:28px 32px; }
    .header img { height:44px; }
    .body { padding:32px; }
    h1 { font-size:20px; margin:0 0 24px; color:#234390; }
    table { width:100%; border-collapse:collapse; margin-bottom:24px; }
    td { padding:10px 14px; font-size:14px; vertical-align:top; border-bottom:1px solid #e4e9f1; }
    td:first-child { width:34%; font-weight:700; color:#5a6783; white-space:nowrap; }
    .msg-box { background:#f4f6fb; border-radius:6px; padding:16px; font-size:14px; line-height:1.6; white-space:pre-wrap; }
    .footer { background:#f4f6fb; padding:18px 32px; text-align:center; font-size:12px; color:#5a6783; border-top:1px solid #e4e9f1; }
    .badge { display:inline-block; background:#6aa72a; color:#fff; border-radius:999px; padding:3px 12px; font-size:12px; font-weight:700; }
  </style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <img src="https://sftaxusa.business4youdomain.com.br/assets/sf-logo-full-white.png" alt="SF TAX USA">
  </div>
  <div class="body">
    <h1>Novo contato pelo site</h1>
    <table>
      <tr><td>Nome</td><td>' . e($name) . '</td></tr>
      <tr><td>Telefone / WhatsApp</td><td>' . e($phone) . '</td></tr>
      <tr><td>E-mail</td><td><a href="mailto:' . e($email) . '">' . e($email) . '</a></td></tr>
      <tr><td>Idioma preferido</td><td>' . e($lang ?: '—') . '</td></tr>
      <tr><td>Serviço de interesse</td><td>' . ($service ? '<span class="badge">' . e($service) . '</span>' : '—') . '</td></tr>
    </table>
    <p style="font-weight:700;margin-bottom:8px">Mensagem:</p>
    <div class="msg-box">' . e($message) . '</div>
  </div>
  <div class="footer">SF TAX USA &mdash; Contabilidade para Brasileiros e Estrangeiros nos EUA</div>
</div>
</body>
</html>';

$result = smtp2go_send([
    'api_key'    => SMTP2GO_API_KEY,
    'endpoint'   => SMTP2GO_ENDPOINT,
    'from_email' => SMTP2GO_FROM_EMAIL,
    'from_name'  => SMTP2GO_FROM_NAME,
    'to'         => ['betoadd@gmail.com'],
    'reply_to'   => smtp2go_format_address($email, $name),
    'subject'    => $subject,
    'html'       => $html,
    'debug'      => 1,
]);

if ($result['ok']) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode([
        'ok'    => false,
        'error' => $result['error'] ?: 'Falha ao enviar e-mail. Tente novamente.',
    ]);
}
