Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\tab-icon.png")

$minX = $src.Width
$maxX = 0
$minY = $src.Height
$maxY = 0

for ($y = 0; $y -lt $src.Height; $y += 2) {
    for ($x = 0; $x -lt $src.Width; $x += 2) {
        $c = $src.GetPixel($x, $y)
        if ($c.A -gt 20) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Non-transparent bounds: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"
$boundW = $maxX - $minX
$boundH = $maxY - $minY
Write-Host "Width=$boundW, Height=$boundH"
$src.Dispose()
