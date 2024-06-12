# Test2 - Altech

- Project ini merupan sebuah website yang ditujukan untuk mempromosikan applikasi ERP dengan tema SES ( Synergy ERP Solution) yang memiliki 3 jenis proguk yaitu Basic, Business dan Enterpreneur.
- Terdapat beberapa section pada project ini yaitu Hero, About, Pricing dan Contact
- Pada project ini dibuat dalam bentuk view desktop (1441px) dan mobile (428px)
- Link deploy firebase: `https://ses-erp.web.app`

# Running App

- Clone repo ini `git clone`
- Masuk ke derectory `/test2-altech`
- Install package `npm i`
- Jalankan app `npm run dev`

# Stack

- `ReactJs` : penggunaan sistem komponen bisa memecah bagian kerja menjadi bagian yang lebih kecil sehinggal lebih mudah di maintence, penggunaan state dari yang sederhana hingga kompleks sesuai kebutuhan tersedia di framework ini.
- `SASS` : semua aturanya sama degnan css biasa tapi saya menggunakan SASS dikarenakan kemudahan akibat fitur nesting sehingga lebih mudah untuk tracking bagian-bagian css satu lagi juga yaitu untuk membuat responsive saya biasanya menggunakan fitur mixins yang akan lebih mudah digunakan dalam aplikasinya ketika membuat web responsive.
- `React Icon`: library yang cukup lengkap untuk penyedia icon dan mudah digunakan
- `React Router Dom` : untuk memanajemen route pada aplikasi penggunaan stack ini bisa membuat lebih mudah, ada fitur loader juga yang kedepanya bisa diterapkan sebagai middleware ketika ingin melewati atau menuju suatu routing. yang biasanya saya gunakan
- `Framer Motion` : Yang pernah saya gunakan sejauh ini hanya framer untuk memberikan motion pada component website dan saya rasa penggunaanya cukup mudah.
- `React Redux` : Rencana awalnya saya akan gunakan untuk menyimpan data tier produk basik, business dan enterpreneur pada state redux, tapi pada project ini di hardcode pada html.
- `React Toastify`: Penggunaan yang mudah hanya tinggal memanggilnya saya, dan tampilan lebih menarik daripada sweetAlert yang pernah saya pakai.
