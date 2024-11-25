document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signin-form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Mencegah reload halaman
  
      // Ambil nilai input
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      // Email dan password yang valid (hardcoded)
      const validEmail = 'admin@gmail.com';
      const validPassword = 'admin123';
  
      // Validasi sederhana
      if (!email || !password) {
        alert('Email dan password wajib diisi.');
        return;
      }
  
      // Validasi email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Masukkan alamat email yang valid.');
        return;
      }
  
      // Cek kredensial
      if (email === validEmail && password === validPassword) {
        alert('Login berhasil! Anda akan diarahkan ke dashboard.');
        // Redirect ke halaman dashboard.html
        window.location.href = 'dashboard.html';
      } else {
        alert('Email atau password salah.');
      }
    });
  });
  