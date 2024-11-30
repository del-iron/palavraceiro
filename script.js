function verificarRespostas() {
    const inputs = document.querySelectorAll('input');
    let acertos = 0;
    let erros = 0;
    
    inputs.forEach(input => {
      const correto = input.dataset.correct.toUpperCase();
      const valor = input.value.toUpperCase();
  
      if (valor === correto) {
        input.classList.add('correct');
        input.classList.remove('incorrect');
        acertos++;
      } else {
        input.classList.add('incorrect');
        input.classList.remove('correct');
        erros++;
      }
    });
  
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = `Você acertou ${acertos} palavra(s) e errou ${erros} palavra(s).`;
  }
  