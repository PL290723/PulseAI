document.addEventListener('DOMContentLoaded', () => {

  // 1. MENÚ MÓVIL TOGGLE
  const menuToggle = document.getElementById('menu-toggle');
  const navMobile = document.getElementById('nav-mobile');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-btn');

  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', () => {
      navMobile.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.add('hidden');
      });
    });
  }

  // 2. PASOS INTERACTIVOS (SECCIÓN "CÓMO FUNCIONA")
  const stepsData = [
    {
      n: "01",
      title: "Integración de fuentes",
      desc: "PulseAI recibe datos de dispositivos wearables, aplicaciones móviles y sistemas de telesalud ya utilizados por el paciente. No requiere hardware adicional.",
      detail: "Compatible con: Apple Health, Google Fit, Withings, Omron Connect, y sistemas de expediente clínico con API abierta."
    },
    {
      n: "02",
      title: "Normalización y contexto clínico",
      desc: "Los datos crudos se estructuran según el perfil del paciente: diagnóstico, medicación, valores de referencia personalizados y umbrales definidos por el médico.",
      detail: "El médico establece los parámetros. PulseAI no toma decisiones clínicas — organiza la información para que el médico las tome."
    },
    {
      n: "03",
      title: "Alertas con criterio",
      desc: "Cuando un valor supera un umbral relevante, el sistema notifica al médico o al equipo de enfermería con contexto: tendencia, historial, y la lectura en cuestión.",
      detail: "Las alertas son configurables por el clínico. PulseAI no sustituye el juicio médico — lo apoya con información oportuna."
    },
    {
      n: "04",
      title: "Reporte listo para el expediente",
      desc: "Cada semana — o a demanda — el sistema genera un reporte estructurado con resumen de tendencias, lecturas destacadas y notas de cumplimiento del paciente.",
      detail: "Formato PDF exportable. Compatible con los flujos de documentación de la mayoría de los hospitales."
    }
  ];

  const stepBtns = document.querySelectorAll('.step-btn');
  const flowNum = document.getElementById('flow-num');
  const flowTitle = document.getElementById('flow-title');
  const flowDesc = document.getElementById('flow-desc');
  const flowDetail = document.getElementById('flow-detail');

  stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.getAttribute('data-step'), 10);
      
      // Actualizar botón activo
      stepBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Actualizar tarjeta
      if (stepsData[index]) {
        flowNum.textContent = stepsData[index].n;
        flowTitle.textContent = stepsData[index].title;
        flowDesc.textContent = stepsData[index].desc;
        flowDetail.textContent = stepsData[index].detail;
      }
    });
  });

  // 3. ACORDEÓN PREGUNTAS FRECUENTES (FAQ)
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    questionBtn.addEventListener('click', () => {
      const isHidden = answer.classList.contains('hidden');

      // Cerrar las demás respuestas
      faqItems.forEach(otherItem => {
        otherItem.querySelector('.faq-answer').classList.add('hidden');
        otherItem.querySelector('.faq-icon').textContent = '+';
      });

      // Abrir o cerrar la actual
      if (isHidden) {
        answer.classList.remove('hidden');
        icon.textContent = '−';
      }
    });
  });

  // 4. FORMULARIO DE CONTACTO
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.classList.add('hidden');
      contactSuccess.classList.remove('hidden');
    });
  }

});