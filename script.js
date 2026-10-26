
const LAPTOP_DATABASE = {
  "pelajar-1": {
    nama: "Nusa Belajar 14",
    kategori: "Laptop Pelajar",
    harga: "Rp 5.499.000",
    gambar: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
    deskripsi: "Ringan dan hemat daya, optimal untuk belajar dan tugas online.",
    spek: {
      layar: '14.0" FHD (1920x1080) IPS Anti-Glare 60Hz',
      cpu: "Intel® Core™ i3-1215U (6 Cores / 8 Threads)",
      gpu: "Intel® UHD Graphics",
      ram: "8 GB DDR4-3200 MHz (Upgradeable)",
      ssd: "256 GB M.2 NVMe PCIe SSD",
      baterai: "42 Wh (Tahan hingga 8 Jam)",
      garansi: "2 Tahun Garansi Resmi Nusa Indonesia"
    }
  },
  "pelajar-2": {
    nama: "Nusa Kampus 15",
    kategori: "Laptop Mahasiswa",
    harga: "Rp 6.299.000",
    gambar: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80",
    deskripsi: "Layar lebar 15.6 inci dengan prosesor AMD terbaru untuk multitasking kuliah.",
    spek: {
      layar: '15.6" FHD (1920x1080) IPS Micro-Edge 60Hz',
      cpu: "AMD Ryzen™ 5 7520U (4 Cores / 8 Threads)",
      gpu: "AMD Radeon™ 610M Graphics",
      ram: "16 GB LPDDR5-5500 MHz Dual Channel",
      ssd: "512 GB M.2 NVMe PCIe Gen 4 SSD",
      baterai: "50 Wh (Tahan hingga 10 Jam)",
      garansi: "2 Tahun Garansi Resmi Nusa Indonesia"
    }
  },
  "pelajar-3": {
    nama: "Nusa Flip 13",
    kategori: "2-in-1 Touchscreen",
    harga: "Rp 7.899.000",
    gambar: "https://images.unsplash.com/photo-1577760258779-e787a1733016?auto=format&fit=crop&w=600&q=80",
    deskripsi: "Engsel 360 derajat fleksibel dengan layar sentuh dan pena stylus.",
    spek: {
      layar: '13.3" WUXGA (1920x1200) IPS Touchscreen 360°',
      cpu: "Intel® Core™ i5-1335U (10 Cores / 12 Threads)",
      gpu: "Intel® Iris® Xe Graphics",
      ram: "16 GB LPDDR5-4800 MHz",
      ssd: "512 GB M.2 NVMe PCIe Gen 4 SSD",
      baterai: "54 Wh (Tahan hingga 11 Jam)",
      garansi: "2 Tahun Garansi Resmi Nusa Indonesia"
    }
  },
  "pekerjaan-1": {
    nama: "Nusa Kerja Pro 14",
    kategori: "Bisnis & AI Ultrabook",
    harga: "Rp 11.499.000",
    gambar: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    deskripsi: "Ditenagai prosesor Intel Core Ultra dengan AI Boost NPU untuk produktivitas modern.",
    spek: {
      layar: '14.0" 2.2K (2240x1400) IPS 100% sRGB',
      cpu: "Intel® Core™ Ultra 5 125H (Dedicated AI NPU)",
      gpu: "Intel® Arc™ Graphics",
      ram: "16 GB LPDDR5X-7467 MHz",
      ssd: "512 GB M.2 NVMe PCIe Gen 4x4 SSD",
      baterai: "65 Wh (Tahan hingga 14 Jam)",
      garansi: "3 Tahun Garansi Resmi Nusa Bisnis"
    }
  },
  "pekerjaan-2": {
    nama: "Nusa Bisnis 15",
    kategori: "Kantor & Korporat",
    harga: "Rp 9.999.000",
    gambar: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    deskripsi: "Dilengkapi keyboard numerik, fingerprint sensor, dan port lengkap untuk kantor.",
    spek: {
      layar: '15.6" FHD (1920x1080) IPS Anti-Glare',
      cpu: "AMD Ryzen™ 7 7730U (8 Cores / 16 Threads)",
      gpu: "AMD Radeon™ Graphics",
      ram: "16 GB DDR4-3200 MHz (Upgradeable s.d 32GB)",
      ssd: "1 TB M.2 NVMe PCIe Gen 4 SSD",
      baterai: "57 Wh (Tahan hingga 12 Jam)",
      garansi: "3 Tahun Garansi Korporat On-site"
    }
  },
  "pekerjaan-3": {
    nama: "Nusa Ultra 13",
    kategori: "Executive Ultralight",
    harga: "Rp 14.299.000",
    gambar: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80",
    deskripsi: "Bobot hanya 990 gram dengan layar 2.8K OLED spektakuler dan baterai awet.",
    spek: {
      layar: '13.3" 2.8K (2880x1800) OLED 90Hz 100% DCI-P3',
      cpu: "Intel® Core™ i7-1360P (Intel Evo Platform)",
      gpu: "Intel® Iris® Xe Graphics (96 EU)",
      ram: "32 GB LPDDR5-5200 MHz",
      ssd: "1 TB M.2 NVMe PCIe Gen 4x4 SSD",
      baterai: "67 Wh (Bobot Ringan 990 gram)",
      garansi: "2 Tahun Garansi Global Nusa"
    }
  },
  "gaming-1": {
    nama: "Nusa Game 15",
    kategori: "Gaming Entry & Esports",
    harga: "Rp 10.999.000",
    gambar: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    deskripsi: "Laptop gaming terjangkau dengan GPU RTX 3050 dan layar 144Hz responsif.",
    spek: {
      layar: '15.6" FHD (1920x1080) IPS 144Hz FreeSync',
      cpu: "AMD Ryzen™ 5 7535HS (6 Cores / 12 Threads)",
      gpu: "NVIDIA® GeForce RTX™ 3050 6GB GDDR6",
      ram: "16 GB DDR5-4800 MHz (Upgradeable)",
      ssd: "512 GB M.2 NVMe PCIe Gen 4 SSD",
      baterai: "60 Wh (Dual Fan Cooling, Adaptor 170W)",
      garansi: "2 Tahun Garansi Resmi Nusa Gaming"
    }
  },
  "gaming-2": {
    nama: "Nusa Game Pro 16",
    kategori: "Gaming Hardcore (Legion Edition)",
    harga: "Rp 21.499.000",
    gambar: "image/LEGION.jpg",
    deskripsi: "Performa monster dengan Intel Core i7-HX, RTX 4060 140W, dan layar 2.5K 165Hz.",
    spek: {
      layar: '16.0" 2.5K WQXGA (2560x1600) IPS 165Hz G-SYNC 500 Nits',
      cpu: "Intel® Core™ i7-13700HX (16 Cores / 24 Threads)",
      gpu: "NVIDIA® GeForce RTX™ 4060 8GB GDDR6 (140W Max TGP)",
      ram: "16 GB DDR5-5200 MHz Dual Channel",
      ssd: "1 TB M.2 NVMe PCIe 4.0 SSD",
      baterai: "80 Wh (Sistem Dingin ColdFront 5.0 Vapor Chamber)",
      garansi: "3 Tahun Legion Ultimate Support"
    }
  },
  "gaming-3": {
    nama: "Nusa Game Lite 14",
    kategori: "Thin & Light Gaming",
    harga: "Rp 14.899.000",
    gambar: "https://images.unsplash.com/photo-1593640495390-1ff7c3f60e9b?auto=format&fit=crop&w=600&q=80",
    deskripsi: "Bodi tipis 14 inci dipadu RTX 4050 dan memori LPDDR5 6400MHz super kencang.",
    spek: {
      layar: '14.0" FHD (1920x1080) IPS 120Hz 100% sRGB',
      cpu: "AMD Ryzen™ 7 7735HS (8 Cores / 16 Threads)",
      gpu: "NVIDIA® GeForce RTX™ 4050 6GB GDDR6 (85W TGP)",
      ram: "16 GB LPDDR5-6400 MHz Ultra Speed",
      ssd: "512 GB M.2 NVMe PCIe 4.0 SSD",
      baterai: "70 Wh (Tahan 9 Jam, Desain Metal 17.9mm)",
      garansi: "2 Tahun Garansi Resmi Nusa Indonesia"
    }
  },
  "kreator-1": {
    nama: "Nusa Kreasi 14",
    kategori: "Desain Grafis & Foto",
    harga: "Rp 17.499.000",
    gambar: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    deskripsi: "Layar 3K PureSight Pro dengan akurasi warna Delta E < 1 dan sertifikasi Studio.",
    spek: {
      layar: '14.5" 3K (3072x1920) IPS 120Hz 100% DCI-P3 Delta E < 1',
      cpu: "Intel® Core™ i7-13700H (14 Cores / 20 Threads)",
      gpu: "NVIDIA® GeForce RTX™ 4050 6GB Studio Driver",
      ram: "32 GB LPDDR5-5200 MHz Onboard",
      ssd: "1 TB M.2 NVMe PCIe Gen 4 SSD",
      baterai: "73 Wh (Fast Charge Pro 100W Type-C)",
      garansi: "2 Tahun Garansi Nusa Premium Care"
    }
  },
  "kreator-2": {
    nama: "Nusa Studio 16",
    kategori: "Video Editing & 3D (MacBook Pro)",
    harga: "Rp 35.999.000",
    gambar: "image/macbook.jpg",
    deskripsi: "Performa Apple M3 Pro dengan Liquid Retina XDR Mini-LED dan baterai 22 jam.",
    spek: {
      layar: '16.2" Liquid Retina XDR Mini-LED 120Hz 1600 Nits Peak',
      cpu: "Apple M3 Pro Chip (12-Core CPU, 16-Core Neural Engine)",
      gpu: "Apple 18-Core GPU (Hardware Ray Tracing)",
      ram: "18 GB Unified Memory (Bandwidth 150 GB/s)",
      ssd: "512 GB Superfast NVMe SSD (Up to 6000 MB/s)",
      baterai: "100 Wh (Daya tahan baterai hingga 22 Jam)",
      garansi: "1 Tahun Garansi Resmi Apple Authorised"
    }
  },
  "kreator-3": {
    nama: "Nusa Studio Touch 15",
    kategori: "Creative Touch & Ilustrasi",
    harga: "Rp 23.999.000",
    gambar: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=600&q=80",
    deskripsi: "Layar sentuh OLED 3.5K dengan dial touchpad untuk Adobe Premiere dan Photoshop.",
    spek: {
      layar: '15.6" 3.5K (3456x2160) Lumina OLED Touchscreen 0.2ms',
      cpu: "Intel® Core™ Ultra 7 155H (Intel AI Boost NPU)",
      gpu: "NVIDIA® GeForce RTX™ 4060 8GB (Studio Driver 90W)",
      ram: "32 GB DDR5-5600 MHz Dual Channel",
      ssd: "1 TB M.2 NVMe PCIe Gen 4x4 SSD",
      baterai: "75 Wh (Dial Controller Touchpad, Tahan 10 Jam)",
      garansi: "2 Tahun Garansi Resmi Internasional"
    }
  }
};


function initModal() {
  const modalEl = document.getElementById("modalSpekDetail");
  if (!modalEl) return;

  document.querySelectorAll("[data-buka-modal]").forEach(tombol => {
    tombol.addEventListener("click", (e) => {
      e.preventDefault();
      const id = tombol.getAttribute("data-laptop");
      const laptop = LAPTOP_DATABASE[id];
      if (!laptop) return;

      document.getElementById("modal-laptop-judul").textContent = laptop.nama;
      document.getElementById("modal-laptop-kategori").textContent = laptop.kategori;
      document.getElementById("modal-laptop-harga").textContent = laptop.harga;
      document.getElementById("modal-laptop-deskripsi").textContent = laptop.deskripsi;
      
      const img = document.getElementById("modal-laptop-img");
      img.src = laptop.gambar;
      img.alt = laptop.nama;

      document.getElementById("modal-laptop-tabel-body").innerHTML = `
        <tr><td>🖥️ Tampilan Layar</td><td><strong>${laptop.spek.layar}</strong></td></tr>
        <tr><td>⚙️ Chipset & CPU</td><td><strong>${laptop.spek.cpu}</strong></td></tr>
        <tr><td>🎮 Kartu Grafis</td><td><strong>${laptop.spek.gpu}</strong></td></tr>
        <tr><td>⚡ Memori RAM</td><td><strong>${laptop.spek.ram}</strong></td></tr>
        <tr><td>💾 Penyimpanan SSD</td><td><strong>${laptop.spek.ssd}</strong></td></tr>
        <tr><td>🔋 Baterai & Daya</td><td>${laptop.spek.baterai}</td></tr>
        <tr><td>🛡️ Garansi Resmi</td><td><span class="garansi-tag">${laptop.spek.garansi}</span></td></tr>
      `;

      bootstrap.Modal.getOrCreateInstance(modalEl).show();
    });
  });
}

function initKartuInteraksi() {

  document.querySelectorAll(".tombol-spek-toggle").forEach(tombol => {
    tombol.addEventListener("click", (e) => {
      e.stopPropagation();
      const kartu = tombol.closest(".kartu");
      kartu.classList.toggle("terbuka");
      tombol.textContent = kartu.classList.contains("terbuka") ? "Tutup Spek" : "🔍 Spek";
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".kartu")) {
      document.querySelectorAll(".kartu.terbuka").forEach(kartu => {
        kartu.classList.remove("terbuka");
        const tombol = kartu.querySelector(".tombol-spek-toggle");
        if (tombol) tombol.textContent = "🔍 Spek";
      });
    }
  });

  document.querySelectorAll(".chip-spek").forEach(chip => {
    const kartu = chip.closest(".kartu");
    const tipe = chip.getAttribute("data-spek");

    chip.addEventListener("mouseenter", () => {
      kartu.querySelectorAll(".spek-item").forEach(item => {
        item.classList.toggle("sorot", item.getAttribute("data-komponen") === tipe);
      });
    });

    chip.addEventListener("mouseleave", () => {
      kartu.querySelectorAll(".spek-item").forEach(item => item.classList.remove("sorot"));
    });
  });
}

// -------------------------------------------------------------
// 4. PENCARIAN CEPAT LAPTOP
// Menyaring kartu laptop secara instan saat mengetik di search bar
// -------------------------------------------------------------
function initPencarianLaptop() {
  const formCari = document.querySelector(".cari");
  const inputCari = document.querySelector(".cari input");
  if (!inputCari) return;

  if (formCari) {
    formCari.addEventListener("submit", (e) => e.preventDefault());
  }

  inputCari.addEventListener("input", () => {
    const kataKunci = inputCari.value.toLowerCase().trim();
    const kartuSemua = document.querySelectorAll(".kartu");

    kartuSemua.forEach(kartu => {
      const teksKartu = kartu.innerText.toLowerCase();
      // Tampilkan kartu jika cocok, sembunyikan jika tidak
      if (teksKartu.includes(kataKunci)) {
        kartu.style.display = "";
      } else {
        kartu.style.display = "none";
      }
    });
  });
}

// -------------------------------------------------------------
// 5. TOMBOL KEMBALI KE ATAS (Scroll to Top)
// -------------------------------------------------------------
function initScrollTop() {
  const btnTop = document.getElementById("btnScrollTop");
  if (!btnTop) return;

  // Munculkan tombol jika sudah scroll lebih dari 350px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      btnTop.classList.add("tampil");
    } else {
      btnTop.classList.remove("tampil");
    }
  });

  // Scroll halus ke atas saat tombol diklik
  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// -------------------------------------------------------------
// JALANKAN SAAT HALAMAN SELESAI DIMUAT
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initModal();
  initKartuInteraksi();
  initPencarianLaptop();
  initScrollTop();
});
