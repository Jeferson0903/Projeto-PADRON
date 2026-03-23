# Copia as imagens de depoimentos (geradas por IA) para public/img/testimonial/
# Execute este script na pasta do projeto (Projeto-PADRON).

$origem = "$env:USERPROFILE\.cursor\projects\c-Users-carlo-OneDrive-rea-de-Trabalho-Projeto-PADRON\assets"
$destino = Join-Path $PSScriptRoot "public\img\testimonial"

if (-not (Test-Path $origem)) {
    Write-Host "Pasta de origem nao encontrada: $origem" -ForegroundColor Yellow
    exit 1
}

Get-ChildItem $origem -Filter "depoimento-*.png" | ForEach-Object {
    Copy-Item $_.FullName -Destination $destino -Force
    Write-Host "Copiado: $($_.Name)"
}
Write-Host "Pronto. Imagens em: $destino" -ForegroundColor Green
