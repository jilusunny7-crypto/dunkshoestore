Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\tab-icon.png")

# Let's inspect the corner pixels and center
Write-Host "Pixel at 0,0: $($src.GetPixel(0, 0))"
Write-Host "Pixel at 10,10: $($src.GetPixel(10, 10))"
Write-Host "Pixel at 453, 393 (center): $($src.GetPixel(453, 393))"
Write-Host "Pixel at 100, 393: $($src.GetPixel(100, 393))"

# Also let's find the bounding box of the circular disc or where the white circle is
$w = $src.Width
$h = $src.Height

# Let's sample edges to see what's outside the white disc
Write-Host "Top-left: $($src.GetPixel(50, 50))"
Write-Host "Bottom-left: $($src.GetPixel(50, $h - 50))"
Write-Host "Top-right: $($src.GetPixel($w - 50, 50))"
Write-Host "Bottom-right: $($src.GetPixel($w - 50, $h - 50))"

$src.Dispose()
