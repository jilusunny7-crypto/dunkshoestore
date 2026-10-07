Add-Type -AssemblyName System.Drawing

function Generate-PerfectNikeCursor {
    param([string]$Path, [bool]$IsPointer)

    $bmp = New-Object System.Drawing.Bitmap(36, 36)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    # Let's draw the angled Nike sneaker where TOE is at (2, 2) pointing top-left!
    # Heel is at bottom-right (30, 27).
    
    # Outer white glow/halo for high contrast on dark & light backgrounds
    $haloPen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 3.0)
    $haloPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round

    # Sneaker outline path
    $outline = New-Object System.Drawing.Drawing2D.GraphicsPath
    # Points along perimeter:
    # Toe tip (2,2) -> Toe top (8,5) -> Laces (14,10) -> Collar (19,13) -> Ankle (24,17) -> Heel (31,23) 
    # -> Heel base (29,28) -> Midsole heel (26,29) -> Midsole mid (16,21) -> Midsole toe (7,12) -> Toe bottom (3,6) -> back to (2,2)
    $polyPts = @(
        (New-Object System.Drawing.PointF(2.0, 2.0)),    # 0: Toe tip (click hotspot)
        (New-Object System.Drawing.PointF(7.0, 4.0)),    # 1: Toe curve top
        (New-Object System.Drawing.PointF(12.0, 8.0)),   # 2: Vamp / laces start
        (New-Object System.Drawing.PointF(17.0, 12.0)),  # 3: Tongue top
        (New-Object System.Drawing.PointF(20.0, 13.5)),  # 4: Collar notch
        (New-Object System.Drawing.PointF(25.0, 17.0)),  # 5: Collar heel top
        (New-Object System.Drawing.PointF(32.0, 23.0)),  # 6: Heel curve back
        (New-Object System.Drawing.PointF(33.0, 26.0)),  # 7: Heel bottom
        (New-Object System.Drawing.PointF(28.0, 30.0)),  # 8: Outsole bottom heel
        (New-Object System.Drawing.PointF(18.0, 22.0)),  # 9: Outsole arch
        (New-Object System.Drawing.PointF(9.0, 14.0)),   # 10: Outsole forefoot
        (New-Object System.Drawing.PointF(4.0, 7.5)),    # 11: Outsole toe bumper
        (New-Object System.Drawing.PointF(2.0, 2.0))     # 12: Back to toe tip
    )
    $outline.AddLines($polyPts)

    # Draw white contrast halo
    $g.DrawPath($haloPen, $outline)

    # 1. Outsole (Black/Dark Ash)
    $outsoleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(24, 24, 27))
    $outsolePath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $outsolePath.AddLines(@(
        (New-Object System.Drawing.PointF(3.5, 6.5)),
        (New-Object System.Drawing.PointF(8.5, 12.5)),
        (New-Object System.Drawing.PointF(18.0, 21.5)),
        (New-Object System.Drawing.PointF(28.0, 30.0)),
        (New-Object System.Drawing.PointF(32.0, 27.0)),
        (New-Object System.Drawing.PointF(25.0, 26.0)),
        (New-Object System.Drawing.PointF(16.0, 18.0)),
        (New-Object System.Drawing.PointF(7.0, 10.0)),
        (New-Object System.Drawing.PointF(3.5, 6.5))
    ))
    $g.FillPath($outsoleBrush, $outsolePath)

    # 2. Midsole (Crisp White with stitch)
    $midsoleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $midsolePath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $midsolePath.AddLines(@(
        (New-Object System.Drawing.PointF(2.5, 4.0)),
        (New-Object System.Drawing.PointF(7.0, 10.0)),
        (New-Object System.Drawing.PointF(16.0, 18.0)),
        (New-Object System.Drawing.PointF(26.0, 26.5)),
        (New-Object System.Drawing.PointF(32.5, 24.5)),
        (New-Object System.Drawing.PointF(29.0, 22.0)),
        (New-Object System.Drawing.PointF(15.0, 14.5)),
        (New-Object System.Drawing.PointF(6.0, 7.0)),
        (New-Object System.Drawing.PointF(2.5, 4.0))
    ))
    $g.FillPath($midsoleBrush, $midsolePath)
    $midsoleBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(212, 212, 216), 0.5)
    $g.DrawPath($midsoleBorderPen, $midsolePath)

    # 3. Upper Body (Charcoal Ash)
    $upperColor = if ($IsPointer) { [System.Drawing.Color]::FromArgb(15, 23, 42) } else { [System.Drawing.Color]::FromArgb(39, 39, 42) }
    $upperBrush = New-Object System.Drawing.SolidBrush($upperColor)
    $upperPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $upperPath.AddLines(@(
        (New-Object System.Drawing.PointF(2.0, 2.0)),
        (New-Object System.Drawing.PointF(7.0, 4.0)),
        (New-Object System.Drawing.PointF(12.0, 8.0)),
        (New-Object System.Drawing.PointF(17.0, 12.0)),
        (New-Object System.Drawing.PointF(20.0, 13.5)),
        (New-Object System.Drawing.PointF(25.0, 17.0)),
        (New-Object System.Drawing.PointF(32.0, 23.0)),
        (New-Object System.Drawing.PointF(29.0, 22.0)),
        (New-Object System.Drawing.PointF(15.0, 14.5)),
        (New-Object System.Drawing.PointF(6.0, 7.0)),
        (New-Object System.Drawing.PointF(2.0, 2.0))
    ))
    $g.FillPath($upperBrush, $upperPath)

    # 4. White Toe Box Accent
    $toeCapBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $toeCapPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $toeCapPath.AddLines(@(
        (New-Object System.Drawing.PointF(2.0, 2.0)),
        (New-Object System.Drawing.PointF(6.0, 3.5)),
        (New-Object System.Drawing.PointF(8.0, 6.0)),
        (New-Object System.Drawing.PointF(4.0, 5.0)),
        (New-Object System.Drawing.PointF(2.0, 2.0))
    ))
    $g.FillPath($toeCapBrush, $toeCapPath)

    # 5. Laces (White diagonal dashes)
    $lacePen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 1.0)
    $lacePen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $lacePen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $g.DrawLine($lacePen, 7.5, 5.0, 9.5, 7.5)
    $g.DrawLine($lacePen, 10.5, 7.5, 12.5, 10.0)
    $g.DrawLine($lacePen, 13.5, 10.0, 15.5, 12.5)

    # 6. Collar & Heel Counter (White & Accent)
    $collarBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(244, 244, 245))
    $collarPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $collarPath.AddLines(@(
        (New-Object System.Drawing.PointF(20.0, 13.5)),
        (New-Object System.Drawing.PointF(25.0, 17.0)),
        (New-Object System.Drawing.PointF(23.5, 19.0)),
        (New-Object System.Drawing.PointF(19.0, 15.0)),
        (New-Object System.Drawing.PointF(20.0, 13.5))
    ))
    $g.FillPath($collarBrush, $collarPath)

    # 7. ICONIC NIKE SWOOSH (Vivid White / Emerald on pointer)
    $swooshColor = if ($IsPointer) { [System.Drawing.Color]::FromArgb(16, 185, 129) } else { [System.Drawing.Color]::White }
    $swooshBrush = New-Object System.Drawing.SolidBrush($swooshColor)
    $swooshPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(9, 9, 11), 0.6)
    
    $swooshPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $swooshPath.StartFigure()
    # Swoosh starting near toe overlay, swooping down along the side, then sweeping up to collar
    $swooshPath.AddBezier(
        [System.Drawing.PointF]::new(8.0, 7.0),
        [System.Drawing.PointF]::new(12.0, 11.5),
        [System.Drawing.PointF]::new(18.0, 17.0),
        [System.Drawing.PointF]::new(28.0, 19.0)
    )
    $swooshPath.AddBezier(
        [System.Drawing.PointF]::new(28.0, 19.0),
        [System.Drawing.PointF]::new(21.0, 16.5),
        [System.Drawing.PointF]::new(15.0, 13.0),
        [System.Drawing.PointF]::new(9.0, 6.0)
    )
    $swooshPath.CloseFigure()
    $g.FillPath($swooshBrush, $swooshPath)
    $g.DrawPath($swooshPen, $swooshPath)

    # Outer crisp border around the whole shoe
    $borderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(9, 9, 11), 0.8)
    $g.DrawPath($borderPen, $outline)

    # Hotspot dot at the toe tip (2, 2)
    $tipPen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 0.8)
    $tipBrush = if ($IsPointer) { [System.Drawing.Color]::FromArgb(16, 185, 129) } else { [System.Drawing.Color]::FromArgb(9, 9, 11) }
    $g.FillEllipse((New-Object System.Drawing.SolidBrush($tipBrush)), 0.8, 0.8, 2.4, 2.4)
    $g.DrawEllipse($tipPen, 0.8, 0.8, 2.4, 2.4)

    # Save
    $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Successfully generated: $Path"
}

Generate-PerfectNikeCursor -Path "C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\nike-cursor.png" -IsPointer $false
Generate-PerfectNikeCursor -Path "C:\Users\finum\.gemini\antigravity\scratch\dunk-shoe-store\assets\images\nike-cursor-pointer.png" -IsPointer $true
