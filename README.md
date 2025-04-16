# GPro_VF
<!DOCTYPE html>
import zipfile
import os

# Define folder structure and files to include
project_name = "GestorPro_PWA_Final"
project_dir = f"/mnt/data/{project_name}"
os.makedirs(project_dir, exist_ok=True)

# Files and content
files = {
    "index.html": """
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="manifest" href="manifest.webmanifest" />
    <title>GestorPro</title>
    <link rel="icon" href="icon-192.png" />
    <script>
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("service-worker.js").then(() => {
                console.log("Service Worker registrado com sucesso.");
            });
        }
    </script>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .button-container { margin-top: 20px; }
        button { padding: 10px 20px; margin: 5px; font-size: 16px; }
    </style>
</head>
<body>
    <h1>Bem-vindo ao GestorPro</h1>
    <p>Gerencie sua vida pessoal, profissional e empresarial num só lugar.</p>
    <div class="button-container">
        <button onclick="instalarApp()">Instalar App</button>
        <a href="GestorPro_PWA_Final.zip" download><button>Baixar ZIP</button></a>
    </div>
    <script>
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
        });

        function instalarApp() {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then(() => {
                    deferredPrompt = null;
                });
            }
        }
    </script>
</body>
</html>
""",
    "manifest.webmanifest": """
{
    "name": "GestorPro",
    "short_name": "GPro",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#0d6efd",
    "icons": [
        {
            "src": "icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
""",
    "service-worker.js": """
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('gpro-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.webmanifest',
                '/icon-192.png',
                '/icon-512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
"""
}

# Create and write the files
for filename, content in files.items():
    with open(os.path.join(project_dir, filename), "w", encoding="utf-8") as f:
        f.write(content.strip())

# Dummy icons (placeholders)
with open(os.path.join(project_dir, "icon-192.png"), "wb") as f:
    f.write(b"\x89PNG\r\n\x1a\n")  # Basic PNG header
with open(os.path.join(project_dir, "icon-512.png"), "wb") as f:
    f.write(b"\x89PNG\r\n\x1a\n")

# Create ZIP
zip_path = f"/mnt/data/{project_name}.zip"
with zipfile.ZipFile(zip_path, "w") as zipf:
    for root, _, files_in_dir in os.walk(project_dir):
        for file in files_in_dir:
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, project_dir)
            zipf.write(full_path, arcname=rel_path)

zip_path



