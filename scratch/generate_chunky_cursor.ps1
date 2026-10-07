Add-Type -AssemblyName System.Drawing

function Generate-NikeAssets {
    param([string]$PngPath, [string]$SvgPath, [bool]$IsPointer)

    $size = 36
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    $state = $g.Save()
    
    # Place toe exactly at (3, 3)
    $rot = if ($IsPointer) { 44 } else { 38 }
    $g.TranslateTransform(17, 15)
    $g.RotateTransform($rot)

    # 0. Outer White Glow / Contour for visibility on ANY background (dark hero or white cards)
    $haloPen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 3.2)
    $haloPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round

    $shoePath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $pts = @(
        (New-Object System.Drawing.PointF(-15, 0)),     # Toe tip (pointing up-left)
        (New-Object System.Drawing.PointF(-13, -3.2)),  # Toe box top
        (New-Object System.Drawing.PointF(-8, -4.8)),   # Forefoot
        (New-Object System.Drawing.PointF(-3, -7.8)),   # Eyestay
        (New-Object System.Drawing.PointF(2, -9.5)),    # Tongue
        (New-Object System.Drawing.PointF(6, -8.2)),    # Ankle collar opening
        (New-Object System.Drawing.PointF(10, -5.8)),   # Ankle collar back
        (New-Object System.Drawing.PointF(13, -7.8)),   # Heel tab
        (New-Object System.Drawing.PointF(14.5, -3)),   # Heel counter
        (New-Object System.Drawing.PointF(14.5, 3)),    # Midsole heel
        (New-Object System.Drawing.PointF(13, 6.2)),    # Outsole heel
        (New-Object System.Drawing.PointF(4, 6.8)),     # Outsole arch
        (New-Object System.Drawing.PointF(-8, 6.8)),    # Outsole ball
        (New-Object System.Drawing.PointF(-13.5, 4.8)), # Outsole toe bumper
        (New-Object System.Drawing.PointF(-15, 0))      # Back to toe tip
    )
    $shoePath.AddLines($pts)
    $g.DrawPath($haloPen, $shoePath)

    # 1. Outsole (Dark Ash Tread)
    $outsoleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(24, 24, 27))
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

    # 2. Midsole (Crisp White with stitch groove)
    $midsoleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $midsolePath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $midsolePath.AddLines(@(
        (New-Object System.Drawing.PointF(-14.5, 1.2)),
        (New-Object System.Drawing.PointF(-14, 3.8)),
        (New-Object System.Drawing.PointF(13.5, 3.8)),
        (New-Object System.Drawing.PointF(14, 1.2)),
        (New-Object System.Drawing.PointF(-14.5, 1.2))
    ))
    $g.FillPath($midsoleBrush, $midsolePath)
    $stitchPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(212, 212, 216), 0.5)
    $g.DrawLine($stitchPen, -13.0, 2.5, 12.0, 2.5)

    # 3. Sneaker Upper Body (Deep Charcoal Ash #27272a)
    $upperColor = if ($IsPointer) { [System.Drawing.Color]::FromArgb(15, 23, 42) } else { [System.Drawing.Color]::FromArgb(39, 39, 42) }
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
        (New-Object System.Drawing.PointF(14, 1.2)),
        (New-Object System.Drawing.PointF(-14.5, 1.2)),
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
    # Perforation dots
    $dotBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(161, 161, 170))
    $g.FillEllipse($dotBrush, -11.0, -1.2, 0.8, 0.8)
    $g.FillEllipse($dotBrush, -9.0, -1.8, 0.8, 0.8)

    # 5. Collar & Tongue (Light Ash)
    $collarBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(228, 228, 231))
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

    # 6. Laces (Vivid White)
    $lacePen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 1.2)
    $lacePen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $lacePen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $g.DrawLine($lacePen, -6.5, -3.2, -4.0, -6.0)
    $g.DrawLine($lacePen, -3.5, -4.5, -1.0, -7.5)
    $g.DrawLine($lacePen, -0.5, -5.8, 1.8, -8.6)

    # 7. Heel Counter Overlay (Dark Jet Ash)
    $heelOverlayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(9, 9, 11))
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

    # 8. BOLD PROMINENT NIKE SWOOSH
    # White on default cursor, vivid emerald green on hover pointer!
    $swooshColor = if ($IsPointer) { [System.Drawing.Color]::FromArgb(16, 185, 129) } else { [System.Drawing.Color]::White }
    $swooshBrush = New-Object System.Drawing.SolidBrush($swooshColor)
    $swooshPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(9, 9, 11), 0.7)

    $swoosh = New-Object System.Drawing.Drawing2D.GraphicsPath
    $swoosh.StartFigure()
    # Bottom swoop: from front of midfoot (-6, -1.5), sweeps low to (5, 2.0), then up to heel (14, -5.5)
    $swoosh.AddBezier(
        [System.Drawing.PointF]::new(-6.0, -1.5),
        [System.Drawing.PointF]::new(-1.0, 1.2),
        [System.Drawing.PointF]::new(6.0, 2.2),
        [System.Drawing.PointF]::new(14.0, -5.5)
    )
    # Top hook of Swoosh
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
    $outlinePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(24, 24, 27), 0.8)
    $g.DrawPath($outlinePen, $shoePath)

    $g.Restore($state)

    # Save PNG
    $bmp.Save($PngPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Generated PNG: $PngPath"
}

Generate-NikeAssets -PngPath "C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\nike-cursor.png" -SvgPath "" -IsPointer $false
Generate-NikeAssets -PngPath "C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\nike-cursor-pointer.png" -SvgPath "" -IsPointer $true
