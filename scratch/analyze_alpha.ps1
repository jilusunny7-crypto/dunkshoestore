Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\tab-icon.png")

# Let's count alpha values
$alphaCounts = @{}
for ($y = 0; $y -lt $src.Height; $y += 5) {
    for ($x = 0; $x -lt $src.Width; $x += 5) {
        $c = $src.GetPixel($x, $y)
        if ($c.A -gt 0) {
            $key = "A=$($c.A) R=$($c.R) G=$($c.G) B=$($c.B)"
            $alphaCounts[$key] = ($alphaCounts[$key] + 1)
        }
    }
}

Write-Host "Total non-zero alpha pixel samples: $($alphaCounts.Keys.Count)"
$alphaCounts.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 15 | ForEach-Object {
    Write-Host "$($_.Key): $($_.Value)"
}

$src.Dispose()
