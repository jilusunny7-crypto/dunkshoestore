Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\finum\.gemini\antigravity\brain\a63d8880-a8bc-4797-abb6-d6a9b95270a5\.user_uploaded\media_1790516955970.png"
$rawSrc = [System.Drawing.Bitmap]::FromFile($srcPath)

# 1. First, let's copy the raw uploaded PNG directly to assets/images/
$rawSrc.Save("C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\wok-tab-icon-original.png", [System.Drawing.Imaging.ImageFormat]::Png)

# Solid text bounds: X=[238, 680], Y=[337, 434]
# Text Width: 443, Height: 98
$textCrop = New-Object System.Drawing.Bitmap(443, 98)
$gCrop = [System.Drawing.Graphics]::FromImage($textCrop)
$gCrop.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gCrop.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$srcRect = New-Object System.Drawing.Rectangle(238, 337, 443, 98)
$dstRect = New-Object System.Drawing.Rectangle(0, 0, 443, 98)
$gCrop.DrawImage($rawSrc, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$gCrop.Dispose()

# Let's create the ultimate browser tab favicon:
# Modern browser tabs (Chrome, Edge, Safari, Firefox) show favicons at 16x16, 32x32.
# A white circular disc with the bold black WOK wordmark centered inside is standard
# for brand logos (like Nike, Adidas, Supreme, Apple) so it stands out vividly on both dark and light tabs.
$sizes = @(16, 32, 48, 64, 128, 180, 192, 512)

foreach ($s in $sizes) {
    # Version 1: White circular badge with black WOK text (Perfect for all browser tab backgrounds!)
    $bmp = New-Object System.Drawing.Bitmap($s, $s)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    # Draw pure white circle
    $margin = [Math]::Max(1, [int]($s * 0.03))
    $circleSize = $s - ($margin * 2)
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $g.FillEllipse($brush, $margin, $margin, $circleSize, $circleSize)
    $brush.Dispose()

    # Subtle fine border so it looks ultra sharp on white browser headers
    $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(200, 220, 220, 225), 1.2)
    $g.DrawEllipse($pen, $margin, $margin, $circleSize, $circleSize)
    $pen.Dispose()

    # Calculate centered position for the WOK text inside the circle
    # Text aspect ratio is 443 / 98 ≈ 4.52
    $targetW = [int]($circleSize * 0.78)
    $targetH = [int]($targetW * (98.0 / 443.0))
    $targetX = [int](($s - $targetW) / 2)
    $targetY = [int](($s - $targetH) / 2)

    $targetRect = New-Object System.Drawing.Rectangle($targetX, $targetY, $targetW, $targetH)
    $g.DrawImage($textCrop, $targetRect)
    $g.Dispose()

    $bmp.Save("C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\favicon-$($s).png", [System.Drawing.Imaging.ImageFormat]::Png)
    if ($s -eq 32) {
        # Standard default favicon.png
        $bmp.Save("C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Save("C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\favicon.ico", [System.Drawing.Imaging.ImageFormat]::Png)
    }
    if ($s -eq 180) {
        $bmp.Save("C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\apple-touch-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
    }
    $bmp.Dispose()

    # Version 2: Direct transparent crop (centered in square)
    $bmpTrans = New-Object System.Drawing.Bitmap($s, $s)
    $gTrans = [System.Drawing.Graphics]::FromImage($bmpTrans)
    $gTrans.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $gTrans.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gTrans.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $gTrans.Clear([System.Drawing.Color]::Transparent)

    $tW = [int]($s * 0.90)
    $tH = [int]($tW * (98.0 / 443.0))
    $tX = [int](($s - $tW) / 2)
    $tY = [int](($s - $tH) / 2)
    $tRect = New-Object System.Drawing.Rectangle($tX, $tY, $tW, $tH)
    $gTrans.DrawImage($textCrop, $tRect)
    $gTrans.Dispose()

    $bmpTrans.Save("C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\tab-icon-transparent-$($s).png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmpTrans.Dispose()
}

$textCrop.Dispose()
$rawSrc.Dispose()
Write-Host "All favicon and tab icon variants successfully generated!"
