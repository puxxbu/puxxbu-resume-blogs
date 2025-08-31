---
slug: homelab-journey-2025
title: "Pengalaman Berkecimpung Membuat Homelab 🏠 "
author: Valerino Gozen
author_url: https://github.com/puxxbu
author_title: Back End Engineer at Berijalan
author_image_url: /img/profilepic.jpg
tags: [self hosting, homelab, linux]
image: /img/blog/selfhost-journey/homelab-puxxbu.png
description: "Catatan perjalanan saya membangun homelab: dari perakitan, jaringan, sampai otomasi layanan."
---

### **Bikin Homelab Sendiri ? Gampang!** 💻

Di awal tahun 2025, saya banyak terinspirasi dari diskusi di komunitas reddit seperti r/selfhosted. Melihat bagaimana para member disana membangun server pribadi untuk berbagai layanan mulai dari _cloud storage_ hingga email server memicu rasa penasaran saya. Bukan hanya efisiensi biaya, tetapi juga kontrol penuh atas data dan privasi, serta kesempatan belajar yang bagi saya cukup worth it.

Salah satu miskonsepsi umum yang sering menghalangi pemula adalah anggapan bahwa _homelab_ wajib memiliki alamat IP Statis agar bisa diakses dari luar. Dulu saya pun berpikir demikian. Namun, perkembangan teknologi telah menyediakan solusi untuk tantangan ini.

Dalam tulisan ini, saya akan berbagi pengalaman dalam proses penyiapan _homelab_ pribadi, mulai dari merakit kembali part pc saya yang ada, konfigurasi OS Linux, hingga mengelola aplikasi dengan Docker.

#### **Mengapa Membangun Homelab?**

- **Efisiensi Biaya:** Alternatif gratis untuk layanan berbayar seperti _cloud storage_ atau _web hosting_.
- **Kontrol & Privasi:** Kendali penuh atas data pribadi tanpa campur tangan pihak ketiga.
- **Sarana Belajar:** Kesempatan luar biasa untuk mendalami dunia server, jaringan, dan cyber security.

---

### **Arsitektur dan Perangkat Keras**

Berikut adalah diagram arsitektur singkat homelab saya:

![Arsitektur Selfhost](/img/blog/selfhost-journey/homelab-puxxbu.png)


- **Server Utama:** PC desktop lama (Intel i3, 16GB RAM).
- **Server Pendukung:** STB (_Set-Top Box_) dengan keadaan _root_ seharga Rp 150.000.

Note : Menurut saya STB ini merupakan salah satu barang yang cukup worth it untuk memulai belajar self hosting tanpa merogoh kocek yang cukup mahal + hemat listrik ketika dinyalakan terus menerus

Karena penyedia internet (ISP) di rumah saya tidak menyediakan IP publik statis, saya mengandalkan dua tools utama agar layanan yang berjalan di server tetap dapat diakses secara fleksibel dan aman.

**1. Cloudflare Tunnel (Zero Trust) 🚀**
Layanan ini membuat aplikasi di server lokal bisa diakses secara publik melalui domain.

- **Fungsi:** Menjadi "terowongan" aman antara server di rumah dengan jaringan global Cloudflare.
- **Keuntungan Utama:**
  - **Akses Publik:** Layanan bisa diakses dari mana saja lewat nama domain.
  - **Keamanan:** Tidak perlu membuka _port_ di _firewall_ rumah, sehingga lebih aman dari serangan.
- **Biaya:** Tersedia paket gratis yang sangat memadai untuk kebutuhan personal.

untuk lebih lengkapnya bisa kunjungi blog saya mengenai setup [Cloudflare Tunnel](https://puxxbu.my.id/blog/cloudflared-self-host-linux/)

**2. Tailscale 🛡️**
Layanan ini menciptakan jaringan pribadi (VPN) yang aman untuk semua perangkat saya.

- **Fungsi:** Menghubungkan server, laptop, dan _smartphone_ dalam satu jaringan virtual yang terenkripsi.
- **Keuntungan Utama:**
  - **Akses Terbatas:** Hanya perangkat dan pengguna yang diizinkan yang bisa masuk ke jaringan.
  - **Keamanan Maksimal:** IP asli server tidak tyaerekspos ke internet sama sekali. Sangat ideal untuk manajemen server jarak jauh.
- **Biaya:** Gratis untuk penggunaan pribadi.

## Aplikasi yang Saya Self-Host di Homelab

Mayoritas aplikasi yang saya self-host dijalankan menggunakan **Docker Compose**, dengan **Portainer** sebagai alat utama untuk memanage sekaligus menjadi dashboard container. Sebagian besar layanan ini saya gunakan untuk kebutuhan pribadi, sehingga peran **Tailscale** sangat penting di homelab saya.

Dengan Tailscale, semua aplikasi berjalan di jaringan privat dan **tidak bisa diakses secara publik**. Hanya perangkat atau orang yang sudah didaftarkan di Tailscale yang bisa mengakses layanan tersebut. Cara ini membuat homelab tetap aman, tapi tetap praktis digunakan kapan saja.

Berikut beberapa aplikasi yang saya jalankan di homelab:

---

### 1. [Beszel](https://beszel.dev) – Monitoring Sederhana, Ringkas, dan Efektif

![Beszel Sample](/img/blog/selfhost-journey/beszel-sample.png)

Kalau butuh aplikasi monitoring yang ringan tapi cukup lengkap, **Beszel** jadi pilihan tepat. Ia bisa menampilkan penggunaan resource server (CPU, RAM, storage, hingga network), bahkan memberi **notifikasi alert** kalau ada resource yang sudah mencapai ambang batas.

Untuk kebutuhan saya, Beszel **lebih dari cukup** dibanding harus men-setup **Grafana + Prometheus** yang jauh lebih berat dari segi penggunaan resource.

- **Monitoring** : CPU, RAM, storage, dan network
- **Mendukung Docker**: bisa monitoring container secara langsung
- **Multi-instance**: bisa dipasang di banyak server dengan agent
- **Setup cepat** dan mudah
- **Alert bawaan** kalau resource melebihi batas

---

### 2. [Rustdesk](https://rustdesk.com) – Remote Desktop Gratis

Kadang saya butuh akses ke server lewat tampilan GUI, bukan sekadar terminal. Untuk itu saya pakai **Rustdesk**. Aplikasi ini gratis, setup-nya mudah, dan bisa diselfhost kalau mau. Rasanya seperti punya **RDP (Remote Desktop Protocol)** sendiri, tapi tanpa ribet.

**Poin penting:**

- **Remote desktop gratis**
- **Setup mudah**, tidak ribet
- Bisa **selfhost server relay** jika dibutuhkan

---

### 3. [Syncthing](https://syncthing.net) – Sinkronisasi File Peer-to-Peer

Kalau Anda sering pindah-pindah file antar device, Syncthing wajib dicoba. Aplikasi ini memungkinkan sinkronisasi folder secara **peer-to-peer**, langsung antar perangkat, tanpa lewat cloud pihak ketiga.

**Poin penting:**

- **Web GUI** yang mempermudah manajemen file/folder
- **Peer-to-peer langsung** tanpa server pusat
- **Sinkronisasi otomatis** antar device

---

### 4. [Portainer](https://www.portainer.io) – Dashboard Docker

Bagi saya, **Portainer** adalah “dashboard wajib” di homelab. Lewat antarmuka berbasis web, saya bisa dengan mudah membuat template **docker-compose**, mengelola container, hingga backup.

**Poin penting:**

- **GUI berbasis web** yang ramah pengguna
- **Mempermudah deployment** container Docker
- **Remote management** lewat agen Portainer
- **Backup template & container** dengan mudah

---

### 5. [File Browser](https://filebrowser.org) – File Explorer

Sesuai namanya, **File Browser** adalah file explorer berbasis web. Konsepnya mirip Google Drive atau OneDrive, tapi berjalan di server pribadi.

**Poin penting:**

- **Antarmuka web** seperti Google Drive
- **Ringkas & ringan** dalam penggunaan
- Mudah untuk **akses dan manajemen file**

---

### 6. [n8n](https://n8n.io) – Workflow Automation 

Tahun 2025 ini, **n8n** lagi booming. Aplikasi ini memungkinkan kita membuat workflow automation tanpa coding yang terlalu rumit. Bagi saya yang punya background programming, n8n sangat menyenangkan untuk dieksplorasi.

**Poin penting:**

- **Cocok untuk eksplorasi** otomasi data
- **Interface** mudah dipahami
- **Komunitas besar** yang aktif

---

### 7. [CouchDB](https://couchdb.apache.org) – Database untuk Obsidian

Saya gunakan **CouchDB** khusus sebagai database untuk **Obsidian**, agar bisa sinkronisasi catatan secara mandiri tanpa harus menggunakan layanan berbayar.

**Poin penting:**

- **Database ringan** untuk kebutuhan kecil
- **Integrasi lancar** dengan Obsidian

---

### 8. [Stirling PDF](https://stirlingpdf.io) – Alternatif Aman untuk PDF Tools

Kalau sering berkutat dengan PDF, **Stirling PDF** adalah penyelamat. Fiturnya mirip iLovePDF (merge, split, compress, dll.), tapi karena diselfhost, privasi file lebih terjaga.

**Poin penting:**

- **Tools PDF lengkap**: merge, split, compress, dll.
- **Lebih aman** karena selfhost
- Cocok untuk **pekerjaan rutin dengan PDF**

---

### 9. [Umami](https://umami.is) – Analytics

Buat Anda yang ingin alternatif Google Analytics, **Umami** layak dicoba. Setup-nya mudah, fiturnya cukup lengkap, dan bisa diakses publik untuk men-track trafik website.

**Poin penting:**

- **Alternatif Google Analytics** open-source
- **Setup cepat & ringan**
- **Privasi lebih terjaga** dibanding Google Analytics

---

### 10. [Adguard Home](https://adguard.com/en/adguard-home/overview.html) – DNS Filtering

Di STB saya, ada **Adguard Home** yang bertugas memfilter DNS. Jadi, setiap request DNS bisa disaring—apakah termasuk ke daftar berbahaya, penuh iklan, atau aman diakses.

**Poin penting:**

- **Filtering DNS** dari iklan & malware
- **Meningkatkan keamanan browsing**
- Bisa diatur untuk **semua perangkat jaringan**

---

### 11. [Upsnap](https://github.com/seriousm4x/UpSnap) – Memantau Device via MAC Address

Upsnap membantu saya mengetahui apakah sebuah device sedang aktif atau mati hanya dari MAC address-nya. Sangat berguna, apalagi saat listrik padam—karena STB otomatis hidup, sementara server butuh saya nyalakan manual.

**Poin penting:**

- **Pantau status device** hanya dengan MAC Address
- Berguna saat **listrik padam**
- Bisa dipasang di **STB untuk monitoring tambahan**

---
