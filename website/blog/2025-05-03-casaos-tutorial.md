---

slug: casaos-selfhost

title: "Instalasi CasaOS, Web UI yang cocok untuk dashboard selfhost"

author: Valerino Gozen

author_url: https://github.com/puxxbu

author_title: Back End Engineer at Berijalan

author_image_url: https://media.licdn.com/dms/image/v2/D5603AQEL1EQStWzM_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701697323297?e=1752710400&v=beta&t=mK32frD6CEo2rbtWZ_IhLl-vdxMOxFSQO7omh77l5HA

tags: [casaos,self hosting,homelab, linux]

---


# Instalasi CasaOS di Homelab Rumahan

Pada kesempatan kali ini, saya akan membagikan langkah-langkah instalasi [CasaOS](https://casaos.zimaspace.com ) di homelab pribadi saya. Bagi yang tertarik dengan *self-hosting* atau ingin membuat *home server* sederhana, CasaOS bisa menjadi pilihan menarik karena menyediakan tampilan yang mudah dipahami dan dapat menjalankan aplikasi berbasis Docker by default.

:::info
**Catatan:** Saat ini saya sudah menguji coba CasaOS pada arsitektur ARM (Armbian) dan x86_64 (Ubuntu 24.04 LTS).
:::

## Mengenal CasaOS

[CasaOS](https://casaos.zimaspace.com ) adalah sistem operasi berbasis Linux yang dirancang khusus untuk pengguna rumahan yang ingin menjalankan layanan *self-hosted* secara mudah melalui antarmuka web. Dengan CasaOS, Anda dapat mengakses dan mengelola aplikasi seperti Jellyfin, Nextcloud, AdGuard Home, dan beberapa aplikasi selfhosting lainnya.

## Spesifikasi Hardware yang Saya Gunakan

- Prosesor: Intel i3-6100  
- RAM: 16 GB DDR4  
- OS: Ubuntu 24.04.2 LTS  
- Kernel: 6.8.0.59-generic  
- Versi CasaOS: 0.4.15  

![neofetch](/img/blog/casaos/neofetch.png)

## Cara Instalasi CasaOS

Ikuti langkah-langkah berikut untuk menginstal CasaOS di perangkat Anda:

### 1. Persiapan Awal

Pastikan Anda telah memasang sistem operasi Linux di pada perangkat anda. Pada kasus ini, saya menggunakan Ubuntu 24.04.2.

### 2. Jalankan Perintah Instalasi

Anda dapat mengunjungi situs resmi [CasaOS](https://casaos.zimaspace.com ) untuk mendapatkan perintah instalasi terbaru. Atau gunakan perintah berikut langsung di terminal:

```zsh
curl -fsSL https://get.casaos.io  | sudo bash
```

![casaos](/img/blog/casaos/casaos.png)


![casaos-install](/img/blog/casaos/casaos-install.png)


### 3. Akses Web UI CasaOS

Setelah proses instalasi selesai, Anda akan diberikan URL lokal untuk mengakses antarmuka pengguna (Web UI) CasaOS. Buka URL tersebut di browser Anda dan buat akun pertama kali.

![show-local](/img/blog/casaos/show-local.png)




## Menjalankan Aplikasi Self-Hosted dengan CasaOS

Setelah berhasil login, Anda dapat langsung mulai menginstal aplikasi *self-hosted* melalui App Store yang tersedia.

### 4. Tampilan Utama CasaOS

Saya telah menginstal beberapa aplikasi menggunakan Docker Compose untuk keperluan uji coba dan pengembangan.

:::note
**Catatan:** Anda juga bisa menggunakan file `docker-compose.yaml` secara manual untuk menginstal aplikasi yang tidak tersedia di App Store.
:::

![show-desktop](/img/blog/casaos/show-desktop.png)


## Eksplorasi App Store CasaOS

App Store menjadi salah satu fitur utama CasaOS — Anda bisa mencari dan menginstal aplikasi populer dalam format Docker Compose hanya dengan beberapa klik saja.

![appstore](/img/blog/casaos/appstore.png)

![manual-install](/img/blog/casaos/manual-install.png)


Fitur ini sangat membantu bagi pengguna awam yang ingin menjalankan aplikasi *self-hosted* tanpa harus bersusah payah menulis konfigurasi Docker sendiri.

## Menambah Repository Eksternal (Opsional)

Untuk memperluas koleksi aplikasi, Anda bisa menambahkan repository eksternal seperti Big Bear CasaOS.


![insert-repo](/img/blog/casaos/insert-repo.png)

### Langkah-langkah Menambah Repository Baru

1. Buka menu **App Store**.
2. Klik tombol **More Apps**.
3. Masukkan alamat repository berikut:


![input-bigbear](/img/blog/casaos/input-bigbear.png)


```zsh
https://icewhale.bigbeartechworld.com/big-bear-casaos.zip 
```

Repository ini merupakan bagian dari komunitas BigBearTechWorld, sebuah repository 3rd party  yang bekerja sama resmi dengan IceWhale (tim di balik CasaOS dan ZimaOS).

Setelah berhasil ditambahkan, Anda akan memiliki akses ke ratusan aplikasi tambahan yang siap diinstal dengan sekali klik.

## Penutup

Instalasi CasaOS cukup sederhana dan cepat, bahkan untuk pengguna yang baru memulai eksplorasi di dunia *self-hosting*. Dengan integrasi Docker dan dukungan App Store (termasuk repository eksternal seperti Big Bear), CasaOS memberikan pengalaman manajemen server rumahan yang modern dan *user-friendly*.

### Rekomendasi blog lain
Mungkin pada pengalaman saya pribadi, menginstall CasaOS saja tidak cukup namun kadang butuh sebuah infrastruktur tambahan untuk mengakses server saya secara publik maupun private menggunakan VPN (WIP)


<!-- ## Kata Kunci SEO yang Disarankan

Agar artikel ini lebih mudah ditemukan di mesin pencari, berikut beberapa **kata kunci / keyword** yang bisa Anda optimalkan:

- cara install casaos
- tutorial casaos ubuntu
- app store casaos
- self hosting dengan casaos
- homelab casaos
- docker compose casaos
- big bear casaos repo
- zimaos vs casaos
- cara setup app store casaos
- self-hosting rumahan -->
