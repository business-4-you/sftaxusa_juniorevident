<?php
/*
|--------------------------------------------------------------------------
| SMTP2GO — Helper de envio de e-mail
|--------------------------------------------------------------------------
| Substitua $SMTP2GO_API_KEY pela chave real da conta SMTP2GO.
| O e-mail remetente precisa estar autorizado/validado na conta SMTP2GO.
|--------------------------------------------------------------------------
*/

define('SMTP2GO_API_KEY',  'api-AFC658387CCF4E118144EDFF3F497494');
define('SMTP2GO_FROM_EMAIL', 'noreply@sftaxusa.com');
define('SMTP2GO_FROM_NAME',  'SF TAX USA');
define('SMTP2GO_ENDPOINT',   'https://api.smtp2go.com/v3/email/send');

function smtp2go_format_address(string $email, string $name = ''): string
{
    $email = trim($email);
    $name  = trim($name);

    if ($name !== '') {
        return $name . ' <' . $email . '>';
    }

    return $email;
}

function smtp2go_send(array $params): array
{
    $apiKey   = $params['api_key']  ?? '';
    $endpoint = $params['endpoint'] ?? 'https://api.smtp2go.com/v3/email/send';

    $fromEmail = trim($params['from_email'] ?? '');
    $fromName  = trim($params['from_name']  ?? '');

    $to  = $params['to']  ?? [];
    $cc  = $params['cc']  ?? [];
    $bcc = $params['bcc'] ?? [];

    $subject = trim($params['subject'] ?? '');
    $html    = $params['html']         ?? '';
    $text    = $params['text']         ?? strip_tags($html);
    $replyTo = trim($params['reply_to'] ?? '');

    $debug = (int)($params['debug'] ?? 0);

    if ($apiKey === '') {
        return ['ok' => false, 'status' => 0, 'error' => 'API Key SMTP2GO não informada.'];
    }
    if ($fromEmail === '') {
        return ['ok' => false, 'status' => 0, 'error' => 'E-mail remetente não informado.'];
    }
    if ($subject === '') {
        return ['ok' => false, 'status' => 0, 'error' => 'Assunto não informado.'];
    }
    if ($html === '') {
        return ['ok' => false, 'status' => 0, 'error' => 'Mensagem HTML não informada.'];
    }

    if (is_string($to))  { $to  = [$to];  }
    if (is_string($cc))  { $cc  = [$cc];  }
    if (is_string($bcc)) { $bcc = [$bcc]; }

    $to  = array_values(array_filter($to));
    $cc  = array_values(array_filter($cc));
    $bcc = array_values(array_filter($bcc));

    if (empty($to)) {
        return ['ok' => false, 'status' => 0, 'error' => 'Nenhum destinatário informado.'];
    }

    $payload = [
        'sender'    => smtp2go_format_address($fromEmail, $fromName),
        'to'        => $to,
        'subject'   => $subject,
        'html_body' => $html,
        'text_body' => $text,
    ];

    if (!empty($cc))  { $payload['cc']  = $cc;  }
    if (!empty($bcc)) { $payload['bcc'] = $bcc; }

    if ($replyTo !== '') {
        $payload['custom_headers'] = [
            ['header' => 'Reply-To', 'value' => $replyTo]
        ];
    }

    if (!function_exists('curl_init')) {
        return ['ok' => false, 'status' => 0, 'error' => 'A extensão cURL não está habilitada no PHP.'];
    }

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL            => $endpoint,
        CURLOPT_POST           => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HEADER         => false,
        CURLOPT_CONNECTTIMEOUT => 10,
        CURLOPT_TIMEOUT        => 45,
        CURLOPT_IPRESOLVE      => CURL_IPRESOLVE_V4,
        CURLOPT_HTTPHEADER     => [
            'Content-Type: application/json',
            'Accept: application/json',
            'X-Smtp2go-Api-Key: ' . $apiKey,
        ],
        CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
    ]);

    $response  = curl_exec($ch);
    $httpCode  = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    $curlErrno = curl_errno($ch);
    $curlInfo  = curl_getinfo($ch);
    curl_close($ch);

    $responseJson = ($response !== false) ? json_decode($response, true) : null;

    $okHttp       = $response !== false && $httpCode >= 200 && $httpCode < 300;
    $smtpSucceeded = (int)($responseJson['data']['succeeded'] ?? 0);
    $smtpFailed    = (int)($responseJson['data']['failed']    ?? 0);
    $ok = $okHttp && $smtpSucceeded > 0 && $smtpFailed === 0;

    $retorno = [
        'ok'            => $ok,
        'status'        => $httpCode,
        'error'         => $curlError ?: null,
        'curl_errno'    => $curlErrno,
        'response_json' => $responseJson,
    ];

    if ($debug >= 1) {
        $retorno['debug'] = [
            'endpoint'     => $endpoint,
            'request_body' => [
                'sender'   => $payload['sender'],
                'to'       => $payload['to'],
                'cc'       => $payload['cc']  ?? [],
                'bcc'      => $payload['bcc'] ?? [],
                'subject'  => $payload['subject'],
                'reply_to' => $replyTo,
                'api_key'  => '***MASKED***',
            ],
            'http_info' => [
                'primary_ip'      => $curlInfo['primary_ip']      ?? null,
                'primary_port'    => $curlInfo['primary_port']    ?? null,
                'namelookup_time' => $curlInfo['namelookup_time'] ?? null,
                'connect_time'    => $curlInfo['connect_time']    ?? null,
                'appconnect_time' => $curlInfo['appconnect_time'] ?? null,
                'total_time'      => $curlInfo['total_time']      ?? null,
            ],
        ];
    }

    return $retorno;
}
