const fs = require('fs');
const path = require('path');

const dest = path.join(__dirname, '..', 'public', 'img', 'testimonial');
const src = path.join(process.env.USERPROFILE || '', '.cursor', 'projects', 'c-Users-carlo-OneDrive-rea-de-Trabalho-Projeto-PADRON', 'assets');

if (!fs.existsSync(src)) {
  console.error('Pasta de origem nao encontrada:', src);
  process.exit(1);
}

fs.readdirSync(src)
  .filter((f) => f.startsWith('depoimento-') && f.endsWith('.png'))
  .forEach((f) => {
    fs.copyFileSync(path.join(src, f), path.join(dest, f));
    console.log('Copiado:', f);
  });

const serviceDest = path.join(__dirname, '..', 'public', 'img', 'service');
['servico-porteiro-eletronico.png', 'servico-central-alarme.png', 'servico-cozinha-industrial.png'].forEach((serviceFile) => {
  const serviceSrc = path.join(src, serviceFile);
  if (fs.existsSync(serviceSrc)) {
    if (!fs.existsSync(serviceDest)) fs.mkdirSync(serviceDest, { recursive: true });
    fs.copyFileSync(serviceSrc, path.join(serviceDest, serviceFile));
    console.log('Copiado (serviço):', serviceFile);
  }
});

console.log('Pronto. Imagens em:', dest);
