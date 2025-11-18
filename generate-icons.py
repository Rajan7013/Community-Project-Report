#!/usr/bin/env python3
"""Generate PWA icons for the Community Service Project website"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size):
    """Create an icon of specified size"""
    # Create image with gradient background
    img = Image.new('RGB', (size, size), color=(21, 128, 61))  # Green background
    draw = ImageDraw.Draw(img)
    
    # Draw gradient (simple version - fill with solid color)
    # For a proper gradient, we'd need more complex code
    for i in range(size):
        # Create gradient from green to blue
        r = int(21 + (2 - 21) * (i / size))
        g = int(128 + (132 - 128) * (i / size))
        b = int(61 + (199 - 61) * (i / size))
        draw.line([(0, i), (size, i)], fill=(r, g, b))
    
    # Draw rounded corners effect (optional)
    # Add white border for app icon look
    border_color = (255, 255, 255)
    border_width = 2
    draw.rectangle(
        [(border_width, border_width), (size - border_width, size - border_width)],
        outline=border_color,
        width=border_width
    )
    
    # Add emoji text (cow)
    try:
        # Try to use a larger font
        font_size = int(size * 0.4)
        font = ImageFont.load_default()
    except:
        font = ImageFont.load_default()
    
    # Draw cow emoji
    emoji = "🐄"
    text_bbox = draw.textbbox((0, 0), emoji, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    x = (size - text_width) // 2
    y = (size - text_height) // 2 - int(size * 0.1)
    
    draw.text((x, y), emoji, fill=(255, 255, 255), font=font)
    
    # Add CSP text
    text = "CSP"
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    x = (size - text_width) // 2
    y = size - int(size * 0.15)
    
    draw.text((x, y), text, fill=(255, 255, 255), font=font)
    
    return img

# Create icons
print("Generating PWA icons...")

icon_192 = create_icon(192)
icon_192.save('public/icon-192x192.png')
print("✓ Created icon-192x192.png")

icon_512 = create_icon(512)
icon_512.save('public/icon-512x512.png')
print("✓ Created icon-512x512.png")

print("\nIcons generated successfully!")
print("Files saved to public/ directory")
