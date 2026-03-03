// === DISC Quiz - EmailJS Integration Module ===
//
// SETUP INSTRUCTIONS (one-time):
// 1. Create a free account at https://www.emailjs.com
// 2. Add an email service (Gmail, Outlook, etc.) in your EmailJS dashboard
// 3. Create an email template with these variables:
//    {{candidate_name}}, {{graph_i}}, {{graph_ii}}, {{graph_iii}},
//    {{segments_i}}, {{segments_ii}}, {{segments_iii}}
// 4. Replace the placeholder values below with your actual IDs
// 5. Add the EmailJS SDK to index.html (before email.js):
//    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

const EMAIL_CONFIG = {
  serviceId:  'YOUR_SERVICE_ID',    // e.g. 'service_abc123'
  templateId: 'YOUR_TEMPLATE_ID',   // e.g. 'template_xyz789'
  publicKey:  'YOUR_PUBLIC_KEY',     // e.g. 'user_AbCdEfGhIjK'
};

function isEmailConfigured() {
  return (
    EMAIL_CONFIG.serviceId  !== 'YOUR_SERVICE_ID' &&
    EMAIL_CONFIG.templateId !== 'YOUR_TEMPLATE_ID' &&
    EMAIL_CONFIG.publicKey  !== 'YOUR_PUBLIC_KEY'
  );
}

function formatDimRow(obj, dims) {
  return dims.map(d => `${d}=${obj[d]}`).join('  ');
}

window.sendResultsEmail = function(data) {
  if (!isEmailConfigured()) {
    console.log('EmailJS not configured — skipping auto-email. Results can be copied to clipboard.');
    return;
  }

  if (typeof emailjs === 'undefined') {
    console.warn('EmailJS SDK not loaded. Add the script tag to index.html.');
    return;
  }

  const dims = ['D', 'i', 'S', 'C'];

  const templateParams = {
    candidate_name: data.candidateName,
    graph_i:     formatDimRow(data.graphI, dims) + `  N=${data.graphI.N}`,
    graph_ii:    formatDimRow(data.graphII, dims) + `  N=${data.graphII.N}`,
    graph_iii:   formatDimRow(data.graphIII, dims),
    segments_i:  formatDimRow(data.segI, dims),
    segments_ii: formatDimRow(data.segII, dims),
    segments_iii: formatDimRow(data.segIII, dims),
  };

  emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateId, templateParams, EMAIL_CONFIG.publicKey)
    .then(() => {
      console.log('Results email sent successfully.');
      showToast('Results emailed to recruiter');
    })
    .catch(err => {
      console.error('Email failed:', err);
      showToast('Email failed — use Copy to Clipboard instead');
    });
};
