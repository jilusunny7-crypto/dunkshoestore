Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\finum\.gemini\antigravity\brain\a63d8880-a8bc-4797-abb6-d6a9b95270a5\.user_uploaded\media_1790517199419.png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

$w = $img.Width
$h = $img.Height
Write-Host "Image size: ${w}x${h}"

$rTotal = 0; $gTotal = 0; $bTotal = 0; $count = 0
$samples = @()

for ($y = 0; $y -lt $h; $y += 20) {
    for ($x = 0; $x -lt $w; $x += 20) {
        $c = $img.GetPixel($x, $y)
        $rTotal += $c.R
        $gTotal += $c.G
        $bTotal += $c.B
        $count++
        $samples += $c
    }
}

$avgR = [int]($rTotal / $count)
$avgG = [int]($gTotal / $count)
$avgB = [int]($bTotal / $count)

$hex = "#{0:X2}{1:X2}{2:X2}" -f $avgR, $avgG, $avgB
Write-Host "Average Color: $hex (RGB: $avgR, $avgG, $avgB)"

# Also let's find dark ash, mid ash, and light ash tones
$sortedByBrightness = $samples | Sort-Object { $_.GetBrightness() }
$dark = $sortedByBrightness[ [int]($samples.Count * 0.1) ]
$mid = $sortedByBrightness[ [int]($samples.Count * 0.5) ]
$light = $sortedByBrightness[ [int]($samples.Count * 0.9) ]

$darkHex = "#{0:X2}{1:X2}{2:X2}" -f $dark.R, $dark.G, $dark.B
$midHex = "#{0:X2}{1:X2}{2:X2}" -f $mid.R, $mid.G, $mid.B
$lightHex = "#{0:X2}{1:X2}{2:X2}" -f $light.R, $light.G, $light.B

Write-Host "Dark Ash (10%): $darkHex (RGB: $($dark.R), $($dark.G), $($dark.B))"
Write-Host "Mid Ash (50%): $midHex (RGB: $($mid.R), $($mid.G), $($mid.B))"
Write-Host "Light Ash (90%): $lightHex (RGB: $($light.R), $($light.G), $($light.B))"

$img.Dispose()
