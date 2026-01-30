document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.page-section'); // Ambil semua bagian konten
    const navLinks = document.querySelectorAll('.sidebar a');      // Ambil semua tautan navigasi

    const observerOptions = {
        root: null, // Mengamati viewport
        rootMargin: '0px 0px -50% 0px', // Aktif ketika bagian konten mencapai 50% di atas viewport
        threshold: 0 // Tidak diperlukan karena rootMargin yang sudah ada
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hapus kelas 'active' dari semua tautan
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Dapatkan ID dari bagian yang sedang terlihat
                const currentId = entry.target.id;
                
                // Tambahkan kelas 'active' ke tautan yang sesuai
                const correspondingLink = document.querySelector(`.sidebar a[href="#${currentId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Amati setiap bagian konten
    sections.forEach(section => {
        observer.observe(section);
    });
});