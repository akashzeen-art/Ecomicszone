# Script to remove unused images and PDFs
# Keep only the files that are actually referenced in the codebase

# Images that ARE being used (keep these)
$usedImages = @(
    "placeholder.svg",
    "placeholder.jpg",
    "placeholder-logo.svg",
    "placeholder-logo.png",
    "placeholder-user.jpg",
    "spider-like-hero.png",
    "wonder-woman-inspired-heroine.png",
    "dark-knight.png",
    "fierce-mutant.png",
    "stylized-jester.png",
    "captain-marvel.png",
    "spider-man-comic-cover.png",
    "wonder-woman-comic-cover.png",
    "walking-dead-comic-cover.png",
    "saga-comic-cover.png",
    "dark-knight-comic.png",
    "attack-on-titan-manga-cover.png",
    "comic-book-office.png",
    "sandman-comic-cover.png",
    "watchmen-comic-cover.png",
    "y-the-last-man-comic-cover.png",
    "space-patrol-comic.png",
    "dark-shadows-comic-cover.png",
    "mystic-realms-comic.png",
    "armored-superhero.png",
    "cyber-knights-comic-cover.png",
    "cyberpunk-comic-cover.png",
    "ancient-mythology-comic-cover.png",
    "professional-asian-female-designer.png",
    "professional-female-business-executive.png",
    "korean-male-community-manager.png",
    "professional-female-cto.png",
    "asian-ceo-casual.png"
)

# PDFs that ARE being used (keep these)
$usedPDFs = @(
    "pdf4.pdf",
    "pdf10.pdf",
    "pdf11.pdf",
    "pdf12.pdf"
)

# Get all files in public folder
$publicPath = "public"
$allImages = Get-ChildItem -Path $publicPath -Filter "*.png" -File | Select-Object -ExpandProperty Name
$allImages += Get-ChildItem -Path $publicPath -Filter "*.jpg" -File | Select-Object -ExpandProperty Name
$allImages += Get-ChildItem -Path $publicPath -Filter "*.svg" -File | Select-Object -ExpandProperty Name

# Find unused images
$unusedImages = $allImages | Where-Object { $usedImages -notcontains $_ }

# Remove unused images
foreach ($image in $unusedImages) {
    $imagePath = Join-Path $publicPath $image
    if (Test-Path $imagePath) {
        Write-Host "Removing unused image: $image"
        Remove-Item $imagePath -Force
    }
}

# Handle PDFs
$pdfsPath = Join-Path $publicPath "pdfs"
if (Test-Path $pdfsPath) {
    $allPDFs = Get-ChildItem -Path $pdfsPath -Filter "*.pdf" -File | Select-Object -ExpandProperty Name
    $unusedPDFs = $allPDFs | Where-Object { $usedPDFs -notcontains $_ }
    
    foreach ($pdf in $unusedPDFs) {
        $pdfPath = Join-Path $pdfsPath $pdf
        if (Test-Path $pdfPath) {
            Write-Host "Removing unused PDF: $pdf"
            Remove-Item $pdfPath -Force
        }
    }
}

# Remove unused image folders (folder1 and User 6698, keep folder2)
$imagesPath = Join-Path $publicPath "images"
if (Test-Path $imagesPath) {
    $folder1Path = Join-Path $imagesPath "folder1"
    $user6698Path = Join-Path $imagesPath "User 6698"
    
    if (Test-Path $folder1Path) {
        Write-Host "Removing unused folder: images/folder1"
        Remove-Item $folder1Path -Recurse -Force
    }
    
    if (Test-Path $user6698Path) {
        Write-Host "Removing unused folder: images/User 6698"
        Remove-Item $user6698Path -Recurse -Force
    }
}

Write-Host "`nCleanup complete!"
Write-Host "Removed unused images and PDFs from public folder."

