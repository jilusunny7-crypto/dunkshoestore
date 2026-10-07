Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\tab-icon.png")

# Let's find pixels where R>200, G>200, B>200 (the white circle)
$whiteMinX = $src.Width
$whiteMaxX = 0
$whiteMinY = $src.Height
$whiteMaxY = 0

for ($y = 0; $y -lt $src.Height; $y += 2) {
    for ($x = 0; $x -lt $src.Width; $x += 2) {
        $c = $src.GetPixel($x, $y)
        if ($c.A -gt 200 -and $c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
            if ($x -lt $whiteMinX) { $whiteMinX = $x }
            if ($x -gt $whiteMaxX) { $whiteMaxX = $x }
            if ($y -lt $whiteMinY) { $whiteMinY = $y }
            if ($y -gt $whiteMaxY) { $whiteMaxY = $y }
        }
    }
}

Write-Host "White disc bounds: minX=$whiteMinX, maxX=$whiteMaxX, minY=$whiteMinY, maxY=$whiteMaxY"
$whiteW = $whiteMaxX - $whiteMinX
$whiteH = $whiteMaxY - $whiteMinY
Write-Host "White Disc Width=$whiteW, Height=$whiteH"

$centerX = [int](($whiteMinX + $whiteMaxX) / 2)
$centerY = [int](($whiteMinY + $whiteMaxY) / 2)
Write-Host "Center: X=$centerX, Y=$centerY"

$radius = [int]([Math]::Max($whiteW, $whiteH) / 2)
Write-Host "Radius: $radius"

$src.Dispose()
