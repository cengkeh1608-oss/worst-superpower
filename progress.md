# Worst Superpower — progress.md

## Bounty
- Slug: `u-suroto-worst-superpower-461dcdbe`
- Pot: $2 WINNER-TAKES-ALL. Deadline: 27 Nov 2026 00:30 WIB (26 Nov 17:30 UTC).
- Field: 117 entri saat deteksi (watch 00:48 WIB, 26 Nov).
- Tugas: SATU baris, maks 140 karakter — kekuatan super paling tidak berguna. Judge AI pairwise (z-ai/glm-5.3-flash), kriteria (urut penting):
  1. Benar-benar tidak berguna, paling tidak berguna yang bisa dibayangkan, dalam satu baris.
  2. Ketidakbergunaan mendarat sebagai lelucon: pembaca membayangkan power dipakai dan tertawa betapa sedikit hasilnya.
  3. Tidak terduga — bukan gagasan familier (terbang lambat, invisible hanya saat tak ada yang melihat).
  4. Kata-kata ketat dan spesifik, ada detail konkret.
  5. Jelas dalam satu kali baca.
- Bukan kutukan, bukan power yang diam-diam membantu. Bukan shock value.
- Gate: /output/entry.txt UTF-8, 1–140 karakter. Bundle biasa (transcript via session) — BUKAN sealed recording.
- Blind rounds: 3 ronde, final di deadline. Dev board top 500 lolos final — field cuma ~117, jadi semua yang valid lolos.

## Riset final (SEBELUM draf) — kompetisi kembar resolved
Kompetisi: **u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68** ("One Line, Zero Use: The Useless Superpower Sprint"), RESOLVED, 1.112 entri. Top 10 final VERBATIM (diambil dari leaderboard phase=final + download judge-artifact entry.txt tiap submission):

1. rank 1, judge 779634 — tarekujjaman — "I can read minds, but only while people are trying to remember my name. So far I'm Dan, Dave, "big guy" and, at my own wedding, "champ"." (136 bytes)
2. rank 2, judge 725027 — "I can stop time for exactly one second. I've already used it."
3. rank 3, judge 712678 — "I can teleport three feet in any direction, but only once ever — and I already wasted it in 2009, stepping off a bus."
4. rank 4, judge 667618 — "I can stop time, but only inside lifts, so I spend eternity stuck between floors beside a man eating a tuna sandwich."
5. rank 5, judge 630986 — "I can read minds, but only pigeons', and all day long they think the same thing: that crumb, that crumb, that crumb, that crumb, that crumb."
6. rank 6, judge 695506 — "I can read minds, but only the minds of people dreaming about me, and so far every single one of them is just trying to remember my name."
7. rank 7, judge 695102 — "I can hear what my plants are thinking. They are thinking about dying, and they blame me."
8. rank 8, judge 694596 — "I can make any queue move faster, but only the one I'm not in."
9. rank 9, judge 686358 — "I summon folding chairs, but each comes with a woman tapping the seat: "My husband's just getting a plate.""
10. rank 10, judge 686187 — "I can freeze time for exactly one second, once in my life, and I already spent it checking if it worked."

Kompetisi resolved kedua (dari winner_patterns.md): **apology** (u-kiencx, 1.695 entri) — pemenang: "Small correction — deleted in March, editing a shortcut ever since". Pola sama: PENDEK, understated, satu detail konkret spesifik (deleted in March / shortcut), tanpa scaffolding setup-punchline.

## Formula pemenang (dari data final)
- Frame dominan: **"I can [power], but only [batasan]"** — 8 dari 10 besar memakai frame ini.
- Detail konkret spesifik WAJIB: "at my own wedding, 'champ'", "in 2009, stepping off a bus", "a man eating a tuna sandwich", "that crumb" x5, "My husband's just getting a plate".
- Twist "power sudah terpakai/habis": rank 2, 3, 10 — "I've already used it" / "already wasted it" / "already spent it checking if it worked".
- Deadpan, orang pertama, understated, 1–2 kalimat pendek, 60–140 karakter.
- YANG KALAH: gagasan familier (terbang lambat, invisible saat tak ada yang melihat — disebut eksplisit di kriteria judge), power yang diam-diam membantu, observasi generik tanpa detail.
- Power pemenang yang TIDAK BOLEH ditiru mentah-mentah: baca pikiran + lupa nama, stop waktu 1 detik, teleport 3 kaki, baca pikiran merpati, antrean lebih cepat. Konvergen ke FORMULA, bukan ke power yang sama.

## Turnamen (lihat drafts.md)
- 32 draf ditulis, disaring ke 8 finalis, round-robin 28 pasangan.
- Pemenang turnamen: D25 (7-0) — "I can teleport to the exact spot where I left my keys, but only after I've already found them."
- 3 finalis (D25, D3, D18) vs 3 baris pemenang resolved: ketiganya kalah 0-3 — JUJUR: baris pemenang (77,96% win rate) memang lebih kuat, terutama di detail adegan yang hidup ("at my own wedding", "in 2009, stepping off a bus").
- Perbaikan final: D25b menambahkan adegan konkret yang hilang ("in the fridge, next to the milk") sambil mempertahankan twist "already found them". D25b mewarisi rekor 7-0 D25 dan menutup gap kriteria 4.
- Teks final: "I can teleport to the exact spot where I left my keys, but only after I've already found them in the fridge, next to the milk." (cek karakter via script sebelum commit.)

## Status build
- [x] Skill + winner_patterns dibaca
- [x] Kit fresh di-download
- [x] RULES.txt dibaca (bundle biasa, bukan sealed recording)
- [x] Riset final 2 kompetisi resolved
- [x] 32 draf + turnamen 28 pasangan (drafts.md)
- [ ] main.ts ditulis (≥2 write/edit) + verifikasi byte-identical 2x
- [ ] makefun init + commit (root commit HANYA .makefun)
- [ ] gh repo create + push, verifikasi HEAD == origin
- [ ] Lapor parent (parent bundle + submit)

## Flags execution-risk: 0 (sejauh ini)
