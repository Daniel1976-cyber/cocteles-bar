from PIL import Image
import os

images = [
    'images/cocktail_bar_background.png',
    'images/mojito.png',
    'images/pina_colada.png'
]

for img_path in images:
    if os.path.exists(img_path):
        with Image.open(img_path) as img:
            # Convert to RGB to ensure JPEG compatibility if needed, 
            # though PNG compression can also be applied.
            # I'll save as PNG with higher compression first.
            original_size = os.path.getsize(img_path)
            img.save(img_path, "PNG", optimize=True)
            new_size = os.path.getsize(img_path)
            print(f"Compressed {img_path}: {original_size} -> {new_size} bytes")
