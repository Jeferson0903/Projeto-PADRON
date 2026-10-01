# Copia e renomeia as 12 imagens de fundo para public/img/bg/
# Uso: Coloque suas 12 imagens na pasta "minhas-imagens-fundo" (na raiz do projeto) e execute este script.

$origem = Join-Path $PSScriptRoot "..\minhas-imagens-fundo"
$destino = Join-Path $PSScriptRoot "..\public\img\bg"

if (-not (Test-Path $origem)) {
    New-Item -ItemType Directory -Path $origem -Force | Out-Null
    Write-Host "Criei a pasta: $origem"
    Write-Host "Coloque suas 12 imagens de fundo nessa pasta e execute o script novamente."
    exit 0
}

$arquivos = Get-ChildItem $origem -File -Include "*.png","*.jpg","*.jpeg" | Sort-Object Name
if ($arquivos.Count -lt 12) {
    Write-Host "Encontradas $($arquivos.Count) imagens. Coloque 12 arquivos em: $origem"
    exit 1
}

New-Item -ItemType Directory -Path $destino -Force | Out-Null
for ($i = 0; $i -lt 12; $i++) {
    $num = "{0:D2}" -f ($i + 1)
    $nomeDestino = "padron-bg-$num.png"
    Copy-Item $arquivos[$i].FullName (Join-Path $destino $nomeDestino) -Force
    Write-Host "Copiado: $nomeDestino"
}
Write-Host "Pronto. As 12 imagens foram copiadas para public/img/bg/"
