---
slug: cloudflared-self-host-linux
title: "Cara Self-Host Cloudflared Tunnel di Linux"
description: "Panduan lengkap self-host Cloudflared Tunnel di Linux, mulai instalasi hingga konfigurasi pada perangkat lokal."
keywords: [cloudflared, self-host, linux, tunnel, dns, homelab]
tags: [self-hosting, cloudflare, linux, cloudflared, tunnel]
author: Valerino Gozen
author_url: https://github.com/puxxbu
author_title: Back End Engineer at Berijalan
author_image_url: https://media.licdn.com/dms/image/v2/D5603AQEL1EQStWzM_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701697323297?e=1752710400&v=beta&t=mK32frD6CEo2rbtWZ_IhLl-vdxMOxFSQO7omh77l5HA
---

# Cara Self-Host Cloudflared Tunnel di Linux

## Pendahuluan



Cloudflare Tunnel adalah solusi untuk mengekspos layanan lokal ke internet tanpa:

- 🔒 Keamanan data terjamin  
- ⚡ Akses tanpa IP statis  
- 🌐 Integrasi mudah dengan Linux  
- IP publik statis  
- Membuka port firewall  
- Khawatir tentang CGNAT dari ISP  

Lihat juga artikel kami tentang [VPS Murah](/docs/vps-murah).  

:::info
**Catatan Platform:**  
Tutorial ini menggunakan Ubuntu 24.04 LTS, tetapi kompatibel dengan:  
- Windows (x64/ARM)  
- macOS  
- Docker  
- Raspberry Pi (ARM architecture)  
:::

## Prasyarat untuk Self-Hosting Cloudflared di Linux

1. ✅ Akun Cloudflare ([Daftar Gratis](https://dash.cloudflare.com/sign-up))
2. ✅ Domain yang sudah terdaftar di Cloudflare
3. ✅ Akses root/sudo ke perangkat lokal
4. ✅ Koneksi internet stabil

## Langkah 1: Registrasi Domain di Cloudflare

![Cloudflared self-host di Linux: Domain Setup](/img/blog/cloudflared/cloudflared-1-1.png)

1. Login ke [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Klik "Add a Site"
3. Masukkan domain Anda (contoh: `domainanda.com`)
4. Pilih plan **Free**

```bash
# Contoh nameserver Cloudflare:
ns1.cloudflare.com
ns2.cloudflare.com
```

### Troubleshooting Domain

Jika error "Invalid nameserver", update nameserver di registrar domain.  
Proses propagasi DNS biasanya memakan waktu 5-30 menit.  
Verifikasi status di [WhatsMyDNS](https://www.whatsmydns.net/).

## Langkah 2: Setup Zero Trust Tunnel

![Cloudflared self-host di Linux: Zero Trust Setup](/img/blog/cloudflared/cloudflared-3-2.png)

1. Navigasi ke **Access** > **Zero Trust**
2. Pilih **Networks** > **Tunnels**
3. Klik **Create a tunnel**
4. Beri nama yang deskriptif (contoh: `server-utama`)

## Langkah 3: Instalasi Cloudflared

### Untuk Ubuntu/Debian

```bash
# Download package terbaru
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb

# Install package
sudo dpkg -i cloudflared-linux-amd64.deb

# Verifikasi instalasi
cloudflared --version
```

### Untuk Sistem Lain

| OS            | Install Command                                                                 |
|---------------|---------------------------------------------------------------------------------|
| Windows       | Unduh dari [release page](https://github.com/cloudflare/cloudflared/releases)   |
| Docker        | `docker run cloudflare/cloudflared:latest tunnel --no-autoupdate run <TOKEN>`   |
| Raspberry Pi  | `wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm` |

## Langkah 4: Koneksikan Tunnel

1. Salin perintah dari dashboard Zero Trust
2. Jalankan di terminal server Anda:

```bash
cloudflared tunnel --config /path/to/config.yml run <TUNNEL-NAME>
```

### Verifikasi Koneksi

```bash
# Cek status
sudo systemctl status cloudflared

# Lihat log real-time
journalctl -u cloudflared -f --output cat
```

## Langkah 5: Konfigurasi Public Hostname

![Cloudflared self-host di Linux: Public Hostname Setup](/img/blog/cloudflared/cloudflared-5-3.png)

1. Buka tunnel yang sudah dibuat
2. Klik **Add a public hostname**
3. Isi form:
   - **Subdomain**: Misal `web` atau `ssh`
   - **Domain**: Pilih domain yang sudah terdaftar
   - **Service**: Protocol dan port lokal (contoh: `http://localhost:8080`)

### Contoh Konfigurasi Populer

| Layanan      | URL Target             | Contoh Subdomain | Catatan               |
|--------------|------------------------|------------------|-----------------------|
| Web Server   | `http://localhost:80`  | `www`            | Untuk akses website   |
| SSH          | `ssh://localhost:22`   | `ssh`            | Akses remote server   |
| VNC          | `http://localhost:5901`| `vnc`            | Remote desktop        |
| Database     | `tcp://localhost:5432` | `db`             | Akses PostgreSQL      |

## Troubleshooting Lengkap

### 1. Tunnel Tidak Terkoneksi

```bash
# Restart service
sudo systemctl restart cloudflared

# Cek konektivitas
curl https://cloudflare.com
```

### 2. Domain Tidak Bisa Diakses

```bash
# Test DNS
dig subdomain.domainanda.com

# Test koneksi tunnel
cloudflared tunnel ping
```

### 3. Error Certificate

```bash
# Reset certificate
cloudflared tunnel reset

# Hapus cache
rm -rf ~/.cloudflared
```

## Best Practices

### Keamanan

- Gunakan Access Policies untuk membatasi akses
- Aktifkan 2FA di akun Cloudflare
- Batasi akses berdasarkan negara jika perlu

### Maintenance

```bash
# Update rutin
sudo cloudflared update

# Backup konfigurasi
cp /etc/cloudflared/config.yml ~/cloudflared-backup.yml
```

### Monitoring

- Aktifkan notifikasi di dashboard Cloudflare
- Monitor resource usage di server

## Penutup

Keuntungan Menggunakan Cloudflare Tunnel:

☁️ Akses server dari mana saja  
🔒 Keamanan enterprise secara gratis  
⚡ Tidak perlu konfigurasi jaringan rumit  

### Referensi Tambahan

- [Dokumentasi Resmi Cloudflare](https://developers.cloudflare.com/cloudflare-one/)
- [Forum Komunitas Cloudflare](https://community.cloudflare.com/)
- [Repositori GitHub Cloudflared](https://github.com/cloudflare/cloudflared)
