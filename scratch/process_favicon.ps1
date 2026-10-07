Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\finum\.gemini\antigravity\brain\a63d8880-a8bc-4797-abb6-d6a9b95270a5\.user_uploaded\media_1790516955970.png"
$destPath = "C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\favicon.png"
$destIconPath = "C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\favicon.ico"

# Copy original file to assets/images/
Copy-Item $srcPath "C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\tab-icon.png" -Force

$img = [System.Drawing.Image]::FromFile($srcPath)
Write-Host "Source Width: $($img.Width) Height: $($img.Height)"

# Now let's create a clean, sharp, circular-clipped or cropped favicon version in 64x64, 32x32, 180x180 (for apple touch icon), and 512x512
# The user's image is a white circle with black "WOK" / "WOKE" text in the middle and some gray/shadow vignette outside.
# Let's see if we should create a crisp favicon where the circle is cleanly clipped or centered.
$sizes = @(16, 32, 48, 64, 128, 180, 192, 512)

foreach ($s in $sizes) {
    $bmp = New-Object System.Drawing.Bitmap($s, $s)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    # Draw circular path or draw image nicely fitted
    # Check if we should draw the source image scaled to $s x $s
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $s, $s)
    $g.DrawImage($img, $destRect)
    $g.Dispose()

    $bmp.Save("C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\favicon-$($s).png", [System.Drawing.Imaging.ImageFormat]::Png)
    if ($s -eq 32) {
        $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    $bmp.Dispose()
}

$img.Dispose()
Write-Host "Favicons generated successfully!"
