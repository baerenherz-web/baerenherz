import os

# Set your folder path
folder_path = "/Users/timmazhari/Downloads/Bilder"  # Change this to your actual folder path

# Get all .jpg files in the folder
files = [f for f in os.listdir(folder_path) if f.lower().endswith(".jpg")]
files.sort()  # Ensures they are in order

# Rename files sequentially
for index, filename in enumerate(files, start=1):
    new_name = f"Foto{index:03d}.jpg"  # Creates "Foto001.jpg", "Foto002.jpg", etc.
    old_path = os.path.join(folder_path, filename)
    new_path = os.path.join(folder_path, new_name)
    
    os.rename(old_path, new_path)
    print(f'Renamed: {filename} -> {new_name}')

print("Renaming complete!")