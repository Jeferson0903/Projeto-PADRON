# Copia as 12 imagens de fundo da pasta assets do Cursor para public/img/bg
# Usa caminho longo (\\?\) para evitar limite de 260 caracteres no Windows.

$assetsLong = "\\?\C:\Users\carlo\.cursor\projects\c-Users-carlo-OneDrive-rea-de-Trabalho-Projeto-PADRON\assets"
$dest = "c:\Users\carlo\OneDrive\Área de Trabalho\Projeto-PADRON\public\img\bg"

if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest -Force | Out-Null }

$allFiles = [System.IO.Directory]::GetFiles($assetsLong, "*.png")
$matching = $allFiles | Where-Object { $_ -match "image-f81d84a7|WhatsApp_Image_2026-03-09" } | Sort-Object
$twelve = $matching | Select-Object -First 12

for ($i = 0; $i -lt [Math]::Min(12, $twelve.Count); $i++) {
    $num = "{0:D2}" -f ($i + 1)
    $destPath = Join-Path $dest "padron-bg-$num.png"
    $srcPath = $twelve[$i]
    try {
        [System.IO.File]::Copy($srcPath, $destPath, $true)
        Write-Host "OK padron-bg-$num.png"
    } catch {
        Write-Host "Erro $num : $_"
    }
}

Write-Host "Concluido. Arquivos em $dest :"
Get-ChildItem $dest -Filter "padron-bg-*.png" -ErrorAction SilentlyContinue | Select-Object Name, Length
