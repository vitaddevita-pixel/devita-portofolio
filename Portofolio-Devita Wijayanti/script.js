/* ✏️ EDIT BAGIAN INI untuk mengganti kontak & konten */
const profile = {
  email: "vitaddevita@gmail.com",
  phone: "085712824089",
};
const typingWords = ["Web Developer", "QA Tester", "Frontend Developer", "Teaching Assistant"];

const tech = {
  excel: ["Microsoft Excel", "excel"], word: ["Microsoft Word", "word"], powerpoint: ["Microsoft PowerPoint", "powerpoint"], access: ["Microsoft Access", "access"],
  php: ["PHP", "php"], csharp: ["C#", "csharp"], laravel: ["Laravel", "laravel"], react: ["React.js", "react"],
  tailwind: ["Tailwind CSS", "tailwind"], dotnet: [".NET", "dotnet"], mysql: ["MySQL", "mysql"], oracle: ["Oracle", "oracle"], phpmyadmin: ["phpMyAdmin", "phpmyadmin"],
};
const skillGroups = [
  ["Microsoft Office", ["excel", "word", "powerpoint", "access"]],
  ["Programming Languages", ["php", "csharp"]],
  ["Frameworks & Libraries", ["laravel", "react", "tailwind", "dotnet"]],
  ["Database & Tools", ["mysql", "oracle", "phpmyadmin"]],
];
const projects = [
  { no: "01", tag: "Final Project", name: "DWD.co", title: "Perancangan Sistem E-Commerce Berbasis Website pada DWD.co",
    short: "Website e-commerce untuk usaha pakaian: alur belanja online dan pengelolaan informasi produk untuk pelanggan dan admin.",
    long: "Proyek akhir berupa pengembangan website e-commerce untuk usaha pakaian. Fokus proyek mencakup alur belanja online dan pengelolaan informasi produk untuk pelanggan dan admin.",
    points: ["Katalog produk dan detail produk dengan sistem pre-order / custom size", "Input ukuran kustom, dengan opsi memakai ukuran dari pesanan sebelumnya (Koleksi Pakaian)", "Keranjang belanja dan checkout dengan pilihan metode pengiriman dan pembayaran", "Pelacakan pesanan: unggah bukti transfer, revisi ukuran, pembatalan pesanan, dan notifikasi pembatalan", "Akun pengguna: profil dan ubah password", "Dashboard admin: laporan keuangan, kelola produk, pesanan, pembayaran, dan akun"],
    stack: ["php", "laravel", "react", "tailwind", "mysql", "phpmyadmin"], thumb: 1,
    imgs: [["dwd-2.png", "Halaman login"], ["dwd-3.png", "Katalog produk"], ["dwd-detail.jpg", "Detail produk (pre-order / custom size)"], ["dwd-ukuran.jpg", "Input ukuran kustom"], ["dwd-keranjang.jpg", "Keranjang belanja"], ["dwd-checkout.jpg", "Checkout: pengiriman & pembayaran"], ["dwd-sukses.jpg", "Pesanan berhasil 
      "], ["dwd-pesanan.jpg", "Detail pesanan: bukti transfer, revisi & pembatalan"], ["dwd-notif.jpg", "Notifikasi pembatalan"], ["dwd-koleksi.jpg", "Koleksi pakaian (ukuran tersimpan)"], ["dwd-profil.jpg", "Profil pengguna"], ["dwd-password.jpg", "Ubah password akun"], ["dwd-1.png", "Dashboard admin: laporan keuangan"]], wide: true },
  { no: "02", tag: "Mini Project", name: "Frontend Mini-Project", title: "Antarmuka Aplikasi Absensi",
    short: "Mini-project pengembangan frontend aplikasi absensi menggunakan React.js dan Tailwind CSS.",
    long: "Mini-project pengembangan frontend aplikasi absensi. Menggunakan React.js dan Tailwind CSS.",
    points: ["Halaman login dan absensi", "Dibangun dengan komponen React.js", "Styling responsif dengan Tailwind CSS"],
    stack: ["react", "tailwind"], imgs: [["absensi-1.png"], ["absensi-2.png"]] },
  { no: "03", tag: "Internship", name: "QA Testing Experience", title: "QA Testing Documentation", qa: true,
    short: "Pengujian aplikasi berbasis web selama magang, termasuk pemeriksaan fitur, skenario pengujian, dan pencatatan hasil.",
    long: "Pengujian aplikasi berbasis web selama program magang, termasuk pemeriksaan fitur, penyusunan skenario pengujian, dan pencatatan hasil pengujian menggunakan Google Sheets.",
    points: ["Pemeriksaan fitur aplikasi web", "Penyusunan skenario pengujian", "Pencatatan hasil pengujian di Google Sheets"],
    stack: [], tools: ["Google Sheets"], imgs: [["qa.png"]] },
];
const experience = [
  { icon: "💼", role: "Internship", org: "PT Teknologi Kartu Indonesia", date: "Januari – Maret 2026", desc: "Pengujian aplikasi berbasis web, dokumentasi hasil pengujian, dan membantu pengembangan antarmuka aplikasi absensi." },
  { icon: "🎓", role: "Asisten Dosen — Pemrograman Berorientasi Objek", org: "Universitas Kristen Satya Wacana (UKSW)", date: "April – Juli 2026", list: ["Mendampingi mahasiswa memahami dasar-dasar pemrograman dan konsep Pemrograman Berorientasi Objek (OOP).", "Melakukan rekapitulasi nilai dan absensi menggunakan Excel/spreadsheet."] },
  { icon: "🎓", role: "Asisten Dosen — Design Pattern", org: "Universitas Kristen Satya Wacana (UKSW)", date: "April – Juli 2026", list: ["Mendampingi mahasiswa mempelajari pola desain pemrograman (Design Pattern), seperti Singleton dan Simple Factory.", "Melakukan rekapitulasi nilai dan absensi menggunakan Excel/spreadsheet."] },
  { icon: "🎓", role: "Asisten Dosen — Pemrograman Basis Data", org: "Universitas Kristen Satya Wacana (UKSW)", date: "April – Juli 2026", list: ["Mendampingi mahasiswa mempelajari pengelolaan basis data dan pemrograman menggunakan SQL.", "Melakukan rekapitulasi nilai dan absensi menggunakan Excel/spreadsheet."] },
  { icon: "🎓", role: "Asisten Dosen — Pemrograman Berorientasi Objek", org: "Universitas Kristen Satya Wacana (UKSW)", date: "Maret – Juli 2025", list: ["Mendampingi mahasiswa memahami dasar-dasar pemrograman dan konsep Pemrograman Berorientasi Objek (OOP).", "Melakukan rekapitulasi nilai dan absensi menggunakan Excel/spreadsheet."] },
  { icon: "💰", role: "Staff Bendahara", org: "HMP D3 TI UKSW", date: "Periode 2024" },
  { icon: "👥", role: "Kepanitiaan & Pengabdian Masyarakat", org: "Kegiatan kampus & komunitas", date: "2024 – 2025",
    list: ["Bendahara — Workshop Mobile Application (Mei 2024)", "Bendahara — Next Gen Web Battle (Juni 2025)", "Peserta pengabdian masyarakat: literasi Generative AI bagi guru SMK (Agustus 2025)"] },
];
const certs = [
  { title: "Database Design", issuer: "Oracle Academy", date: "7 Agustus 2026", img: "cert-1" },
  { title: "Database Programming with SQL", issuer: "Oracle Academy", date: "7 Agustus 2026", img: "cert-2" },
  { title: "Sertifikat Penghargaan Magang (PKL)", issuer: "PT Teknologi Kartu Indonesia", date: "31 Maret 2026 · Hasil: Baik", img: "cert-3" },
];
const nav = [["about", "About"], ["education", "Education"], ["skills", "Skills"], ["projects", "Projects"], ["experience", "Experience"], ["certifications", "Certificates"], ["contact", "Contact"]];

/* ---------- helpers ---------- */
const $ = (s) => document.querySelector(s);
const logo = (k, cls) => `<img src="logos/${tech[k][1]}.svg" alt="${tech[k][0]}" loading="lazy">`;

/* ---------- render ---------- */
$("#menu").innerHTML = nav.map(([id, l]) => `<li><a href="#${id}" data-id="${id}">${l}</a></li>`).join("");

$("#skillGroups").innerHTML = skillGroups.map(([t, ks]) => `
  <div class="group"><h3 class="reveal">${t}</h3>
  <div class="logos stagger">${ks.map((k, i) => `<div class="tech" style="--i:${i}" data-tip="${tech[k][0]}"><div class="card box">${logo(k)}</div><span>${tech[k][0]}</span></div>`).join("")}</div></div>`).join("");

$("#projectGrid").innerHTML = projects.map((p, i) => `
  <article class="card proj reveal ${p.wide ? "wide" : ""} ${p.qa ? "qa" : ""}" style="--i:${i}">
    <div class="thumb"><img src="images/${p.imgs[p.thumb || 0][0]}" alt="${p.name}" loading="lazy"></div>
    <div class="info"><div class="meta"><span>Project ${p.no}</span><span>${p.tag}</span></div>
      <h3>${p.name}</h3><p>${p.short}</p>
      <div class="minis">${p.stack.map((k) => `<span class="mini" data-tip="${tech[k][0]}">${logo(k)}</span>`).join("")}${(p.tools || []).map((t) => `<span class="pill">${t}</span>`).join("")}</div>
      <button class="more" data-p="${i}">View Details ↗</button></div>
  </article>`).join("");

$("#timeline").insertAdjacentHTML("beforeend", experience.map((e) => `
  <div class="t-item reveal"><span class="dot">${e.icon}</span><div class="card"><small>${e.date}</small><h3>${e.role}</h3><p class="org">${e.org}</p>
  ${e.desc ? `<p class="d">${e.desc}</p>` : ""}${e.list ? `<ul>${e.list.map((l) => `<li>${l}</li>`).join("")}</ul>` : ""}</div></div>`).join(""));

$("#gallery").innerHTML = [1, 2, 3, 4, 5, 6].map((n) => `<div class="reveal" style="--i:${n % 3}"><img src="images/act-${n}.jpg" alt="Dokumentasi kegiatan ${n}" loading="lazy"></div>`).join("");

$("#certGrid").innerHTML = certs.map((c, i) => `
  <button class="card cert reveal" style="--i:${i}" data-c="${i}"><div class="t"><img src="images/${c.img}.jpg" alt="${c.title}" loading="lazy"></div>
  <div class="i">🏅<h3>${c.title}</h3><p>${c.issuer}</p><small>${c.date}</small></div></button>`).join("");

const links = [
  ["✉", "Email", profile.email, `mailto:${profile.email}`],
  ["☎", "No. Telepon", profile.phone, `tel:${profile.phone.replace(/[^+\d]/g, "")}`],
];
$("#contactLinks").innerHTML = links.map(([ic, l, v, h], i) => `<${h ? `a href="${h}" ${h.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}` : "div"} class="c-link reveal" style="--i:${i}"><span class="ic">${ic}</span><div><small>${l}</small><span>${v}</span></div></${h ? "a" : "div"}>`).join("");
$("#year").textContent = new Date().getFullYear();

/* ---------- preloader ---------- */
setTimeout(() => $("#preloader").classList.add("done"), 1700);
setTimeout(() => $("#preloader").remove(), 2700);

/* ---------- typing ---------- */
(() => {
  let w = 0, c = 0, del = false; const el = $("#typing");
  (function tick() {
    const word = typingWords[w];
    c += del ? -1 : 1; el.textContent = word.slice(0, c);
    let t = del ? 40 : 85;
    if (!del && c === word.length) { del = true; t = 1400; }
    else if (del && c === 0) { del = false; w = (w + 1) % typingWords.length; t = 300; }
    setTimeout(tick, t);
  })();
})();

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
document.querySelectorAll(".reveal, .logos").forEach((el) => io.observe(el));

/* ---------- navbar ---------- */
const navEl = $("#nav");
$("#burger").onclick = () => navEl.classList.toggle("open");
document.querySelectorAll("#menu a").forEach((a) => a.addEventListener("click", () => navEl.classList.remove("open")));
const spy = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && document.querySelectorAll("#menu a").forEach((a) => a.classList.toggle("active", a.dataset.id === e.target.id))), { rootMargin: "-45% 0px -50% 0px" });
nav.forEach(([id]) => spy.observe(document.getElementById(id)));

/* ---------- scroll: navbar, back-to-top, timeline progress ---------- */
const tl = $("#timeline"), prog = $("#progress");
const onScroll = () => {
  navEl.classList.toggle("scrolled", scrollY > 20);
  $("#toTop").classList.toggle("show", scrollY > 600);
  const r = tl.getBoundingClientRect(), vh = innerHeight * 0.6;
  prog.style.height = Math.max(0, Math.min(r.height, vh - r.top)) + "px";
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();
$("#toTop").onclick = () => scrollTo({ top: 0, behavior: "smooth" });

/* ---------- modal & lightbox ---------- */
function openModal(el) { el.hidden = false; requestAnimationFrame(() => el.classList.add("show")); document.body.style.overflow = "hidden"; }
function closeModals() {
  const open = [...document.querySelectorAll(".modal.show")], m = open[open.length - 1];
  if (!m) return;
  m.classList.remove("show"); setTimeout(() => (m.hidden = true), 300);
  if (open.length === 1) document.body.style.overflow = "";
}
document.querySelectorAll(".modal").forEach((m) => m.addEventListener("click", (e) => { if (e.target === m || e.target.closest(".close")) closeModals(); }));
addEventListener("keydown", (e) => e.key === "Escape" && closeModals());

document.querySelectorAll(".more").forEach((b) => b.addEventListener("click", () => {
  const p = projects[b.dataset.p];
  $("#modalBody").innerHTML = `
    <p class="eyebrow">Project ${p.no} — ${p.tag}</p><h3>${p.title}</h3><p class="muted">${p.long}</p>
    <ul>${p.points.map((x) => `<li>${x}</li>`).join("")}</ul>
    <p class="eyebrow" style="margin-top:1.5rem">Teknologi</p>
    <div class="logos in" style="margin-top:1.5rem">${p.stack.map((k, i) => `<div class="tech" style="--i:${i}" data-tip="${tech[k][0]}"><div class="card box">${logo(k)}</div><span>${tech[k][0]}</span></div>`).join("")}${(p.tools || []).map((t) => `<span class="pill">${t}</span>`).join("")}</div>
    <div class="shots ${p.imgs.length > 1 ? "two" : ""}">${p.imgs.map(([f, c]) => `<figure><img src="images/${f}" alt="${c || p.name}" data-zoom loading="lazy">${c ? `<figcaption>${c}</figcaption>` : ""}</figure>`).join("")}</div>`;
  openModal($("#modal"));
}));
$("#modalBody").addEventListener("click", (e) => { const i = e.target.closest("[data-zoom]"); if (i) { $("#lbImg").src = i.src; $("#lbImg").alt = i.alt; openModal($("#lightbox")); } });
document.querySelectorAll(".cert").forEach((b) => b.addEventListener("click", () => {
  const c = certs[b.dataset.c]; $("#lbImg").src = `images/${c.img}.jpg`; $("#lbImg").alt = c.title; openModal($("#lightbox"));
}));

/* ---------- contact form -> mailto ---------- */
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const n = $("#fName").value, m = $("#fMsg").value;
  location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Halo Devita, saya " + n)}&body=${encodeURIComponent(m + "\n\n— " + n)}`;
});
