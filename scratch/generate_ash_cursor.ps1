Add-Type -AssemblyName System.Drawing

function Generate-NikeAssets {
    param([string]$PngPath, [bool]$IsPointer)

    $size = 36
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    $state = $g.Save()
    
    $rot = if ($IsPointer) { 44 } else { 38 }
    $g.TranslateTransform(17, 15)
    $g.RotateTransform($rot)

    # 0. Outer White Contour / Glow
    $haloColor = if ($IsPointer) { [System.Drawing.Color]::FromArgb(255, 255, 255) } else { [System.Drawing.Color]::FromArgb(240, 240, 240) }
    $haloPen = New-Object System.Drawing.Pen($haloColor, 3.4)
    $haloPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round

    $shoePath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $pts = @(
        (New-Object System.Drawing.PointF(-15, 0)),
        (New-Object System.Drawing.PointF(-13, -3.2)),
        (New-Object System.Drawing.PointF(-8, -4.8)),
        (New-Object System.Drawing.PointF(-3, -7.8)),
        (New-Object System.Drawing.PointF(2, -9.5)),
        (New-Object System.Drawing.PointF(6, -8.2)),
        (New-Object System.Drawing.PointF(10, -5.8)),
        (New-Object System.Drawing.PointF(13, -7.8)),
        (New-Object System.Drawing.PointF(14.5, -3)),
        (New-Object System.Drawing.PointF(14.5, 3)),
        (New-Object System.Drawing.PointF(13, 6.2)),
        (New-Object System.Drawing.PointF(4, 6.8)),
        (New-Object System.Drawing.PointF(-8, 6.8)),
        (New-Object System.Drawing.PointF(-13.5, 4.8)),
        (New-Object System.Drawing.PointF(-15, 0))
    )
    $shoePath.AddLines($pts)
    $g.DrawPath($haloPen, $shoePath)

    # 1. Outsole (Charcoal Concrete Ash)
    $outsoleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(30, 32, 30))
    $outsolePath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $outsolePath.AddLines(@(
        (New-Object System.Drawing.PointF(-14, 3.8)),
        (New-Object System.Drawing.PointF(-13.5, 4.8)),
        (New-Object System.Drawing.PointF(-8, 6.8)),
        (New-Object System.Drawing.PointF(4, 6.8)),
        (New-Object System.Drawing.PointF(13, 6.2)),
        (New-Object System.Drawing.PointF(13, 3.8)),
        (New-Object System.Drawing.PointF(-14, 3.8))
    ))
    $g.FillPath($outsoleBrush, $outsolePath)

    # 2. Midsole (Crisp Pure White)
    $midsoleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $midsolePath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $midsolePath.AddLines(@(
        (New-Object System.Drawing.PointF(-14.5, 1.0)),
        (New-Object System.Drawing.PointF(-14, 3.8)),
        (New-Object System.Drawing.PointF(13.8, 3.8)),
        (New-Object System.Drawing.PointF(14.2, 1.0)),
        (New-Object System.Drawing.PointF(-14.5, 1.0))
    ))
    $g.FillPath($midsoleBrush, $midsolePath)
    $midsoleStitchPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(215, 218, 215), 0.7)
    $g.DrawLine($midsoleStitchPen, -13.5, 2.4, 13.2, 2.4)

    # 3. Upper Base (Concrete Ash #555753 / #383a37)
    $upperColor = if ($IsPointer) { [System.Drawing.Color]::FromArgb(45, 47, 45) } else { [System.Drawing.Color]::FromArgb(55, 57, 54) }
    $upperBrush = New-Object System.Drawing.SolidBrush($upperColor)
    $upperPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $upperPath.AddLines(@(
        (New-Object System.Drawing.PointF(-15, 0)),
        (New-Object System.Drawing.PointF(-13, -3.2)),
        (New-Object System.Drawing.PointF(-8, -4.8)),
        (New-Object System.Drawing.PointF(-3, -7.8)),
        (New-Object System.Drawing.PointF(2, -9.5)),
        (New-Object System.Drawing.PointF(6, -8.2)),
        (New-Object System.Drawing.PointF(10, -5.8)),
        (New-Object System.Drawing.PointF(13, -7.8)),
        (New-Object System.Drawing.PointF(14.5, -3)),
        (New-Object System.Drawing.PointF(14.2, 1.0)),
        (New-Object System.Drawing.PointF(-14.5, 1.0)),
        (New-Object System.Drawing.PointF(-15, 0))
    ))
    $g.FillPath($upperBrush, $upperPath)

    # 4. White Toe Box Overlay
    $toePanelBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $toePanelPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $toePanelPath.AddLines(@(
        (New-Object System.Drawing.PointF(-14.5, 0.5)),
        (New-Object System.Drawing.PointF(-12.5, -2.5)),
        (New-Object System.Drawing.PointF(-7.5, -4.0)),
        (New-Object System.Drawing.PointF(-7, 0.8)),
        (New-Object System.Drawing.PointF(-14.5, 0.5))
    ))
    $g.FillPath($toePanelBrush, $toePanelPath)

    # Perforations
    $dotBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(160, 162, 160))
    $g.FillEllipse($dotBrush, -11.0, -1.2, 0.8, 0.8)
    $g.FillEllipse($dotBrush, -9.0, -1.8, 0.8, 0.8)

    # 5. Collar & Tongue (Light Ash Plaster)
    $collarBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(215, 218, 215))
    $collarPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $collarPath.AddLines(@(
        (New-Object System.Drawing.PointF(2, -9.5)),
        (New-Object System.Drawing.PointF(6, -8.2)),
        (New-Object System.Drawing.PointF(10, -5.8)),
        (New-Object System.Drawing.PointF(13, -7.8)),
        (New-Object System.Drawing.PointF(11, -3)),
        (New-Object System.Drawing.PointF(4, -4.8)),
        (New-Object System.Drawing.PointF(2, -9.5))
    ))
    $g.FillPath($collarBrush, $collarPath)

    # 6. Laces (Pure White)
    $lacePen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 1.3)
    $lacePen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $lacePen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $g.DrawLine($lacePen, -6.5, -3.2, -4.0, -6.0)
    $g.DrawLine($lacePen, -3.5, -4.5, -1.0, -7.5)
    $g.DrawLine($lacePen, -0.5, -5.8, 1.8, -8.6)

    # 7. Heel Counter Overlay (Deep Ash)
    $heelOverlayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(28, 30, 28))
    $heelOverlayPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $heelOverlayPath.AddLines(@(
        (New-Object System.Drawing.PointF(8.5, -2.5)),
        (New-Object System.Drawing.PointF(13, -7.8)),
        (New-Object System.Drawing.PointF(14.5, -3)),
        (New-Object System.Drawing.PointF(14, 1.2)),
        (New-Object System.Drawing.PointF(8.5, 1.2)),
        (New-Object System.Drawing.PointF(8.5, -2.5))
    ))
    $g.FillPath($heelOverlayBrush, $heelOverlayPath)

    # 8. BOLD PROMINENT NIKE SWOOSH (Pure White)
    $swooshBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $swooshPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(25, 27, 25), 0.8)

    $swoosh = New-Object System.Drawing.Drawing2D.GraphicsPath
    $swoosh.StartFigure()
    $swoosh.AddBezier(
        [System.Drawing.PointF]::new(-6.0, -1.5),
        [System.Drawing.PointF]::new(-1.0, 1.2),
        [System.Drawing.PointF]::new(6.0, 2.2),
        [System.Drawing.PointF]::new(14.0, -5.5)
    )
    $swoosh.AddBezier(
        [System.Drawing.PointF]::new(14.0, -5.5),
        [System.Drawing.PointF]::new(7.0, -0.4),
        [System.Drawing.PointF]::new(0.0, -0.2),
        [System.Drawing.PointF]::new(-6.0, -1.5)
    )
    $swoosh.CloseFigure()
    $g.FillPath($swooshBrush, $swoosh)
    $g.DrawPath($swooshPen, $swoosh)

    # Crisp dark outline around the whole shoe
    $outlinePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(28, 30, 28), 0.9)
    $g.DrawPath($outlinePen, $shoePath)

    $g.Restore($state)

    $bmp.Save($PngPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Generated Ash & White Sneaker Cursor: $PngPath"
}

Generate-NikeAssets -PngPath "C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\nike-cursor.png" -IsPointer $false
Generate-NikeAssets -PngPath "C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\nike-cursor-pointer.png" -IsPointer $true
