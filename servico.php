<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>SF TAX USA — Serviço</title>
<meta name="description" content="" />
<link rel="icon" href="assets/sf-logo-icon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="css/styles.css" />
<link rel="stylesheet" href="css/components.css" />
<link rel="stylesheet" href="css/service.css" />
</head>
<body data-page="service">

<div data-header></div>

<main data-service-page></main>

<!-- ============================ CTA + FORM ============================ -->
<section class="section" id="svc-form" style="background:var(--bg-soft);border-top:1px solid var(--line)">
  <div class="wrap contact-grid">
    <div class="reveal">
      <span class="eyebrow" data-i18n="contact.eyebrow">Fale conosco</span>
      <h2 class="h-1" data-i18n="svc.finalTitle">Pronto para resolver isso com segurança?</h2>
      <p class="lead" style="margin-top:16px;margin-bottom:30px" data-i18n="svc.finalSub">Fale com um especialista da SF TAX USA.</p>
      <div class="contact-line">
        <span class="ci"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02zM12.04 20.15h-.004a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 5.82 2.41 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg></span>
        <div><b data-i18n="contact.waTitle">WhatsApp</b><br /><a data-wa data-loc="service_form_info" data-cfg-wa></a></div>
      </div>
      <div class="contact-line">
        <span class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg></span>
        <div><b data-i18n="contact.emailTitle">E-mail</b><br /><a data-mail data-cfg-mail></a></div>
      </div>
      <a class="btn btn--green btn--lg" data-wa data-loc="service_form_cta" style="margin-top:18px"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="width:18px;height:18px"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02zM12.04 20.15h-.004a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 5.82 2.41 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23z"/></svg><span data-i18n="cta.specialist">Fale com um especialista</span></a>
    </div>
    <div class="reveal">
      <form class="form-card" data-contact-form>
        <h3 class="h-2" style="margin-bottom:22px" data-i18n="contact.formTitle">Solicite uma análise</h3>
        <div class="field-row">
          <div class="field"><label data-i18n="contact.f_name">Nome completo</label><input type="text" name="name" required /></div>
          <div class="field"><label data-i18n="contact.f_phone">Telefone / WhatsApp</label><input type="tel" name="phone" required /></div>
        </div>
        <div class="field"><label data-i18n="contact.f_email">E-mail</label><input type="email" name="email" required /></div>
        <div class="field-row">
          <div class="field"><label data-i18n="contact.f_lang">Idioma preferencial</label>
            <select name="lang"><option>Português</option><option>English</option><option>Español</option></select>
          </div>
          <div class="field"><label data-i18n="contact.f_service">Tipo de serviço</label>
            <select name="service" data-service-options><option value="" data-i18n="contact.f_servicePlaceholder">Selecione um serviço</option></select>
          </div>
        </div>
        <div class="field"><label data-i18n="contact.f_msg">Como podemos ajudar?</label><textarea name="message" data-i18n-attr="placeholder:contact.f_msgPlaceholder"></textarea></div>
        <button class="btn btn--green btn--block btn--lg" type="submit" data-i18n="contact.submit">Solicitar análise</button>
        <p class="form-note" data-i18n="contact.privacy"></p>
        <p class="form-note" data-form-success hidden style="color:var(--green-600);font-weight:700;font-size:15px" data-i18n="contact.success"></p>
        <p class="form-note" data-form-error hidden style="color:#c0392b;font-weight:700;font-size:15px" data-i18n="contact.error">Ocorreu um erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.</p>
      </form>
    </div>
  </div>
</section>

<!-- ============================ RELATED SERVICES ============================ -->
<section class="section">
  <div class="wrap">
    <div class="section-head reveal" style="max-width:680px">
      <span class="eyebrow" data-i18n="svc.relatedTitle">Outros serviços</span>
      <h2 class="h-1" data-i18n="servicesHome.title">Soluções contábeis e fiscais completas</h2>
    </div>
    <div class="grid reveal" data-service-grid data-limit="4" style="grid-template-columns:repeat(4,1fr);margin-top:36px"></div>
  </div>
</section>

<footer class="site-footer" data-footer></footer>

<div class="sticky-cta">
  <a class="btn btn--green sticky-cta__wa" data-wa data-loc="sticky"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="width:18px;height:18px"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02z"/></svg><span data-i18n="cta.whatsapp">WhatsApp</span></a>
</div>
<a class="wa-float" data-wa data-loc="float" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="width:30px;height:30px"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02zM12.04 20.15h-.004a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 5.82 2.41 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg></a>

<script src="js/core.js"></script>
<script src="js/i18n.pt.js"></script>
<script src="js/i18n.en.js"></script>
<script src="js/i18n.es.js"></script>
<script src="js/services.pt.js"></script>
<script src="js/services.en.js"></script>
<script src="js/services.es.js"></script>
<script src="js/header.js"></script>
<script src="js/drawer.js"></script>
<script src="js/footer.js"></script>
<script src="js/app.js"></script>
</body>
</html>
