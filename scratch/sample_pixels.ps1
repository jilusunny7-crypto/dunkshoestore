Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\tab-icon.png")

for ($x = 100; $x -lt 800; $x += 100) {
    $c = $src.GetPixel($x, 393)
    Write-Host "X=$x, Y=393: A=$($c.A) R=$($c.R) G=$($c.G) B=$($c.B)"
}
for ($y = 100; $y -lt 700; $y += 100) {
    $c = $src.GetPixel(453, $y)
    Write-Host "X=453, Y=$($y): A=$($c.A) R=$($c.R) G=$($c.G) B=$($c.B)"
}

$src.Dispose()
