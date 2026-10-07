Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\tab-icon.png")

$textMinX = $src.Width
$textMaxX = 0
$textMinY = $src.Height
$textMaxY = 0

for ($y = 0; $y -lt $src.Height; $y++) {
    for ($x = 0; $x -lt $src.Width; $x++) {
        $c = $src.GetPixel($x, $y)
        if ($c.A -gt 150) {
            if ($x -lt $textMinX) { $textMinX = $x }
            if ($x -gt $textMaxX) { $textMaxX = $x }
            if ($y -lt $textMinY) { $textMinY = $y }
            if ($y -gt $textMaxY) { $textMaxY = $y }
        }
    }
}

Write-Host "Solid Text Bounds: X=[$textMinX, $textMaxX], Y=[$textMinY, $textMaxY]"
$w = $textMaxX - $textMinX + 1
$h = $textMaxY - $textMinY + 1
Write-Host "Text Width: $w, Height: $h"
$src.Dispose()
